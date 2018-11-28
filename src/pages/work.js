import React from 'react'
import { Link } from 'gatsby'
import Hero from "../components/hero"
import Button from "../components/button"

import Layout from '../components/layout'

const Work = (props) => (
  <Layout>
      <div style={{ flex: "1" }}>
        <Hero page={props.location.pathname}/>
      </div>
      <div style={{ 
        flex: '1', 
        display: "flex", 
        flexDirection: 'column',
        margin: '0 auto', 
        width: "100%", 
        height: "100vh", 
        alignItems: "center", 
        justifyContent: "center" 
      }}
      >
        <h1>Where I showcase my work</h1>
        <Link 
          to={"/prose"}
          style={{ textDecoration: "none" }}
        >
          <Button text='Writing' />
        </Link>
      </div>
  </Layout>
)

export default Work
