import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from '../components/layout'
import Footer from '../components/footer'
import Hero from "../components/hero"

const Intro = styled.section`
  height: 98vh;
  width: 100%;
  text-align: center;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
`

const Greeter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75%;
  margin-top: 65px;
`

const Details = styled(Greeter)`
  margin-top: 90px;
`

const H2 = styled.h2`
  color: ${props => props.theme.darkblack};
  font-size: ${props => props.big ? "40px" : "28px"};
  margin-bottom: ${props => props.big ? "60px" : "30px"};
  font-family: "Helvetica";
`

const ButtonContainer = styled.div`
  width: 135px;
  height: 45px;
  background-color: transparent;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    height: 10px;
    width: 8px;
    z-index: 5;
    transform: translateX(-10px);
  }
  &::after {
    position: absolute;
    background-color: ${props => props.theme.teal};
    width: 45px;
    height: 45px;
    left: 0;
    top: 0;
    font-size: 16px;
    content: "→";
    color: white;
    display: flex;
    justify-content: flex-start;
    padding-left: 15px;
    align-items: center;
    z-index: 1;
    border-radius: 100px;
    box-sizing: border-box;
    transform: translate(-31px);
    transition: width 400ms ease, padding-left 400ms ease;
  }
  &:hover::after {
    width: 175px;
    transition: width 400ms ease, padding-left 400ms ease;
    padding-left: 27px;
  }
  & .button-cta {
    z-index: 2;
    margin: 0 0;
    transition: color 500ms ease;
    font-size: 16px;
    padding: 0 0;
    color: ${props => props.theme.teal};
    font-weight: 700;
  }
  &:hover .button-cta {
    color: white;
  }
`

const IndexPage = ({ data, location }) => (
  <Layout>
    <Hero page={location.pathname}/>
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
          <Img fixed={data.js.childImageSharp.fixed} title="JavaScript"/>
          <Img fixed={data.react.childImageSharp.fixed} title="React"/>
          <Img fixed={data.redux.childImageSharp.fixed} title="Redux"/>
          <Img fixed={data.node.childImageSharp.fixed} title="Node"/>
          <Img fixed={data.graphQL.childImageSharp.fixed} title="GraphQL"/>
          <Img fixed={data.gatsbyIcon.childImageSharp.fixed} title="Gatsby"/>
          <Img fixed={data.styled.childImageSharp.fixed} title="Styled Components"/>
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
        to={"/work"}
        style={{ textDecoration: "none" }}
        >
          <ButtonContainer>
            <p className="button-cta">
              Projects
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
    react: file(relativePath: {eq: "react.png"}) {
      ...techStack
    }
    redux: file(relativePath: {eq: "redux.png"}) {
      ...techStack
    }
    js: file(relativePath: {eq: "js.jpg"}) {
      ...techStack
    }
    node: file(relativePath: {eq: "node.png"}) {
      ...techStack
    }
    styled: file(relativePath: {eq: "styled.png"}) {
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
