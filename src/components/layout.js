import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import matthewoctober from "../images/apps/matthewoctober.png"

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
  blockquote {
    border-left: 5px solid ${props => props.theme.teal};
    margin-left: 0;
    padding-left: 1em;
  }
  ul, ol {
    font-family: "Raleway", "serif";
    font-size: 19px;
    font-weight: 100;
    line-height: 1.5;
    li ~ li {
      margin-top: 10px;
    }
  }
  ol {
    padding-left: 20px;
  }
  .anecdote, .anecdote:visited {
    text-decoration: none;
    color: inherit;
    border-bottom: 5px solid ${props => props.theme.teal};
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

const Layout = ({ children, path }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
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
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'Matthew October, Matthewoctober, portfolio, personal site' },
            ]}
          >
            <html lang="en" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,500" rel="stylesheet" />
            <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}${path}`} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}${matthewoctober}`} />
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
