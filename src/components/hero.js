import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroContainer = styled.div`
  max-width: 100%; 
  height: 100vh;
  overflow: hidden;
  position: relative; 
`

const HeroMessage = styled.h1`
  font-size: 50px;
  color: rgba(0, 0, 0, 0.8);
  top: 12.5%;
  left: 10%;
  margin: 0 0;
  position: absolute;
`

const SubHeroMessage = styled.h3`
  margin-bottom: ${props => props.first ? "5px" : "0"};
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <HeroContainer>
        <Img 
        fluid={data.hero.childImageSharp.fluid} 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: '-1'
        }}
        />
        <HeroMessage main>Hi, I'm Matt.</HeroMessage>
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position:"absolute",
          right: "10%",
          bottom: "12.5%"
        }}>
          <SubHeroMessage first>A self-taught developer</SubHeroMessage>
          <SubHeroMessage>and dilettante runner.</SubHeroMessage>
        </div>
      </HeroContainer>
    }
  />
)

export default Hero
