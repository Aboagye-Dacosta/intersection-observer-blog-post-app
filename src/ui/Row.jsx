import styled, { css } from "styled-components";

const Row = styled.div.attrs(({ direction }) => ({
  direction: direction || "horizontal",
}))`
  display: flex;
  /* gap:1rem; */
  gap: 2rem;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.direction) {
      case "vertical":
        return css`
          flex-direction: column;
        `;
    }
  }}
`;

export default Row;
