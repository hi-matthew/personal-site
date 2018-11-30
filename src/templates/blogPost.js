import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import HeroImg from "../components/heroImg"
import HeroShell, { HeroText } from "../components/heroStyles"
import Layout from "../components/layout"

const Text = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${props => props.theme.darkblack};
  p {
    color: ${props => props.theme.darkblack};
  }
`
const Header = styled.div`
  position: fixed;
  color: ${props => props.theme.darkblack};;
  background-color: white;
  width: 49%;
  height: 70px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 0;
  box-sizing: border-box;
  font-weight: 800;
  opacity: 0.9;
  .link {
    text-decoration: none;
    color: ${props => props.theme.darkblack};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 12px;
  }
  .link::after {
    height: 7px;
    width: 0;
    left: 50%;
    right: 50%;
    margin-top: 5px;
    background-color: ${props => props.theme.teal};
    content: '';
    position: relative;
    transition: left 300ms ease, right 300ms ease, width 300ms ease;
  }
  .link:hover::after {
    left: 0;
    right: 0;
    width: 100%;
    transition: left 300ms ease, right 300ms ease, width 300ms ease;
  }
`

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <HeroShell>
        <HeroImg page={location.pathname}/>
        <HeroText>{post.frontmatter.title}</HeroText>
      </HeroShell>
      <Header>
        <Link
        to={'/prose'}
        className="link"
        >
          Back to listings
        </Link>
        Composed: {post.frontmatter.date}
      </Header>
      <div style={{
        flex: '1',
        display: "flex",
        flexDirection: 'column',
        margin: '65px auto 0',
        width: "100%",
        alignItems: "center",
        paddingBottom: "60px",
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "20px" }}>
          <Text dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`