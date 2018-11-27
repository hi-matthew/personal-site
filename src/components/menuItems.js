import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const List = styled.ul`
  position: relative;
  list-style: none;
  margin: 35px auto 0;
  padding: 0 15%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .link {
    text-decoration: none;
    color: ${props => props.theme.link};
    font-size: 16px;
    position: relative;
  }
  .link::after {
    height: 7px;
    width: 0;
    left: 50%;
    right: 50%;
    margin-top: 5px;
    background-color: ${props => props.theme.teal};
    content: '';
    position: absolute;
    transition: left 300ms ease, right 300ms ease, width 300ms ease;
  }
  .link:hover::after,
  .active::after {
    left: 0;
    right: 0;
    width: 100%;
    transition: left 300ms ease, right 300ms ease, width 300ms ease;
  }
  li {
    padding: 0 0;
    margin: 0 0;
  }
  .circle {
    background-color: ${props => props.theme.teal};
    width: 6px;
    height: 6px;
    content: '';
    border-radius: 100%;
    opacity: 0.8;
  }
`

const MenuItems = () => (
  <List>
    <Link 
    className="link"
    activeClassName="active" 
    to={'/'}
    >
      <li>About</li>
    </Link>
    <div className="circle" />
    <Link
    className="link"
    activeClassName="active" 
    to={'/work'}
    >
      <li>Work</li>
    </Link>
    <div className="circle" />
    <Link
    className="link"
    activeClassName="active" 
    to={'/prose'}
    >
      <li>Prose</li>
    </Link>
  </List> 
)

export default MenuItems;
