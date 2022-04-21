import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

import heroBg from '../assets/images/hero-bg.png';
import Hero from '../components/Hero';

export default function Header() {
  return (
    <Head>
      <Navbar />
      <Hero />
    </Head>
  )
}

const Head = styled.div`
 background-image: url(${heroBg});
 height:622px ;
`
