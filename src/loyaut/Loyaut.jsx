import React from 'react'
import MainHeader from '../components/MainHeader'

const Loyaut = ({children}) => {
  return (
    <>
      <MainHeader/>
      <main>{children}</main>
    </>
  )
}

export default Loyaut
