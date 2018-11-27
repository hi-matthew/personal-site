import React from "react"
import styled from "styled-components"

const BespokeFooter = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272729;
  margin-top: 90px;
  p {
    margin: 0 0;
    padding: 0 0;
    font-size: 16px;
    color: rgb(220, 220, 220);
  }
  .fa-heart {
    color: red;
  }
`

const Footer = () => (
  <BespokeFooter>
    <p>
      Made with <i className="fas fa-heart" /> | View on <i className="fab fa-github" />
    </p>
  </BespokeFooter>
)

export default Footer
