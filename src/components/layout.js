import React from 'react'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Menu from '../components/menu'

const GlobalStyle = createGlobalStyle`
   html {
     overflow-y: hidden;
   }
   body {
     margin: 7px 7px;
     font-family: "Helvetica";
   }
   p, span {
    line-height: 1.5; 
    font-size: 21px; 
    color: ${props => props.theme.lightblack}; 
  }
`

const theme = {
  teal: "#8BB4AF",
  darkblack: "#343434",
  lightblack: "#353839",
  link: "#dcdcdc",
  alternateLink: "#505050"
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
              { name: 'description', content: 'This is the official personal website of Matthew October.' },
              { name: 'keywords', content: 'Matthew October, portfolio, personal site' },
            ]}
          >
            <html lang="en" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
          </Helmet>
          <GlobalStyle />
          <Menu page={children[0].props.page}/>
          <div
          style={{
            maxWidth: "100vw",        
            height: "100vh",
            margin: '0 0',
            padding: '0 0',
            display: 'flex',
          }}
          >
            {children}
          </div>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
