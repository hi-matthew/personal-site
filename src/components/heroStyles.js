import styled from "styled-components"

const HeroShell = styled.div`
  flex: 1;
  color: white;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 750px) {
    width: 100vw;
    height: 50vh;
  }
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
  @media (max-width: 750px) {
    width: 70%;
    font-size: 2.3rem;
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    width: 80%;
    font-size: 2rem;
  }
`
export default HeroShell;