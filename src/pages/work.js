import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import HeroImg from "../components/heroImg"
import Button from "../components/button"
import HeroShell, { HeroText } from "../components/heroStyles"
import Layout from "../components/layout"
import Project from "../components/project"
import myProjects from "../projectList"

const FocusShadow = styled.div`
  position: fixed;
  width: 100vw;
  height: ${props => props.isImageEnlarged ? "100%" : "0%"};
  transition: background-color 500ms ease, height 500ms ease;
  background-color: ${props => props.isImageEnlarged ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  z-index: 4;
  @media (max-width: 750px) {
    background-color: transparent;
  }
`

const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: auto;
  padding-bottom: 60px;
  background-color: ${props => props.truthy ? "grey" : "white"};
  @media (max-width: 750px) {
    z-index: 3;
  }
`

const Greeter = styled.div`
  position: relative;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 25px 0 0;
  justify-content: center;
  align-items: center;
`

class Work extends Component {
  state = {
    scale: Array(5).fill(false),
  }

  scaleBoolean = (num) => {
    let scale = {...this.state.scale};
    scale[num] = !scale[num];
    this.setState({ scale });
  }

  resetScale = () => {
    const scale = Array(5).fill(false);
    this.setState({scale});
  }

  render() {
    const truthy = Object.values(this.state.scale).some(each => each===true);
    const { data, location } = this.props;
    const image = (index) => {
      return index === "0"
      ? data.chatterbox.childImageSharp.fluid
      : index === "1" ? data.simpleShopping.childImageSharp.fluid
      : index === "2" ? data.hnClone.childImageSharp.fluid
      : index === "3" ? data.weather.childImageSharp.fluid
      : index === "4" ? data.trello.childImageSharp.fluid
      : data.calculator.childImageSharp.fluid;
    }
    const logos = (techStack) => {
      const icons = techStack.map(tech => {
        return data[tech].childImageSharp.fixed;
      })

      return icons;
    }
    console.log(truthy);
    return (
      <Layout path={location.pathname}>
          <FocusShadow
          isImageEnlarged={truthy}
          onClick={this.resetScale}
          />
          <HeroShell>
            <HeroImg page={location.pathname}/>
            <HeroText>This is where you judge me</HeroText>
          </HeroShell>
          <Main>
            <Greeter>
              <h1
              style={{
                marginTop: "50px",
                textAlign: "center",
              }}
              >
                Welcome to my <br/>body of work
              </h1>
              <p
              style={{
                textAlign: "center",
              }}
              >
                Feel free to take a look around.
              </p>
            </Greeter>
            {myProjects.map(({index, title, demoUrl, github, desc, techStack }) => (
              <Project
              index={index}
              key={index}
              scaleBoolean={this.scaleBoolean}
              scale={this.state.scale[index]}
              title={title}
              image={image(index)}
              url={demoUrl}
              github={github}
              desc={desc}
              tech={techStack}
              icons={logos(techStack)}
              />
            ))}
            <div style={{
              display: "flex",
              flexDirection: "column",
              width: "85%",
              justifyContent: "center",
              textAlign: "center",
            }}>
              <h2>I like words too.</h2>
              <p>I need to write more, but you'll be able to find at least one post for now.</p>
            </div>
              <Link
                to={"/prose"}
                style={{ textDecoration: "none" }}
              >
                <Button text='Writing'/>
              </Link>
          </Main>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    hnClone: file(relativePath: {eq: "apps/hnClone.png"}) {
      ...appStack
    }
    simpleShopping: file(relativePath: {eq: "apps/simpleShopping.png"}) {
      ...appStack
    }
    weather: file(relativePath: {eq: "apps/weather.png"}) {
      ...appStack
    }
    trello: file(relativePath: {eq: "apps/trello.png"}) {
      ...appStack
    }
    chatterbox: file(relativePath: {eq: "apps/chatterbox.png"}) {
      ...appStack
    }
    calculator: file(relativePath: {eq: "apps/calculator.png"}) {
      ...appStack
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
    styled: file(relativePath: {eq: "logos/styled.png"}) {
      ...techStack
    }
    webpack: file(relativePath: {eq: "logos/webpack.png"}) {
      ...techStack
    }
    gatsbyIcon: file(relativePath: {eq: "logos/gatsby-icon.png"}) {
      ...techStack
    }
    graphQL: file(relativePath: {eq: "logos/graphQL.png"}) {
      ...techStack
    }
    html: file(relativePath: {eq: "logos/html.png"}) {
      ...techStack
    }
    css: file(relativePath: {eq: "logos/css.png"}) {
      ...techStack
    }
    express: file(relativePath: {eq: "logos/express.png"}) {
      ...techStack
    }
    jest: file(relativePath: {eq: "logos/jest.png"}) {
      ...techStack
    }
    mongo: file(relativePath: {eq: "logos/mongo.png"}) {
      ...techStack
    }
    node: file(relativePath: {eq: "logos/node.png"}) {
      ...techStack
    }
    socketio: file(relativePath: {eq: "logos/socketio.png"}) {
      ...techStack
    }
    babel: file(relativePath: {eq: "logos/babel.jpg"}) {
      ...techStack
    }
  }
`

export const appStack = graphql`
  fragment appStack on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default Work
