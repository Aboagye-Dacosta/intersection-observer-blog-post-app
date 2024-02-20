import styled, { css } from "styled-components";

const Row = styled.div.attrs(({ type, direction }) => ({
  type: type || "horizontal",
  direction: direction || "normal",
}))`
  display: flex;
  width: 100%;
  ${(props) => {
    switch (props.type) {
      case "horizontal":
        return css`
          justify-content: space-between;
          align-items: center;
          flex-direction: ${(props) =>
            props.direction == "reverse" ? "row-reverse" : "row"};
        `;
      case "vertical":
        return css`
          flex-direction: ${(props) =>
            props.direction == "reverse" ? "column-reverse" : "column"};
        `;
    }
  }}
`;

export default Row;
