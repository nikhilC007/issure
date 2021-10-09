import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily: '$main',
  },
  html: {
    overflowX: 'hidden',
  },
  'div, button': {
    userSelect: 'none',
  },
  body: {
    color: '$white',
    background: '$white8',
    overflowX: 'hidden',
  },
  '::selection': {
    background: '#000',
    color: '#fff',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: 'none',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$white5',
  },
})

export default globalStyle
