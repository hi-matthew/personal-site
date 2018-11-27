import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/hero"

const Prose = (props) => (
  <Layout>
    <div style={{ flex: '1' }}>
      <Hero page={props.location.pathname}/>
    </div>
    <div style={{ flex: '1', margin: '0 auto', width: "100%", textAlign: "center" }}>
      <p>This is where my prose will live.</p>
    </div>
  </Layout>
)

export default Prose;
