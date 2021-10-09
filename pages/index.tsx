import React from 'react'
import globalStyles from '@css/global.style'

import Header from '@components/Head'
import Search from '@components/Search/Search'
import Footer from '@components/Footer'

const Home: React.FC = () => {
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
