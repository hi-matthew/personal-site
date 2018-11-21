import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  position: fixed; 
  background-color: #c1c6cc;
  box-shadow: 4px 4px 4px rgba(230, 230, 230);
  height: 100%;
  top: 0;
  left: 0;
`

const MenuIcon = styled.div`
  transform: rotate(-90deg);
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6); 
  font-weight: 700;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Menu = () => (
  <Container>
    <MenuIcon>
      Menu
    </MenuIcon>
  </Container>
)

export default Menu;