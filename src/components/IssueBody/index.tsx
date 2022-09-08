import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import * as S from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const IssueBody = () => {
  const { activeIssue } = useContext(GithubContext)
  if (!activeIssue) return null

  return (
    <S.Container>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkHtml]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={dracula}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {activeIssue.body}
      </ReactMarkdown>
    </S.Container>
  )
}

export { IssueBody }
