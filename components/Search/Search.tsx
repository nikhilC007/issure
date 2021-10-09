import React from 'react'

import * as S from './Search.style'
import LiquidButton from '@components/LiquidButton'
import { Octokit } from '@octokit/rest'
import Issue from '@components/Issue/Issue'

export type label = {
  color: string
  default: boolean
  description: string
  id: number
  name: string
  node_id: string
  url: string
}

const Search: React.FC = () => {
  const octo = new Octokit({})

  const inputRef = React.useRef<HTMLInputElement>(null)

  const [title, setTitle] = React.useState<string>()
  const [link, setLink] = React.useState<string>()
  const [number, setNumber] = React.useState<number>()
  const [tags, setTags] = React.useState<any[]>()

  const [repoDetails, setRepoDetails] = React.useState([''])

  React.useEffect(() => {
    inputRef.current!.addEventListener('change', () => {
      setRepoDetails(inputRef.current!.value.split('/'))
    })
  }, [])

  const FetchIssues = () => {
    octo
      .paginate(octo.issues.listForRepo, {
        owner: 'codemyst',
        repo: 'pastemyst',
      })
      .then((issues) => {
        console.log(repoDetails)

        let issueNumbers = []

        for (let i = 0; i < issues.length; i++) {
          issueNumbers.push(issues[i].number)
        }

        const issueIndex = Math.floor(
          Math.random() * Math.floor(issueNumbers.length)
        )

        setTitle(issues[issueIndex].title)
        setLink(issues[issueIndex].html_url)
        setNumber(issues[issueIndex].number)
        setTags(issues[issueIndex].labels)

        console.log(title)
        console.log(link)
        console.log(number)
        console.log(tags)
      })
  }

  return (
    <S.SearchContainer>
      <S.SearchInput
        placeholder='URL, or username/repo'
        spellCheck='false'
        ref={inputRef}
      />
      <LiquidButton GetIssues={FetchIssues} />
      <Issue title={title!} link={link!} number={number!} labels={tags!} />
    </S.SearchContainer>
  )
}

export default Search
