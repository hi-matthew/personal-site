import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Footer from '../components/footer'

const GlobalStyle = createGlobalStyle`
  body p {
    line-height: 1.5; 
    font-size: 21px; 
    color: #709090;
  }
`

const Intro = styled.section`
  background-color: #f8f8ff;
  height: 100%;
  max-width: 100%;
  text-align: center;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Greeter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin-top: 110px;
`

const Details = styled(Greeter)`
  margin-top: 90px;
`

const H2 = styled.h2`
  color: #708090;
  font-size: ${props => props.big ? "40px" : "28px"};
  margin-bottom: ${props => props.big ? "75px" : "30px"};
`

const ButtonContainer = styled.div`
  width: 150px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #708090;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before, &::after {
    position: absolute;
    background-color: #709090;
    width: 150px;
    height: 50px;
    left: 0;
    top: 0;
    content: '';
    z-index: 1;
  }
  &::before {
    transform: translateX(-155px);
    transition: transform 0ms ease;
  }
  &:hover::before {
    transform: translateX(0px);
    transition: transform 400ms ease;
  }
  &::after {
    transition: transform 400ms ease;
    transform: translateX(155px);
  }
  &:hover::after {
    transition: transform 0ms 400ms ease;
    transform: translateX(0px);
  }
  & .button-cta {
    z-index: 5;
    margin: 0 0;
    transition: color 500ms ease;
  }
  &:hover .button-cta {
    color: white;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <GlobalStyle />
    <Hero />
    <Intro>
      <Greeter>
        <Img 
        fixed={data.me.childImageSharp.fixed}
        style={{ 
          borderRadius: "100px", 
          marginBottom: "35px"
        }}
        />
        <H2>It's nice to meet you.</H2>
        <p>I'm a self-taught developer based in Phoenix looking to break into my first professional role. My goal is to work with brands who instill happiness in others.</p>
      </Greeter>
      <Details>
        <H2 big>What I'm looking for</H2>
        <p>Somewhere I can continue mastering technologies specific or similar to:</p>
        <div style={{ 
        display: "flex", 
        justifyContent: "space-around",
        width: "100%",
        marginBottom: "1.45rem"
        }}>
          <Img fixed={data.reactLogo.childImageSharp.fixed} title="React"/>
          <Img fixed={data.js.childImageSharp.fixed} title="JavaScript"/>
          <Img fixed={data.styled.childImageSharp.fixed} title="Styled Components"/>
          <Img fixed={data.sass.childImageSharp.fixed} title="Sass"/>
          <Img fixed={data.graphQL.childImageSharp.fixed} title="GraphQL"/>
          <Img fixed={data.gatsbyIcon.childImageSharp.fixed} title="Gatsby"/>
        </div>
        <p>Somewhere I'm able to learn from my peers.</p>
        <p>Somewhere I'm challenged and held accountable.</p>
        <p>Somewhere that takes pride in their work.</p>
        <p>Somewhere that's opinionated but open.</p>
        <p>Somewhere where people are happy to be.</p>
      </Details>
      <Details>
        <H2 big>View my work</H2>
        <p>Feel free to review some of my personal projects.</p>
        <Link 
        to={"/page-2"}
        style={{ textDecoration: "none" }}
        >
          <ButtonContainer>
            <p className="button-cta">
              To the code
            </p>
          </ButtonContainer>
        </Link>
      </Details>
      <Footer />
    </Intro>
  </Layout>
)

export const query = graphql`
  query {
    me: file(relativePath: {eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reactLogo: file(relativePath: {eq: "reactLogo.png"}) {
      ...techStack
    }
    js: file(relativePath: {eq: "js.jpg"}) {
      ...techStack
    }
    styled: file(relativePath: {eq: "styled.png"}) {
      ...techStack
    }
    sass: file(relativePath: {eq: "sass.png"}) {
      ...techStack
    }
    gatsbyIcon: file(relativePath: {eq: "gatsby-icon.png"}) {
      ...techStack
    }
    graphQL: file(relativePath: {eq: "graphQL.png"}) {
      ...techStack
    }
  }
`

export const techStack = graphql`
  fragment techStack on File {
    childImageSharp {
      fixed(width: 50, height: 50) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export default IndexPage
