import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import HeroImg from "../components/heroImg"
import Button from "../components/button"
import HeroShell, { HeroText } from "../components/heroStyles"
import Layout from "../components/layout"

const Work = (props) => (
  <Layout>
      <HeroShell>
        <HeroImg page={props.location.pathname}/>
        <HeroText>This is where you judge me.</HeroText>
      </HeroShell>
      <div style={{ 
        flex: '1', 
        display: "flex", 
        flexDirection: 'column',
        margin: '0 auto', 
        width: "100%", 
        height: "100vh", 
        alignItems: "center", 
      }}
      >
        <h1
        style={{
          marginTop: "65px",
        }}
        >
        Welcome to my body of work.</h1>
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
