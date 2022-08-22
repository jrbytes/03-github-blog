import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import * as S from './styles'

export function Content() {
  const [content, setContent] = useState('')

  useEffect(() => {
    async function showMD() {
      const md = await axios.get('/data/test.md')
      setContent(md.data)
    }
    showMD()
  }, [])

  return (
    <S.Content>
      <ReactMarkdown>{content}</ReactMarkdown>
    </S.Content>
  )
}
