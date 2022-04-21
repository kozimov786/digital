import React from 'react'
import styled from 'styled-components'

import smmImg from '../assets/images/smm-target.png';
import designImg from '../assets/images/3d-design.png';
import graphicImg from '../assets/images/graphic-design.png';
import logisticImg from '../assets/images/logistic.png';
import codeImg from '../assets/images/code.png';
import menegerImg from '../assets/images/meneger.png'
import direcBg from '../assets/images/direction-bg.png';
import { Bounce, Fade, Flip } from 'react-reveal';


export default function Direction() {
  return (
    <Directions>
      <Bounce left cascade>
        <h2>Направлении</h2>
        <p>Проект будет проводится по направлениям</p>
      </Bounce>
      <Flip left cascade>
        <ul>
          <li>
            <p>SMM и Таргетинг, копирайтинг</p>
            <img src={smmImg} alt="" />
          </li>
          <li>

            <p>3D дизайн.</p>
            <img src={designImg} alt="" />
          </li>
          <li>
            <p>Графический дизайн</p>
            <img src={graphicImg} alt="" />
          </li>
          <li>
            <p>Логистика</p>
            <img src={logisticImg} alt="" />
          </li>
          <li>
            <p>Программиро-вание</p>
            <img src={codeImg} alt="" />
          </li>
          <li>
            <p>Айти менеджмент</p>
            <img src={menegerImg} alt="" />
          </li>
        </ul>
      </Flip>
      <Fade bottom >
        <button className='btn'>Записаться</button>
      </Fade>
    </Directions>
  )
}

const Directions = styled.div`
padding-top: 35px;
padding-bottom: 31px;
background-image: url(${direcBg});
color:#fff ;
 h2{
  font-weight: 700;
font-size: 42px;
line-height: 129.5%;
margin-bottom: 25px;
text-align: center;
 }
 p{
  font-weight: 400;
font-size: 28px;
line-height: 129.5%;
text-align: center;
 }
 button{
  font-weight: 600;
font-size: 16px;
line-height: 18px;
color:#fff ;
width:151px ;
background: #B131DD;
display: flex;
align-items: center;
justify-content: center;
border-radius: 2px;
padding:9px 21px ;
margin:0 auto ;
 }
 ul{
   display: flex;
   margin-top: 99px;
   margin-bottom: 44px;
    justify-content: center;
    flex-wrap:wrap ;
   margin-left: -25px;
   li{
    background: rgba(189, 0, 255, 0.4);
    backdrop-filter: blur(5px);
    padding:21px 10px ;
    width:198px ;
    margin-bottom: 25px;
    display: flex;
    flex-direction:column ;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
    p{
      font-weight: 600;
      font-size: 18px;
      line-height: 129.5%;
    }
    img{
     width:130px ;
    }
   }
 }
 @media screen and (max-width: 495px) {
   h2{
    font-size: 26px;
    line-height: 129.5%;
   }
   p{
     font-size: 20px;
   }
 }
 @media screen and (max-width: 395px) {
   ul{
     margin-left: 0;
     li{
       margin-right: 0;
     }
   }
 }
`