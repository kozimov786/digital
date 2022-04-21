import React from 'react'
import styled from 'styled-components';
import Container from './Container'


import logo from '../assets/images/footer-logo.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import telegram from '../assets/images/telegram.svg';
import youtube from '../assets/images/youtube.svg';
import { Fade } from 'react-reveal';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Content>
          <Fade left >
            <Logo>
              <img src={logo} alt="footer logo" width={191} height={108} />
            </Logo>
          </Fade>
          <Fade bottom cascade>
            <ul>
              <li>
                <a href="/">О Проекте</a>
              </li>
              <li>
                <a href="/">Направления</a>
              </li>
              <li>
                <a href="/">Результаты</a>
              </li>
              <li>
                <a href="/">Контакты</a>
              </li>
            </ul>
          </Fade>
          <Fade right >
            <Box>
              <Lang>
                <a href="/">
                  Уз
                </a>
                <a className='active' href="/">
                  Ру
                </a>
              </Lang>
              <Brands>
                <a href="/">
                  <img src={instagram} alt="intagram icon" width={37} height={37} />
                </a>
                <a href="/">
                  <img src={telegram} alt=" telegram icon" width={37} height={37} />
                </a>
                <a href="/">
                  <img src={youtube} alt="youtube icon" width={37} height={37} />
                </a>
                <a href="/">
                  <img src={facebook} alt="facebook icon" width={37} height={37} />
                </a>
              </Brands>
            </Box>
          </Fade>
        </Content>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: rgba(32, 13, 63, 1);
  padding-top: 42px;
  padding-bottom: 69px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul{
    display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    margin:0 25px ;
    a{
      color: #fff;
      font-weight: 300;
        font-size: 16px;
        line-height: 18px;
    white-space: nowrap ;
    &:hover{
      color: gold;
    }

    }
  }
  }
  @media screen and (max-width: 1075px) {
    flex-direction:column ;
    ul{
      margin-bottom: 30px;
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 615px) {
    ul{
      flex-direction:column ;
      li{
        margin-bottom: 20px;
      }
    }
  }
`

const Logo = styled.div``

const Lang = styled.div`
margin-bottom: 31px;
margin-left: 40px;
  a{
    font-weight: 300;
    font-size: 17.0127px;
    line-height: 197.19%;
    color: #fff;
    margin-left: 30px;
  }
  .active{
    font-weight: 700;
  }
  @media screen and (max-width: 1075px) {
    margin-bottom:0 ;
    margin-top: 30px;
  }
`
const Brands = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    margin-left: 20px;
    &:hover{
      img{
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
        filter:invert(50%) ;
      }
    }
  }
`
const Box = styled.div`
  @media screen and (max-width: 1075px) {
    display: flex;
    flex-direction:column-reverse ;
  }
`