import React from 'react'
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import Project from '../components/Project';




export default function Projects() {
  return (
    <Wrapper>
      <Fade bottom cascade>
        <h2>О проекте</h2>
      </Fade>
      <Project />
    </Wrapper>
  )
}

const Wrapper = styled.div`
h2{
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
font-size: 42px;
line-height: 129.5%;
}
`