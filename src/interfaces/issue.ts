import { User } from './user'

export interface Issue {
  title: string
  url: string
  id: number
  created_at: string
  body: string
  comments: number
  user: Pick<User, 'login'>
}
