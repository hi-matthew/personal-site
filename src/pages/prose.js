import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from "styled-components"
import Layout from "../components/layout"
import HeroImg from "../components/heroImg"
import HeroShell, { HeroText } from "../components/heroStyles"

const PostListing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 80%;
  border: 5px #222222 solid;
  padding: 20px 30px;
  box-sizing: border-box;
  transition: background-color 400ms ease;
  &:hover {
    background-color: #222222;
  }
  &:hover h4{
    color: ${props => props.theme.teal}
  }
  &:hover h2,
  &:hover p {
    color: white;
  }
  .postListing {
    text-decoration: none;
    color: #333333;
    transition: color 400ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
  p {
    font-size: 18px;
  }
  h2, h4, p {
    margin: 5px 0;
    transition: color 400ms ease;
  }
`

const Prose = ({ location, data }) => (
  <Layout>
    <HeroShell>
      <HeroImg page={location.pathname}/>
      <HeroText>This is where I ruminate out loud</HeroText>
    </HeroShell>
    <div style={{
      flex: '1',
      display: "flex",
      flexDirection: 'column',
      margin: '65px auto 0',
      width: "100%",
      alignItems: "center",
      paddingBottom: "45px",
    }}
    >
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px"
      }}
      >
        Thoughts <br/><span style={{ fontSize: "1.25rem", fontFamily:"inherit", fontWeight: "400"}}>by Matthew October</span>
      </h1>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostListing>
          <Link
          className="postListing"
          to={`${node.fields.slug}`}
          >
            <h2>{node.frontmatter.title}</h2>
            <h4>{node.frontmatter.date}</h4>
            <p>{node.excerpt}</p>
          </Link>
        </PostListing>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
            _PARENT
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Prose;
