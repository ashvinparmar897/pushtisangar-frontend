import React from 'react'
import MobileSidebar from '../../components/MobileSidebar'
import Header from '../../components/Header'
import Subscribe from '../../components/Subscribe'
import Featured from '../../components/Featured'
import MidFooter from '../../components/MidFooter'

const Privacy = () => {
  return (
    <>
    <Header />
      <MobileSidebar />
    <div>Privacy</div>
    <Subscribe />
      <Featured/>
      <MidFooter />
    </>
  )
}

export default Privacy