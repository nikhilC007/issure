import React from 'react'
import { Calendar, User } from 'react-feather'

import { label } from '@components/Search/Search'
import * as S from './Issue.style'

const Issue: React.FC<{
  title: string
  date: string
  author: string
  link: string
  number: number
  labels: label[]
}> = ({ title, date, author, link, number, labels }) => {
  return (
    <S.IssueBox>
      <S.IssueTitle href={link}>
        #{number} {title}
      </S.IssueTitle>
      <S.IssueDescription>
        <Calendar /> Created on {date}
      </S.IssueDescription>
      <S.IssueDescription>
        <User /> Created by {author}
      </S.IssueDescription>
      <S.Labels>
        {labels.map((label: any, index) => (
          <S.Label key={index} href={label.url} target='_blank'>
            {label.name}
          </S.Label>
        ))}
        {/* <S.Label>Test</S.Label>
        <S.Label>JavaScript</S.Label> */}
      </S.Labels>
    </S.IssueBox>
  )
}

export default Issue
