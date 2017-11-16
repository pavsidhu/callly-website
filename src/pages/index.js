import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Form from '../components/Form'
import { media } from '../utils'

import preview from '../assets/preview.png'
import mask from '../assets/mask.svg'
import logo from '../assets/logo.svg'

const App = () => (
  <Content>
    <Column description>
      <Details>
        <Logo src={logo} />
        <SubHeading>Your personal calorie tracker.</SubHeading>

        <Form />
      </Details>
    </Column>

    <Column preview>
      <Preview src={preview} alt="Callly app preview" />
    </Column>

    <Footer>© {new Date().getFullYear()} Callly</Footer>
  </Content>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.desktop`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    min-height: 50vw;
  `};
`

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 32px;

  ${media.desktop`
    flex: 1;
  `};

  ${props =>
    props.description &&
    css`
      padding-top: 32px;
      background-color: #fefefe;

      ${media.desktop`
        order: 2;
      `};
    `};

  ${props =>
    props.preview &&
    css`
      background: linear-gradient(#8657f8, #48b4f5);
      padding-top: 64px;
      clip-path: polygon(0 32px, 100.1% 0, 100.1% 100.1%, 0% 100.1%);

      ${media.desktop`
        order: 1;
        clip-path: polygon(0 0, 100% 0, calc(100% - 50px) 100%, 0% 100%);
      `}

      }
    `};
`

const formLoad = keyframes`
	to {
    opacity: 1.0;
    transform: translateY(0);
	}
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
  transform: translateY(10px);
  animation: ${formLoad} 500ms forwards;

  ${media.desktop`
    align-items: flex-start;
  `};
`

const SubHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #313131;

  ${media.desktop`
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `};
`

const Logo = styled.img`
  width: 60%;
  margin-bottom: 1rem;

  ${media.desktop`width: 200px;`};
`

const previewLoad = keyframes`
	to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Preview = styled.img`
  width: 80%;
  max-width: 320px;
  opacity: 0;
  transform: translateY(10px);
  animation: ${previewLoad} 200ms 300ms forwards;

  ${media.desktop(`
    width: 60%;
    max-width: 320px;
    margin-right: 50px;
  `)};
`

const Footer = styled.p`
  font-size: 0.8rem;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 16px;

  ${media.desktop`
    font-size: 0.7rem;
    color: #313131;
    right: 0;
    text-align: right;
    padding: 0 8px 8px 0;
  `};
`

export default App
