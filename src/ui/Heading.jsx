import styled, { css } from "styled-components";

const Heading = styled.h1.attrs(({ as }) => ({ as: as || "h1" }))`
  text-align: center;
  ${(props) => {
    switch (props.as) {
      case "h1":
        return css`
          font-size: 5rem;
          font-weight: 900;
        `;
      case "h2":
        return css`
          font-size: 3rem;
          font-weight: 500;
        `;
      case "h3":
        return css`
          font-size: 2rem;
          font-weight: 400;
        `;
    }
  }}
`;

export default Heading;
