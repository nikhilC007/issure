import { NextPage } from 'next'
import globalStyles from '@css/global.style'

import Header from '@components/Head'
import Search from '@components/Search/Search'
import Footer from '@components/Footer'

const Home: NextPage = () => {
  globalStyles()

  return (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  )
}

export default Home
