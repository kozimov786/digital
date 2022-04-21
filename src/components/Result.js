import React from 'react';
import { Slide } from 'react-reveal';

import styled from 'styled-components';

import resultBg from '../assets/images/result-bg.png';
import result1 from '../assets/images/result1.svg';
import result2 from '../assets/images/result2.svg';
import result3 from '../assets/images/result3.svg';
import result4 from '../assets/images/result4.svg';
import result5 from '../assets/images/result5.svg';

import Container from '../Layout/Container';

export default function Result() {
  return (
    <Wrapper>
      <Container>
        <Slide left cascade>
          <h2>Результаты</h2>
          <p>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
        </Slide>
        <Slide bottom cascade>
          <ul>
            <li>
              <img src={result1} alt="" />
              <span>Самореализация девушек в сфере IT</span>
            </li>
            <li>
              <img src={result2} alt="" />
              <span>Выбор профессии без квалификациии дипломов</span>
            </li>
            <li>
              <img src={result3} alt="" />
              <span>Возможность зарабатывать дистанционно (фриланс)</span>
            </li>
            <li>
              <img src={result4} alt="" />
              <span>Возможность начать свои социальные проекты в виде Старт апов</span>
            </li>
            <li>
              <img src={result5} alt="" />
              <span>Маркетинговые навыки</span>
            </li>
          </ul>
        </Slide>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 padding-top: 70px;
 background-image: url(${resultBg});
 background-size: cover;
 background-repeat: no-repeat;
 padding-bottom: 100px;
 color:#fff ;
 h2{
  font-weight: 700;
font-size: 42px;
line-height: 47px;
margin-bottom: 20px;
text-align: center;
 }
 p{
  font-weight: 400;
  max-width:992px ;
  margin:0 auto ;
font-size: 28px;
line-height: 31px;
text-align: center;
margin-bottom: 96px;
 }
 ul{
   display: flex;
   li{
     display: flex;
     max-width:256px ;
     margin:10px ;
     flex-direction:column ;
     justify-content: center;
     align-items: center;
     img{
       margin-bottom: 20px;
     }
     span{
       text-align: center;
       font-weight: 700;
        font-size: 18px;
        line-height: 20px;
     }
   }
 }
  @media screen and (max-width: 1090px) {
   ul{
     flex-wrap:wrap ;
     justify-content: center;
   }
  }
  @media screen and (max-width: 624px) {
    padding-bottom: 450px;

    background-position: -210px -300px !important;
  }
  @media screen and (max-width: 505px) {
    h2{
font-size: 32px;
line-height: 37px;
 }
 p{
font-size: 18px;
line-height: 31px;
margin-bottom: 40px;
 }
  }
`