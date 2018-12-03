import React, { Component } from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"
import HeroImg from "../components/heroImg"
import BlogHeader from "../components/blogHeader"
import HeroShell, { HeroText } from "../components/heroStyles"
import Layout from "../components/layout"

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 65px auto 0;
  width: 100%;
  overflow: hidden;
  align-items: center;
  padding-bottom: 60px;
  position: relative;
  .alternate-date {
    font-size: 15px;
    font-weight: 800;
    font-family: Helvetica;
    text-align: right;
    width: 80%;
    margin: 15px 0 -15px;
  }
  @media (max-width: 750px) {
    background-color: white;
    z-index: 4;
    margin-top: 0;
    padding-top: 50px;
  }
`

const Text = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  color: ${props => props.theme.darkblack};
  p {
    color: ${props => props.theme.darkblack};
  }
`

export default class blogPost extends Component {
  state={
    activeMenu: false,
    showComposedDate: '',
    windowIsMobileSized: '',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWheel);
    window.addEventListener('resize', this.handleResize);
    window.innerWidth > 950
    ? this.setState({ showComposedDate: true })
    : this.setState({ showComposedDate: false })

    window.innerWidth < 751
    ? this.setState({ windowIsMobileSized: true })
    : this.setState({ windowIsMobileSized: false })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWheel);
    window.removeEventListener('resize', this.handleResize);
  }

  handleWheel = () => {
    const scrollHeight = window.scrollY;
    scrollHeight > 25
    ? this.setState({ activeMenu: true })
    : this.setState({ activeMenu: false })
  }

  handleResize = () => {
    window.innerWidth > 950
    ? this.setState({ showComposedDate: true })
    : this.setState({ showComposedDate: false })

    window.innerWidth < 751
    ? this.setState({ windowIsMobileSized: true })
    : this.setState({ windowIsMobileSized: false })
  }

  render() {
    const { data, location } = this.props;
    const post = data.markdownRemark;
    const {activeMenu, showComposedDate, windowIsMobileSized} = this.state;
    const composedDate = showComposedDate
      ? `Composed: ${post.frontmatter.date}`
      : null;
    const bottomComposedDate = !showComposedDate
      ? `Composed: ${post.frontmatter.date}`
      : null;

    return (
      <Layout>
        <HeroShell>
          <HeroImg page={location.pathname}/>
          <HeroText>{post.frontmatter.title}</HeroText>
          {!windowIsMobileSized
          ? <BlogHeader activeMenu={activeMenu} composedDate={composedDate} />
          : null
          }
        </HeroShell>
        <TextContainer>
          {windowIsMobileSized
          ? <BlogHeader activeMenu={activeMenu} composedDate={composedDate} />
          : null
          }
          <Text dangerouslySetInnerHTML={{ __html: post.html }} />
          {!showComposedDate
          ? <span className='alternate-date'>
              {bottomComposedDate}
            </span>
          : null
          }
        </TextContainer>
      </Layout>
    )
  }
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
