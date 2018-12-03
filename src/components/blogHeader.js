import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.div`
  position: fixed;
  color: ${props => props.theme.darkblack};;
  background-color: white;
  height: 70px;
  left: 50vw;
  overflow: hidden;
  top: 0;
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
  @media (max-width: 750px) {
    top: 0;
    position: absolute;
    left: 0;
  }
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

const BlogHeader = (props) => (
  <Header active={props.activeMenu}>
    <Link
    to={'/prose'}
    className="link"
    >
      Back to listings
    </Link>
    {props.composedDate}
  </Header>
)

export default BlogHeader;
