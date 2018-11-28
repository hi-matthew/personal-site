import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  width: 135px;
  height: 45px;
  background-color: transparent;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    height: 10px;
    width: 8px;
    z-index: 5;
    transform: translateX(-10px);
  }
  &::after {
    position: absolute;
    background-color: ${props => props.theme.teal};
    width: 45px;
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
    transform: translate(-31px);
    transition: width 400ms ease, padding-left 400ms ease;
  }
  &:hover::after {
    width: 175px;
    transition: width 400ms ease, padding-left 400ms ease;
    padding-left: 27px;
  }
  & .button-cta {
    z-index: 2;
    margin: 0 0;
    transition: color 500ms ease;
    font-size: 16px;
    padding: 0 0;
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