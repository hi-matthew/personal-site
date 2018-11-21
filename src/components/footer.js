import React from "react"
import styled from "styled-components"

const BespokeFooter = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E4E4E4;
  margin-top: 90px;
`

const Footer = () => (
  <BespokeFooter>
    <p style={{ 
    margin: '0 0', 
    fontSize: "16px"}}
    >
      Made with <i class="fas fa-heart" style={{color: 'red'}} /> | View on <i class="fab fa-github" />
    </p>
  </BespokeFooter>
)

export default Footer
