import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Map from '../components/About';
import Projects from '../components/Projects';
import Result from '../components/Result';
import Tasks from '../components/Tasks';

export default function Main() {
  return (
    <Wrapper>
      <Projects />
      <Tasks />
      <Form />
      <Result />
      <Map />
    </Wrapper>
  )
}


const Wrapper = styled.main`
 padding-top: 350px;
 background: #F2F3FF;
 @media screen and (max-width: 995px) {
   padding-top: 600px;
 }
`