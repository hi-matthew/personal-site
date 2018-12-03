import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'hasklig';
    src: url('../static/Hasklig-Medium.otf');
    font-weight: normal;
    font-style: normal;
  }
   html {
     overflow-x: hidden;
   }
   body {
     margin: 0 0;
     padding: 0 0;
     font-family: "Helvetica";
     height: 100vh;
     width: 100vw;
   }
   p, span {
    line-height: 1.5;
    font-size: 19px;
    color: ${props => props.theme.lightblack};
    font-family: "Raleway", "serif";
    font-weight: 100;
    font-style: normal;
  }
  ::selection {
    color: white;
    background-color: #D7337C;
  }
  .gatsby-highlight {
    position: relative;
    width: 100%;
  }
  code[class*="language-"],
  pre[class*="language-"],
  code > *,
  code > * > *,
  code > * > * > * {
    line-height: inherit;
    font-size: inherit;
    color: inherit;
    font-family: 'hasklig', 'consolas';
    font-weight: inherit;
    font-style: inherit;
  }
`

const Container = styled.div`
  max-width: 100vw;
  margin: 0 0;
  padding: 0 0;
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const theme = {
  teal: "#8BB4AF",
  darkblack: "#343434",
  lightblack: "#353839",
  link: "#dcdcdc",
  linkhover: "#fdfdfd",
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'This is the official website of Matthew October.' },
              { name: 'keywords', content: 'Matthew October, portfolio, personal site' },
            ]}
          >
            <html lang="en" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet" />
          </Helmet>
          <GlobalStyle />
          <Container>
            {children}
          </Container>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
