import React from 'react'
import styled from 'styled-components'

export default function Container({ children }) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
  max-width:1580px;
  width:100%;
  padding-left: 30px;
  padding-right: 30px;
  margin:0 auto;
`