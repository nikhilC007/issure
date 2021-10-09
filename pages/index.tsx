import type { NextPage } from 'next'
import globalStyles from '@css/global.style'

import Search from '@components/Search/Search'
import Footer from '@components/Footer'

const Home: NextPage = () => {
  globalStyles()

  return (
    <>
      <Search />
      <Footer />
    </>
  )
}

export default Home
