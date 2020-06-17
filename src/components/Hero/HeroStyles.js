import styled from "styled-components"

export const HeroContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 97px;
  height: 600px;
`

export const HeroImageContainer = styled.div`
  background-image: url(${props => props});
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
`

export const HeroTextContainer = styled.div``

export const HeroTagline = styled.p``

export const GeneralContainer = styled(HeroContainer)`
  width: 50%;
`
