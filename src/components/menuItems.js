import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const List = styled.ul`
  position: relative;
  list-style: none;
  margin: 35px auto 0;
  padding: 0 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: inherit;
  .link {
    text-decoration: none;
    color: ${props => props.theme.link};
    font-size: 18px;
    position: relative;
    transition: color 300ms ease;
    font-family: "raleway";
  }
  .link:hover, .link.active {
    color: ${props => props.theme.linkhover};
  }
  .link::after,
  .link .logo::after {
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
  .link .logo::after {
    transform: translateY(25px);
  }
  .link:hover::after,
  .link.active::after,
  .link .logo:hover::after,
  .link.active .logo::after {
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
    margin: 0 15%;
    @media (max-width: 1150px) {
      margin: 0 20%;
    }
  }
  .link .logo {
    position: fixed;
    width: 35px;
    height: 35px;
    background-color: ${props => props.theme.teal};
    color: ${props => props.theme.link};
    left: 40px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 500ms ease, background-color 500ms ease;
    font-family: 'Helvetica';
    @media (max-width: 700px) {
      display: none;
    }
  }
  .link .logo:hover {
    background-color: ${props => props.theme.link};
    color: ${props => props.theme.teal};
    transition: color 500ms ease, background-color 500ms ease;
  }
`

const MenuItems = () => (
  <List>
    <Link
    className="link"
    activeClassName="active"
    to={'/about'}
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
    <Link
    className="link"
    activeClassName="active"
    to={'/'}
    >
      <li className="logo">M</li>
    </Link>
  </List>
)

export default MenuItems;
