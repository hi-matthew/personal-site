import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Menu from './menu'

const HeroContainer = styled.div`
  flex: 1; 
  height: 100vh;
  width: ${props => props.page === '/' ? "100vw" : "50vw"};
  position: fixed; 
`

const Url = styled.span`
  color: ${props => props.theme.teal};
  font-family: "Helvetica";
  transform: rotate(-90deg);
  padding: 0 0;
  margin: 0 0;
  text-transform: uppercase;
  transform-origin: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  position: absolute;
  right: 20px;
  bottom: 170px;
  @media (max-width: 700px) {
    display: none;
  }
`

const HeroImg = ({ page }) => (
  <StaticQuery
    query={graphql`
      query {
        leaves: file(relativePath: { eq: "backgrounds/leaves.jpg" }) {
          ...mainImage
        }
        museum: file(relativePath: { eq: "backgrounds/museum.jpg" }) {
          ...mainImage
        }
        prose: file(relativePath: { eq: "backgrounds/prose.jpg" }) {
          ...mainImage
        }
        wave: file(relativePath: { eq: "backgrounds/wave.jpg" }) {
          ...mainImage
        }
      }
      fragment mainImage on File {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    `}
    render={data => 
      <HeroContainer page={page} style={{ zindex: "-1", overflow: "hidden" }}>
        <Menu/>
        <Img 
        fluid={
        page === '/'
        ? data.leaves.childImageSharp.fluid
        : page === '/work'
        ? data.museum.childImageSharp.fluid
        : page === '/about'
        ? data.wave.childImageSharp.fluid
        : data.prose.childImageSharp.fluid
        } 
        style={{
          position: "absolute",
          width: '100%',
          height: "100%",
          zIndex: '-1',
          opacity: "0.95",
        }}
        />
        <div style={{
          width: "100%",
          height: "100%",
          position: 'relative',
        }}
        >
          <Url>matthewoctober</Url>
        </div>
      </HeroContainer>
    }
  />
)

export default HeroImg;
