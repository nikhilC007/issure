import { styled } from '@css/theme.config'
import { Red } from 'kraftuur'

export const SearchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: '100vw',
})

export const SearchInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
})

export const SearchInput = styled('input', {
  background: 'transparent',
  border: 'none',
  width: '75vw',
  outline: 'none',
  color: '$black9',
  textAlign: 'center',
  fontSize: '$5',
})

export const SearchError = styled('p', {
  color: Red.red5,
  margin: '20px 0px 50px 0px',
})
