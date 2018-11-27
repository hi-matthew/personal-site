import React from 'react'
import { Link } from 'gatsby'
import Hero from "../components/hero"

import Layout from '../components/layout'

const Work = (props) => (
  <Layout>
      <div style={{ flex: '1' }}>
        <Hero page={props.location.pathname}/>
      </div>
      <div style={{ flex: '1', margin: '0 auto', width: "100%", textAlign: "center" }}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
  </Layout>
)

export default Work
