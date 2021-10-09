import { styled } from '@css/theme.config'

export const SearchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  height: '90vh',
  width: '100vw',
})

export const SearchInput = styled('input', {
  background: 'transparent',
  border: 'none',
  width: '75vw',
  outline: 'none',
  color: '$black9',
  textAlign: 'center',
  fontSize: '$5',
  marginBottom: 50,
})
