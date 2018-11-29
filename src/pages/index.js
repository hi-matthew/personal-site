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

const HeroText = styled.h1`
  color: white;
  font-size: 4.5rem;
  /* padding-left: 2rem; */
  opacity: 0;
  transition: transform 300ms ease, opacity 300ms ease;
  animation: ${FadeIn} 1.2s ease forwards;
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
  }
  div:hover .oct {
    height: 100px;
    opacity: 1;
    transform: translateX(0);
  }
  @media (max-width: 500px) {
    font-size: 4rem;
  }
`

const IndexPage = (props) => (
  <Layout>
    <HeroImg page={props.location.pathname}/>
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
    }}
    >
      <HeroText>Hi, my <br /> name is <div>Matthew <span className="oct">October.</span></div></HeroText>
      <Link 
        to={"/about"}
        style={{ textDecoration: "none" }}
      >
        <Button text='About me' />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
