import styled from "styled-components"

const HeroShell = styled.div`
  flex: 1;
  color: white;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const HeroText = styled.h1`
  font-size: 3rem;
  z-index: 3;
  position: fixed;
  line-height: 1.2;
  margin: 0 0;
  width: 24%;
  @media (max-width: 1050px) {
    font-size: 2.8rem;
  }
`
export default HeroShell;