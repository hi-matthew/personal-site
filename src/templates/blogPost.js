import React, { Component } from 'react'
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import HeroImg from "../components/heroImg"
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
  .alternate-date {
    font-size: 15px;
    font-weight: 800;
    font-family: Helvetica;
    text-align: right;
    width: 80%;
    margin: 15px 0 -15px;
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
const Header = styled.div`
  position: fixed;
  color: ${props => props.theme.darkblack};;
  background-color: white;
  height: 70px;
  left: 50vw;
  overflow: hidden;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 0;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 15px;
  opacity: 0.9;
  transition: box-shadow 300ms ease;
  box-shadow: ${props => props.active
    ? `1px 0px 5px ${props.theme.lightblack}`
    : null
    };
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

export default class blogPost extends Component {
  state={
    activeMenu: false,
    showComposedDate: '',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWheel);
    window.addEventListener('resize', this.handleResize);
    window.innerWidth > 950
    ? this.setState({ showComposedDate: true })
    : this.setState({ showComposedDate: false })
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
    return window.innerWidth > 950
    ? this.setState({ showComposedDate: true })
    : this.setState({ showComposedDate: false });
  }

  render() {
    const { data, location } = this.props;
    const post = data.markdownRemark;
    const {activeMenu, showComposedDate} = this.state;
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
        </HeroShell>
        <Header active={activeMenu}>
          <Link
          to={'/prose'}
          className="link"
          >
            Back to listings
          </Link>
          {composedDate}
        </Header>
        <TextContainer>
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
