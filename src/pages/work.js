import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import HeroImg from "../components/heroImg"
import Button from "../components/button"
import HeroShell, { HeroText } from "../components/heroStyles"
import Layout from "../components/layout"
import Project from "../components/project"
import myProjects from "../projectList"

class Work extends Component {
  state = {
    scale: Array(5).fill(false),
  }

  scaleBoolean = (num) => {
    let scale = {...this.state.scale};
    scale[num] = !scale[num];
    this.setState({ scale });
  }

  render() {
    const { data, location } = this.props;
    const image = (index) => {
      return index === "0"
      ? data.hnClone.childImageSharp.fluid
      : index === "1" ? data.portfolio.childImageSharp.fluid
      : index === "2" ? data.weather.childImageSharp.fluid
      : index === "3" ? data.trello.childImageSharp.fluid
      : data.calculator.childImageSharp.fluid;
    }
    const logos = (techStack) => {
      const icons = techStack.map(tech => {
        return data[tech].childImageSharp.fixed;
      })

      return icons;
    }
    return (
      <Layout>
          <HeroShell>
            <HeroImg page={location.pathname}/>
            <HeroText>This is where you judge me.</HeroText>
          </HeroShell>
          <div style={{
            flex: '1',
            display: "flex",
            flexDirection: 'column',
            margin: '0 auto',
            width: "100%",
            height: "auto",
            alignItems: "center",
            paddingBottom: "60px",
          }}
          >
            <h1
            style={{
              marginTop: "65px",
            }}
            >
              Welcome to my body of work.
            </h1>
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
            <h2>I like words too.</h2>
            <p>I need to write more, but you'll be able to find a couple posts for now.</p>
            <Link
              to={"/prose"}
              style={{ textDecoration: "none", transform: "translateX(0px)" }}
            >
              <Button text='Writing'/>
            </Link>
          </div>
      </Layout>
        )
      }
    }

export const query = graphql`
  query {
    hnClone: file(relativePath: {eq: "apps/hnClone.png"}) {
      ...appStack
    }
    portfolio: file(relativePath: {eq: "apps/portfolio.png"}) {
      ...appStack
    }
    weather: file(relativePath: {eq: "apps/weather.png"}) {
      ...appStack
    }
    trello: file(relativePath: {eq: "apps/trello.png"}) {
      ...appStack
    }
    calculator: file(relativePath: {eq: "apps/calculator.png"}) {
      ...appStack
    }
    react: file(relativePath: {eq: "logos/react.png"}) {
      ...techStack
    }
    js: file(relativePath: {eq: "logos/js.jpg"}) {
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
    html: file(relativePath: {eq: "logos/html.png"}) {
      ...techStack
    }
    css: file(relativePath: {eq: "logos/css.png"}) {
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
