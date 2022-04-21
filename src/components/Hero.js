import React from 'react'
import Container from '../Layout/Container'
import styled from 'styled-components'

import heroImg from '../assets/images/hero-img.png'
import { Fade } from 'react-reveal'

export default function Hero() {
  return (
    <Container>
      <Fade bottom>
        <Wrapper>
          <Info>
            <h1>“Girls in digital”</h1>
            <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
            <button className='btn'>Подробнее</button>
          </Info>
          <div className='img-wrapper'>
            <img src={heroImg} alt="" />
          </div>
        </Wrapper>
      </Fade>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .img-wrapper{
    max-width:935px;
    margin-left:-155px ;
    img{
    object-fit: cover;
    width:100% ;
    height:730px ;
  }
  }
  @media screen and (max-width: 995px) {
    flex-direction:column-reverse ;
    .img-wrapper{
      margin-left: 0;
      width:100% ;
      height:500px ;
    }
  }
`

const Info = styled.div`
 background-color:#B031DD ;
 max-width:740px ;
 height:730px ;
 border-radius: 10px;
 position:relative;
    z-index: 1;
 padding:218px 21px 140px 40px ;
 color:#fff ;
  h1{
    font-weight: 600;
    font-size: 78px;
    line-height: 87px;
    margin-bottom: 40px;
  }
  p{
    font-weight: 400;
    font-size: 28px;
    line-height: 31px;
    margin-bottom: 75px;
  }
  button{
   padding:9px 26px ;
   border: 1px solid #FFFFFF;
   border-radius: 2px;
   color:#fff ;
   font-weight: 600;
    font-size: 16px;
    line-height: 18px;
   cursor: pointer;
   &:hover{
      background-color: #fff;
      color: #B031DD;
   }
  }
  @media screen and (max-width: 1515px) {
    h1{
      font-size: 68px;
    line-height: 77px;
    margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 1455px) {
    max-width:700px ;
  }
  @media screen and (max-width: 1288px) {
    max-width:600px ;
  }
  @media screen and (max-width: 1288px) {
    max-width:500px ;
    padding-top: 100px;
  }
  @media screen and (max-width: 995px) {
    max-width:100% ;
    height:500px ;
  }
  @media screen and (max-width: 995px) {
    h1{
      font-size: 48px;
    line-height: 57px;
    margin-bottom: 20px;
    }
    p{
      font-size: 22px;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 498px) {
    padding-top: 50px;
    h1{
      font-size: 38px;
    line-height: 47px;
    margin-bottom: 20px;
    }
    p{
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
`