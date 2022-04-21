import React from 'react'
import styled from 'styled-components';
import { Bounce, Fade } from 'react-reveal';

import decorImg from '../assets/images/bg-decor.svg'

export default function Form() {
  return (
    <Wrapper>
      <Bounce left cascade>
        <h2>Регистрация</h2>
      </Bounce>
      <form>
        <div>
          <Fade left>
            <label htmlFor="name">Имя
              <input type="text" name="name" id="name" />
            </label>
          </Fade>
          <Fade right>
            <label htmlFor="surname">Фамилия
              <input type="text" name="surname" id="surname" />
            </label>
          </Fade>
        </div>
        <div>
          <Fade left>
            <label htmlFor="date">Дата рождения
              <input type="text" name="date" id="date" />
            </label>
          </Fade>
          <Fade right>
            <label htmlFor="email">Почта
              <input type="email" name="email" id="email" />
            </label>
          </Fade>
        </div>
        <div>
          <Fade left>
            <label htmlFor="adress">Адрес
              <input type="text" name="" id="" />
            </label>
          </Fade>
          <Fade right>
            <label htmlFor="number">Телефон
              <input type="number" placeholder='(+998)' name="number" id="number" />
            </label>
          </Fade>
        </div>
        <Fade bottom>
          <button className='btn' type='submit'>Отправить</button>
        </Fade>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 80px;
padding-bottom: 119px;
background-image: url(${decorImg});
background-repeat: no-repeat;
background-position: center center;
h2{
  text-align: center;
  margin-bottom: 131px;
  font-weight: 700;
font-size: 42px;
line-height: 47px;
}
 form{
  max-width:910px ;
  padding-left: 30px;
  padding-right: 30px;
  margin:0 auto ;
  div{
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 70px;
    label{
      display: flex;
      flex-direction:column ;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      width:100% ;
      color: #858585;
    }
    input{
      border:none ;
      width:364px ;
      background-color:transparent ;
      height:45px ;
      border-bottom: 1px solid rgba(190, 0, 255, 1);
      outline:none ;
      &::placeholder{
        color:rgba(209, 209, 209, 1) ;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
  button{
      padding:13px 33px ;
      background: #B131DD;
      border-radius: 2.43723px;
      font-weight: 600;
      font-size: 19.4978px;
      display: flex;
      margin:0 auto ;
      justify-content: center;
      color:#fff ;
      font-family: "Comfortaa", "Arial", sans-serif;
      line-height: 22px;
    }
 }
  @media screen and (max-width: 825px) {
    h2{
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 50px;
    }
    form{

      div{
        flex-direction:column ;
        margin-bottom: 0;
        input{
          width:100% ;
          margin-bottom: 30px;
        }
      }
    }
  }
`
