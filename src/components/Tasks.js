import React from 'react'
import { Bounce } from 'react-reveal';
import styled from 'styled-components';

import taskBg from '../assets/images/tasks-bg.png';

export default function Tasks() {
  return (
    <Wrapper>
      <Bounce left cascade>
        <h2>Задачи</h2>
      </Bounce>
      <Bounce right cascade>
        <ul>
          <li className='item1'>
            <p>
              Подбор рабочей группы
            </p>
          </li>
          <li className='item2'>
            <p>
              Установить контакт с партнерами
            </p>
          </li>
          <li className='item3'>
            <p>
              Закупка офисной техники
            </p>
          </li>
          <li className='item4'>
            <p>
              Привлечение опытных специалистов (зарубежные специалисты);

            </p>
          </li>
          <li className='item5'>
            <p>
              Разработка модуля
            </p>
          </li>
          <li className='item6'>
            <p>
              Освещение  проекта с помощью СМИ
            </p>
          </li>
          <li className='item7'>
            <p>

              Проведение отбора участников

            </p>
          </li>
          <li className='item8'>
            <p>
              Организация проекта в 4 этапа
            </p>
          </li>
          <li className='item9'>
            <p>
              Организация форума и церемония награждения победителей
            </p>
          </li>
          <li className='item10'>
            <p>
              Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов
            </p>
          </li>
        </ul>
      </Bounce>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 padding-top: 32px;
 padding-bottom: 82px;
 background-image: url(${taskBg});
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center center;
 color:#fff ;
 h2{
   text-align: center;
   font-weight: 700;
font-size: 42px;
line-height: 129.5%;
margin-bottom: 64px;
 }
 ul{
   max-width:1366px ;
   padding-right: 30px;
   padding-left: 30px;
   display:flex;
   justify-content: center;
   flex-wrap:wrap ;
   margin:0 auto ;

   li{
     padding:4px 20px ;
     background: rgba(189, 0, 255, 0.4);
      backdrop-filter: blur(4px);
      height:105px ;
      width:382px ;
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-left: 20px;
      margin-bottom: 50px;
      text-align: center;
      justify-content: center;
      border-radius: 3.94127px;
    font-weight: 600;
    font-size: 21.8647px;
    line-height: 129.5%;
    position: relative;
    overflow:hidden ;
    &::before{
     content:'01' ;
     width:50px ;
     height:50px ;
     font-size: 18px;
     position:absolute ;
     top:-10px ;
     left:-12px ;
     font-weight: 700;
      font-size: 21.8647px;
      line-height: 129.5%;
     display: flex;
     z-index:99 ;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     background-color:#B132DE ;

   }

   }
   .item2::before{
     content:"02" ;
   }
   .item3::before{
     content:"03" ;
   }
   .item4::before{
     content:"04" ;
   }
   .item5::before{
     content:"05" ;
   }
   .item6::before{
     content:"06" ;
   }
   .item7::before{
     content:"07" ;
   }
   .item8::before{
     content:"08" ;
   }
   .item9::before{
     content:"09" ;
   }
   .item10{
    width:644px ;
    &::before{
      content:"10" ;
    }
   }
 }
 @media screen and (max-width: 905px) {
   li{
     width:100% !important ;
   }
 }
 @media screen and (max-width: 705px) {
   li{
     font-size:18px !important ;
   }
 }
 @media screen and (max-width: 505px) {
   li{
    font-size:14px !important ;
   }
   .item10{
     height:180px ;
   }
 }

`