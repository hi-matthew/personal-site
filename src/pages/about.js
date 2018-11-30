import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Layout from '../components/layout'
import HeroImg from '../components/heroImg'
import Button from "../components/button"
import HeroShell, { HeroText } from "../components/heroStyles"

const SwipeRight = keyframes`
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(300px);
  }
  45% {
    opacity: 0;
  }
  66% {
    transform: translateX(-500px);
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
`

const Intro = styled.section`
  text-align: center;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  height: auto;
  padding-bottom: 60px;
`

const Greeter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75%;
  margin-top: 65px;
  position: relative;
  width: 100%;
`

const Details = styled(Greeter)`
  margin-top: 45px;
  position: relative;
  width: 100%;
`

const H2 = styled.h2`
  color: ${props => props.theme.darkblack};
  font-size: ${props => props.big ? "40px" : "28px"};
  padding-top: ${props => props.plus ? "75px" : "30px"};
  margin: 0 0 30px;
  font-family: "Helvetica";
  span {
    margin: 0 0;
    font-size: 40px;
    font-family: "Helvetica";
    font-weight: 700;
    display: block;
    overflow: hidden;
  }
  &:hover span span {
    animation: ${SwipeRight} 600ms ease forwards;
  }
`

const About = ({ data, location }) => (
  <Layout>
    <HeroShell>
      <HeroImg page={location.pathname}/>
      <HeroText>
        This is where I tell you my last name is not actually October
      </HeroText>
    </HeroShell>
    <Intro>
      <Greeter>
        <Img
        fixed={data.matthew.childImageSharp.fixed}
        style={{
          borderRadius: "100px",
          marginBottom: "15px",
        }}
        />
        <H2 big>It's nice to meet you</H2>
        <p>
          So, my last name is not October. October is only my birth month. Though, I use Matthew October as a moniker in order to gain more continuity across accounts. Also, I'd be lying if I were to say the dot com TLD didn't have some influence on me. I know, it's weird, but it's what you do when both your first and last name are generic and you share the internet with billions of people.
        </p>
      </Greeter>
      <Details>
        <H2 big>I'm job hungry</H2>
        <p>
          I'm a self-taught JavaScript developer--based in Phoenix--looking to break into my first professional developer role. I'm open to employment in the following greater city areas: Austin, Denver, Los Angeles, Phoenix, San Diego.</p>
        <p>
          My goal is to find a workplace that embodies grit and craftsmanship. There are numerous websites and applications that, in earnest, make me feel good just by having used them.
        </p>
        <p>My aim is to reciprocate that feeling for others.</p>
        <H2 big plus>
          <span><span>Swipe right</span></span> worthy workplace qualities
        </H2>
        <p>
          Somewhere I can continue mastering technologies specific or similar to:
        </p>
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
        <p>Somewhere where people are happy.</p>
      </Details>
      <Details>
        <H2 big>I like to build things</H2>
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
    matthew: file(relativePath: {eq: "headshot/matthew.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(relativePath: {eq: "logos/react.png"}) {
      ...techStack
    }
    redux: file(relativePath: {eq: "logos/redux.png"}) {
      ...techStack
    }
    js: file(relativePath: {eq: "logos/js.jpg"}) {
      ...techStack
    }
    node: file(relativePath: {eq: "logos/node.png"}) {
      ...techStack
    }
    styled: file(relativePath: {eq: "logos/styled.png"}) {
      ...techStack
    }
    gatsbyIcon: file(relativePath: {eq: "logos/gatsby-icon.png"}) {
      ...techStack
    }
    graphQL: file(relativePath: {eq: "logos/graphQL.png"}) {
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