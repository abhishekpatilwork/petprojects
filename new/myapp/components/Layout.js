import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default Layout
