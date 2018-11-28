import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../components/layout'
import Hero from "../components/hero"

const IndexPage = (props) => (
  <Layout>
  <div style={{ flex: '1' }}>
    <Hero page={props.location.pathname}/>
  </div>
  <div style={{ flex: '1', margin: '0 auto', width: "100%", textAlign: "center" }}>
    <p>This is where I greet you.</p>
    <Link to={'/about'}>Learn more about me</Link>
  </div>
</Layout>
)

export default IndexPage
