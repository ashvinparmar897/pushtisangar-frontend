import React from 'react'
import MobileSidebar from '../../components/MobileSidebar'
import Header from '../../components/Header'
import Subscribe from '../../components/Subscribe'
import Featured from '../../components/Featured'
import MidFooter from '../../components/MidFooter'

const ReturnPolicy = () => {
  return (
    <>
    <Header />
    <MobileSidebar />
    <div>ReturnPolicy</div>
    <Subscribe />
      <Featured/>
      <MidFooter />
    </>

  )
}

export default ReturnPolicy