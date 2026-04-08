import React from 'react'
import Hero from '../component/home/Hero'

import Problems from '../component/home/Problems'
import Price from '../component/home/Price'


import CTA from '../component/home/CTA'
import About from '../component/home/About'
import Contact from '../pages/Contact'






function Home() {
  return (
    <>
    <Hero/>
   <About/>
    <Problems/>
    <Price/>
    <Contact/>
    
   
    <CTA/>
    
    
    </>
  )
}

export default Home