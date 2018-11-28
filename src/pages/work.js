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
        <h1>Where I showcase my work</h1>
        <Link to="/prose">Go look at my writing</Link>
      </div>
  </Layout>
)

export default Work
