import React from 'react'
import styled from 'styled-components';


import mapImg from '../assets/images/map.png';
import web from '../assets/images/web-icon.svg';
import call from '../assets/images/call-icon.svg';
import email from '../assets/images/email-icon.svg'
import location from '../assets/images/location-icon.svg';
import Maps from './Maps';
import { Fade } from 'react-reveal';

export default function About() {
  return (
    <Wrapper>
      <Fade top>
        <Box>
          <Info>
            <ul>
              <li>
                <img src={web} alt="" />
                <div>
                  <p>Веб сайт</p>
                  <span>digitalcity.uz</span>
                </div>
              </li>
              <li>
                <img src={call} alt="" />
                <div>
                  <p>Телефон</p>
                  <span>+99874 222-22-22</span>
                </div>
              </li>
              <li>
                <img src={email} alt="" />
                <div>
                  <p>Почта</p>
                  <span>dcity@info.com</span>
                </div>
              </li>
              <li>
                <img src={location} alt="" />
                <div>
                  <p>Адресс</p>
                  <span>улица Бобур Шох, Andizhan, Узбекистан</span>
                </div>
              </li>

            </ul>
          </Info>
          <MapBox>
            <Maps />
          </MapBox>
        </Box>
      </Fade>
    </Wrapper>
  )
}

const Wrapper = styled.div`
          padding-top: 100px;
          padding-bottom: 100px;
          `
const Box = styled.div`
          max-width:1305px ;
          margin: 0 auto ;
          padding-right: 30px;
          padding-left: 30px;
          display: flex;
          @media screen and (max-width: 935px) {
           flex-direction:column ;
           justify-content: center;
           align-items: center;
          }
          `


const Info = styled.div`
          padding:58px 90px ;
          max-width:666px ;
          width:100% ;
          background-image: url(${mapImg});
          color:#fff ;
          ul{
            display:flex ;
          flex-direction:column ;
          li{
            display: flex;
            &:not(:last-child){
            margin-bottom: 37px;

          }
          p{
            font-weight: 600;
          font-size: 26px;
          line-height: 29px;
      }
          span{
            font-weight: 300;
          font-size: 22.5188px;
          line-height: 25px;
      }
          img{
            margin-right: 30px;
      }
    }
 }
 @media screen and (max-width: 1215px) {
   max-width:566px ;
 }
 @media screen and (max-width: 1105px) {
   max-width:466px ;
 }
 @media screen and (max-width: 935px) {
   max-width:579px;
   padding:20px ;
 }
 @media screen and (max-width: 445px) {
   li{
     flex-direction:column ;
     align-items: center;
     text-align: center;
   }
  p{
          font-size: 18px !important;
      }
          span{
          font-size: 18px !important;
      }
          img{
            margin-right:0 !important;
            margin-bottom: 20px;
      }
 }
  `

const MapBox = styled.div`
          overflow:hidden ;
          max-width:579px ;

          @media screen and (max-width: 635px) {

          width:100% ;
          }
          `
