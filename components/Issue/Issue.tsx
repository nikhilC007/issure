import React from 'react'

import * as S from './Issue.style'

const Issue: React.FC<{
  title: string
  link: string
  number: number
  labels: any
}> = ({ title, link, number, labels }) => {
  return (
    <S.IssueBox>
      <S.IssueTitle>#765 This is a Test Issue</S.IssueTitle>
    </S.IssueBox>
  )
}

export default Issue
