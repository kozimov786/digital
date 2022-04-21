import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../Layout/Container'
import Fade from 'react-reveal/Fade';

import logo from "../assets/images/hero-logo.svg"
import burgerIcon from "../assets/images/burger.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const activeHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Wrapper>
        <Fade right>
          <Logo>
            <img src={logo} alt="logo" width={302} height={56} />
          </Logo>
        </Fade >
        <Fade right>
          <button className='burger-btn' onClick={activeHandler}>
            <img src={burgerIcon} alt="" />
          </button>
        </Fade>
        <Nav isOpen={isOpen}>
          <Fade left>
            <ul>
              <li className='active_nav'>
                <a href="/">
                  О Проекте
                </a>
              </li>
              <li>
                <a href="/">
                  Направления
                </a>
              </li>
              <li>
                <a href="/">
                  Задачи
                </a>
              </li>
              <li>
                <a href="/">
                  Результаты
                </a>
              </li>
              <li>
                <a href="/">
                  Контакты
                </a>
              </li>
              <li>
                <Select>
                  <option value="ru">РУ</option>
                  <option value="uz">УЗ</option>
                </Select>
              </li>
              <li>
                <button className='btn'>Регистрация</button>
              </li>
            </ul>
          </Fade>
        </Nav>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
 padding-top: 45px;
 padding-bottom: 33px;
 display: flex;
 justify-content: space-between;
 align-items: center;

 .burger-btn{
   border:none ;
   background-color: transparent;
   position:absolute ;
   width:46px;
   top:60px ;
   right:30px ;
   display: none;
   z-index:999 ;
   img{
     width:100% ;
   }
 }
 @media screen and (max-width: 1012px) {
    .burger-btn{
      display: block;
    }
 }
 @media screen and (max-width: 322px) {
    .burger-btn{
      right:10px ;
      width:40px ;
    }
 }
`
const Nav = styled.nav`
ul{
  display: flex;
 justify-content: space-between;
 align-items: center;
 li{
   margin-left: 30px;
   font-size: 16px;
   line-height: 18px;
   a{
    white-space:nowrap ;
     color:#fff ;
     font-weight: 300;
     transition: all 0.3s ease-in-out;
     &:hover{
        color:gold;
     }
   }

 }
 .active_nav{
   font-weight: 700;
 }
}
@media screen and (max-width: 1210px) {
  li{
    margin-left: 15px !important;
  }
}
@media screen and (max-width: 1012px) {
  position:absolute ;
  top:0;
  right:0 ;
  z-index:99 ;
  background: linear-gradient(180deg, rgba(37, 18, 68, 0.45) 0%, #251244 73.96%);
  padding-top: 120px;
  width:100%;
  display:${props => props.isOpen ? 'block' : 'none'} ;
  height:100vh ;
  ul{
    flex-direction:column ;
    li{
      margin-left: 0 !important;
      margin-bottom: 20px;
    }
  }
}
`

const Logo = styled.a`
@media screen and (max-width: 1121px) {
  img{
    width:250px ;
  }
}
@media screen and (max-width: 1071px) {
  img{
    width:200px ;
  }
}
`
const Select = styled.select`
  background-color:transparent;
  border:none ;
  color:#fff ;
  font-weight: 700;
`