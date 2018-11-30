import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: transparent;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  &::before {
    position: absolute;
    background-color: ${props => props.theme.teal};
    width: 45px;
    max-width: 100%;
    height: 45px;
    left: 0;
    top: 0;
    font-size: 16px;
    content: "→";
    color: white;
    display: flex;
    justify-content: flex-start;
    padding-left: 15px;
    align-items: center;
    z-index: 1;
    border-radius: 100px;
    box-sizing: border-box;
    transition: width 400ms ease, padding-left 400ms ease;
  }
  &:hover::before {
    width: 100%;
    transition: width 400ms ease, padding-left 400ms ease;
    padding-left: 27px;
  }
  & .button-cta {
    z-index: 2;
    position: relative;
    margin: 0 0;
    transition: color 500ms ease;
    font-size: 16px;
    padding: 0 35px 0 60px;
    color: ${props => props.theme.teal};
    font-weight: 700;
  }
  &:hover .button-cta {
    color: white;
  }
`

const Button = ({ text }) => (
  <ButtonContainer>
    <p className="button-cta">
      {text}
    </p>
  </ButtonContainer>
)

export default Button;