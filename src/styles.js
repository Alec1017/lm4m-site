import styled from "styled-components"
import { device } from "./device"

export const GREEN = "#2E6458"
export const CREAM = "#E5E5E5"
export const GRAY_1 = "#333333"
export const GRAY_2 = "#4F4F4F"
export const GRAY_3 = "#828282"
export const GRAY_4 = "#BDBDBD"
export const GRAY_5 = "#E0E0E0"
export const GRAY_6 = "#F2F2F2"
export const WHITE = "#FFFFFF"

export const Buenard = "'Buenard', serif"
export const FiraSans = "'Fira Sans', sans-serif"

export const maxBodyWidth = 1099
export const maxWidth = 1499

export const H1 = styled.h1`
  font-family: ${Buenard};
  font-weight: 800;
  font-size: 90px;
  margin-bottom: 25px;
  color: ${WHITE};
  @media only screen and ${device.tablet} {
    font-size: 72px;
  }
  @media only screen and ${device.mobile} {
    font-size: 56px;
  }
`
