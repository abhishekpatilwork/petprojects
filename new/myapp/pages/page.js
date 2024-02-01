import BookingProcess from '@/components/BookingProcess'
import Credibility from '@/components/Credibility'
import Footer from '@/components/Footer'
import Help from '@/components/Help'
import Layout from '@/components/Layout'
import Partner from '@/components/Partner'
import Partners from '@/components/Partners'
import Referral from '@/components/Referral'
import React from 'react'

const page = () => {
  return (
    <div>
      <Layout/>
      <BookingProcess/>
      <Credibility/>
      <Referral />
      <Help/>
      <Partners/>
      <Partner/>
      <Footer/>
    </div>
  )
}

export default page
