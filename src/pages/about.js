import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Button from "../components/button"

const Outer = styled.div`
  flex: 1;
  color: white;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Inner = styled.div`
  position: fixed;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Intro = styled.section`
  text-align: center;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  height: 100vh;
`

const Greeter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75%;
  margin-top: 65px;
  position: relative;
  width: 100%;
  height: auto;
`

const Details = styled(Greeter)`
  margin-top: 90px;
  position: relative;
  width: 100%;
  height: auto;
`

const H2 = styled.h2`
  color: ${props => props.theme.darkblack};
  font-size: ${props => props.big ? "40px" : "28px"};
  margin-bottom: ${props => props.big ? "60px" : "30px"};
  font-family: "Helvetica";
`

const About = ({ data, location }) => (
  <Layout>
    <Hero page={location.pathname}/>
    <Outer>
      <Inner>      
        <h1 style={{ fontSize: "3rem", width: "45%" }}>
          Here is where I tell you my last name isn't actually October.
        </h1>
      </Inner>
    </Outer>
    <Intro>
      <Greeter>
        <Img 
        fixed={data.me.childImageSharp.fixed}
        style={{ 
          borderRadius: "60px", 
          marginBottom: "35px",
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
      <Details style={{ paddingBottom: "60px" }}>
        <H2 big>View my work</H2>
        <p>Feel free to review some of my personal projects.</p>
        <Link 
        to={"/work"}
        style={{ textDecoration: "none" }}
        >
          <Button text='Projects'/>
        </Link>
      </Details>
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

export default About;