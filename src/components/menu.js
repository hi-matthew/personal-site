import React from 'react'
import MenuItems from "./menuItems"
import styled from "styled-components"

const Container = styled.div`
  position: absolute; 
  right: 50%;
  left: 0;
  transition: width 500ms ease;
  z-index: 5;
  opacity: 0.90;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = (props) => (
  <Container>
    <MenuItems truthy={props.page === '/prose'}/>
  </Container>
)

export default Menu;
