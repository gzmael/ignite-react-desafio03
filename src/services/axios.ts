import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/cnd.github.v3+json',
    Authorization: 'token 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',
  },
})
