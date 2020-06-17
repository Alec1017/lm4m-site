import styled from "styled-components"
import { linkColor, offWhite, darkGreen, richBlack, teal } from "./colors"
import GatsbyLink from "gatsby-link"

export const ComponentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 0px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 992px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1200px) {
    padding-left: 150px;
    padding-right: 150px;
  }

  font-family: "Noto Sans", sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const Button = styled.button`
  background-color: ${darkGreen};
  border: 1px solid ${darkGreen};
  color: ${offWhite};
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 15px 25px;
  &:hover {
    cursor: pointer;
    background-color: ${offWhite};
    color: ${darkGreen};
  }
  &:focus {
    outline-color: ${teal};
  }
`

export const ButtonSecondary = styled(Button)`
  background-color: ${richBlack};
  border: 1px solid ${offWhite};
`


export const PaddedComponentWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  justify-content: space-between;
  font-family: "Noto Sans", sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 0px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 992px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1200px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`

export const Link = styled(GatsbyLink)`
  color: ${linkColor};
  &:focus {
    outline-color: ${teal};
  }
`
export const OutsideLink = styled.a`
  &:focus {
    outline-color: ${teal};
  }
`;
