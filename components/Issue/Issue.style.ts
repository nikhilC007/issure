import { styled } from '@stitches/react'

export const IssueBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '$white10',
  padding: '30px 40px',
  transition: '0.2s linear',
  borderRadius: 10,
})

export const IssueTitle = styled('a', {
  color: '$main',
  fontSize: '$4',
  fontWeight: 600,
  textDecoration: 'none',
})

export const IssueDescription = styled('p', {
  color: '$white1',
  display: 'flex',
  alignItems: 'center',
  marginTop: 10,
  svg: {
    marginRight: 10,
  },
  a: {
    textDecoration: 'none',
    color: '$white1',
    marginLeft: 4,
    '&:hover': {
      color: '$main',
    },
  },
})

export const Labels = styled('div', {
  display: 'flex',
  marginTop: 30,
  alignItems: 'center',
})

export const Label = styled('a', {
  textDecoration: 'none',
  padding: 10,
  background: '$main',
  color: '$white10',
  width: 'fit-content',
  borderRadius: 5,
  marginRight: 10,
})
