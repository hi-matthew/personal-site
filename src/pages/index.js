import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from "styled-components"
import Layout from '../components/layout'
import HeroImg from "../components/heroImg"
import Button from "../components/button"

const FadeIn = keyframes`
  0% {
    transform: translateX(-15%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const HeroText = styled.h1`
  color: white;
  font-size: 4.5rem;
  opacity: 0;
  transition: transform 300ms ease, opacity 300ms ease;
  animation: ${FadeIn} 1.2s ease forwards;
  @media (max-width: 500px) {
      font-size: 3.5rem;
    }
  div {
    color: ${props => props.theme.darkblack};
    font-size: 5rem;
    text-align: right;
    background-color: white;
    padding: 10px 10px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }
  .oct {
    height: 0px;
    opacity: 0;
    transition: height 400ms ease, opacity 400ms 300ms ease, transform 500ms 200ms ease;
    color: ${props => props.theme.teal};
    font-size: 5rem;
    transform: translateX(100%);
    font-family: Helvetica;
    font-weight: 700;
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }
  div:hover .oct {
    height: 100px;
    opacity: 1;
    transform: translateX(0);
  }
`

const IndexPage = (props) => (
  <Layout path={props.location.pathname}>
    <HeroImg page={props.location.pathname}/>
    <TextContainer>
      <HeroText>Hi, my <br /> name is <div>Matthew <span className="oct">October</span></div></HeroText>
      <Link
        to={"/about"}
        style={{ textDecoration: "none" }}
      >
        <Button text='About me' />
      </Link>
    </TextContainer>
  </Layout>
)

export default IndexPage
