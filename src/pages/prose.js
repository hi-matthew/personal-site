import React from 'react'
import Layout from "../components/layout"
import HeroImg from "../components/heroImg"
import HeroShell, { HeroText } from "../components/heroStyles"

const Prose = (props) => (
  <Layout>
    <HeroShell>
      <HeroImg page={props.location.pathname}/>
      <HeroText>This is where I ruminate out loud.</HeroText>
    </HeroShell>
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
      <p>This is where my prose will live.</p>
      <p>Click the logo in the bottom left hand corner to be greeted again.</p>
    </div>
  </Layout>
)

export default Prose;
