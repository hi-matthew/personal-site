import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Button from "./button"

const Frame = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  & .project {
    margin: 30px 0;
    transition: transform 500ms ease, box-shadow 500ms ease;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    transform: ${props => props.scale ? "scale(1.75) translateX(-35%)" : null};
    z-index: ${props => props.scale ? "5" : "4"};
    box-shadow: ${props => props.scale
      ? `10px 10px 30px ${props.theme.darkblack}`
      : `5px 5px 10px ${props.theme.darkblack}`
    };
    @media (max-width: 750px) {
      transform: ${props => props.scale ? "scale(1.3)" : null};
    }
  }
  & h2::after {
    content: "(Click image to enlarge)";
    color: ${props => props.theme.teal};
    position: relative;
    font-size: 13px;
    transform: translateY(12px);
    display: flex;
    justify-content: center;
    margin-bottom: -15px;
    font-weight: 500;
  }
  & .link {
    text-decoration: none;
  }
`

const TechLogos = styled.ul`
  display: flex;
  width: auto;
  justify-content: center;
  list-style: none;
  padding: 0 0;
  margin: 10px 0;
  .logo ~ .logo {
    margin-left: 30px;
  }
`

const ButtonBin = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 15px;
  & .link:last-child {
    margin-left: 45px;
  }
`

const Project = ({ url, github, index, image, title, scale, scaleBoolean, desc, icons }) => (
  <Frame scale={scale}>
    <h2 style={{textAlign: "center"}}>{title}</h2>
    <div
    onClick={() => scaleBoolean(index)}
    className="project"
    >
      <Img fluid={image} />
    </div>
    <TechLogos>
      {icons.map(logo => (
        <Img className="logo" key={logo.src} fixed={logo} />
      ))}
    </TechLogos>
    <ButtonBin>
      <a href={url}
      target={"_blank"}
      className="link"
      >
        <Button className="button" text="Demo" />
      </a>
      <a href={github}
      target={"_blank"}
      className="link"
      >
        <Button className="button" text="Github" />
      </a>
    </ButtonBin>
    <p style={{
      textAlign: "center"
    }}
    >
      {desc}
    </p>
  </Frame>
)

export default Project;