import styled from "styled-components"

import { richBlack, pureWhite } from "./colors"

export const BBh1 = styled.h1`
  font-family: "Noto Sans Semicondensed", sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: ${({ isOnDark }) => (isOnDark ? pureWhite : richBlack)};
`

export const BBh2 = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5em;
  color: ${richBlack};
`

export const BBh3 = styled.h3`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.17em;
  color: ${richBlack};
`

export const BBh4 = styled.h4`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.12em;
  color: ${richBlack};
`

export const BBh5 = styled.h5`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.00em;
`

export const BBp = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 0.83em;
`

export const BBstrong = styled.strong`
  font-family: "Noto Sans", sans-serif;
`;

export const BBsmallp = styled.small`
  font-family: "Noto Sans", sans-serif;

  font-size: 0.6em;
`

