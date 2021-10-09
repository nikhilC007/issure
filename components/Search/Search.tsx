import React from 'react'

import * as S from './Search.style'
import LiquidButton from '@components/LiquidButton'

const Search: React.FC = () => {
  return (
    <S.SearchContainer>
      <S.SearchInput placeholder='URL, or username/repo' />
      <LiquidButton />
    </S.SearchContainer>
  )
}

export default Search
