import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Issue } from '../interfaces/issue'
import { User } from '../interfaces/user'
import { api } from '../services/axios'

interface GithubContextType {
  user: User | null
  activeIssue: Issue | null
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
  fetchActiveIssue: (id: number) => Promise<void>
  clearActiveIssue: () => void
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [activeIssue, setActiveIssue] = useState<Issue | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const fetchIssues = useCallback(async (query?: string) => {
    const params = new URLSearchParams()
    params.set('q', query || '')
    const result = await api.get(
      `/search/issues?${params.toString()}repo:gzmael/ignite-react-desafio03`,
    )

    if (result && result.data && result.data.items) {
      const repoIssues = result.data.items as Issue[]

      setIssues(
        repoIssues.map((repoIssue) => {
          return {
            body: repoIssue.body,
            comments: repoIssue.comments,
            created_at: repoIssue.created_at,
            id: repoIssue.id,
            title: repoIssue.title,
            html_url: repoIssue.html_url,
            user: { login: repoIssue.user.login },
            number: repoIssue.number,
          }
        }),
      )
    }
  }, [])

  const fetchActiveIssue = useCallback(async (id: number) => {
    const result = await api.get(
      `repos/gzmael/ignite-react-desafio03/issues/${id}`,
    )

    if (result && result.data) {
      const data = result.data as Issue

      setActiveIssue(() => ({
        body: data.body,
        comments: data.comments,
        created_at: data.created_at,
        html_url: data.html_url,
        id,
        title: data.title,
        user: { login: data.user.login },
        number: data.number,
      }))
    }
  }, [])

  const clearActiveIssue = useCallback(() => {
    setActiveIssue(null)
  }, [])

  const getUser = useCallback(async () => {
    const result = await api.get('users/gzmael')
    const { data } = result
    if (data) {
      setUser(() => ({
        avatar_url: data.avatar_url,
        company: data.company,
        followers: data.followers,
        html_url: data.html_url,
        login: data.login,
        name: data.name,
        bio: data.bio,
      }))
    }
  }, [])

  useEffect(() => {
    getUser()
    fetchIssues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GithubContext.Provider
      value={{
        fetchIssues,
        fetchActiveIssue,
        clearActiveIssue,
        activeIssue,
        issues,
        user,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
