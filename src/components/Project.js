import React from 'react'
import styled from 'styled-components'
import Container from '../Layout/Container'

import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'


import { Fade, Slide } from 'react-reveal'
import Direction from './Direction'

export default function Project() {
  const reverse = true
  const small = true

  return (
    <>
      <Container>

        <Card>
          <Slide left>
            <img src={project1} alt="" width={720} />
          </Slide>
          <Fade right cascade>
            <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высоко квалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
          </Fade>
        </Card>

        <Card reverse={reverse} small={small}>
          <Slide right>
            <img src={project2} alt="" />
          </Slide>
          <Fade left cascade>
            <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.
            </p>
          </Fade>
        </Card>

      </Container>

      <Direction />

      <Container>

        <Card>
          <Slide left>
            <img src={project3} alt="" />
          </Slide>
          <Fade right cascade>
            <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования, собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
          </Fade>
        </Card>

        <Card reverse={reverse}>
          <Slide right>
            <img src={project4} alt="" />
          </Slide>
          <Fade left cascade>
            <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
          </Fade>
        </Card>
      </Container>
    </>
  )
}

const Card = styled.div`
  background: #FFFFFF;
  max-width:${props => props.small ? '1333px' : '1428px'};
  border-radius: 5px;
  padding:69px 27px ;
  display: flex;
  flex-direction:${props => props.reverse ? 'row-reverse' : 'row'} ;
  align-items: center;
  position:relative ;
  justify-content: ${props => props.small ? 'flex-end' : 'space-between'};
  margin-left: ${props => props.reverse ? '0' : 'auto'};
  margin-bottom: 80px;
  img{
    margin-left: -140px;
    position:${props => props.small ? 'absolute' : 'static'};
    right:0 ;
    margin-right: ${props => props.reverse ? '-140px' : '0'};
    max-width:${props => props.small ? '580px' : '720px'};
    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.15));
  }
  p{
    font-weight: 600;
    font-size: 28px;
    width:${props => props.reverse ? '720px' : '100%'};
    line-height: 36px;
    text-align: ${props => props.reverse ? 'left' : 'right'};
  }
  @media screen and (max-width: 1580px) {
    max-width:${props => props.small ? '1333px' : '1400px'};
  }
  @media screen and (max-width: 1540px) {
    max-width:${props => props.small ? '1300px' : '1350px'};
  }
  @media screen and (max-width: 1490px) {
    max-width:${props => props.small ? '1250px' : '1300px'};
    p{
      font-size: 24px;
    line-height: 36px;
    }
  }
  @media screen and (max-width: 1450px) {
    max-width:${props => props.small ? '1200px' : '1250px'};
  }
  @media screen and (max-width: 1390px) {
    max-width:${props => props.small ? '1150px' : '1200px'};
    p{
      font-size: 20px;
    line-height: 30px;
    max-width: 500px ;
    }
    img{
      margin-left: -100px;
      margin-right: ${props => props.reverse ? '-100px' : '0'};
      width:630px ;
    }
  }
  @media screen and (max-width: 1295px) {
    max-width:${props => props.small ? '1100px' : '1150px'};
    p{
      font-size: 20px;
    line-height: 26px;
    }
    img{
      margin-left: -100px;
      width:620px ;
    }
  }
  @media screen and (max-width: 1255px) {
    max-width:${props => props.small ? '1050px' : '1100px'};
    p{
      font-size: 20px;
    line-height: 26px;
    }
    img{
      margin-left: -100px;
      width:620px ;
    }
  }
  @media screen and (max-width: 1200px) {
    max-width:${props => props.small ? '1000px' : '1050px'};
    p{
      font-size: 18px;
    line-height: 22px;
    }
    img{
      margin-left: -80px;
      width:620px ;
    }
  }
  @media screen and (max-width: 1130px) {
    max-width:${props => props.small ? '950px' : '1000px'};
    p{
      font-size: 18px;
    line-height: 22px;
    max-width:400px ;
    }
    img{
      margin-left: -80px;
      width:620px ;
    }
  }
  @media screen and (max-width: 1090px) {
    max-width:${props => props.small ? '900px' : '950px'};
    p{
      font-size: 18px;
    line-height: 22px;
    }
    img{
      margin-left: -80px;
      width:620px ;
    }
  }
  @media screen and (max-width: 1030px) {
    max-width:${props => props.small ? '850px' : '900px'};
    p{
      font-size: 18px;
    line-height: 22px;
    }
    img{
      margin-left: -80px;
      width:520px ;
    }
  }
  @media screen and (max-width: 980px) {
    max-width:${props => props.small ? '800px' : '850px'};
    p{
      font-size: 18px;
    line-height: 22px;
    }
    img{
      margin-left: -80px;
      width:520px ;
    }
  }
  @media screen and (max-width: 940px) {
    flex-direction:column ;
    p{
      font-size: 18px;
    line-height: 22px;
    text-align: center;
    width:100%;
    }
    img{
      margin-left: 0;
      margin-right: 0;
      max-width:100% ;
      position:static ;
    }
  }
  @media screen and (max-width: 490px) {
    margin-bottom: 50px;
    p{
      font-size: 14px;
    line-height: 18px;
    text-align: center;
    }
  }
`
