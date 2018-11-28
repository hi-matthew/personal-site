import React from 'react'
import MenuItems from "./menuItems"
import styled from "styled-components"

const Container = styled.div`
  position: absolute; 
  transition: width 500ms ease;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`

const Menu = () => (
  <Container>
    <MenuItems />
  </Container>
)

export default Menu;
