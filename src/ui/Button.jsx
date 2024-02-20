import styled from "styled-components";

const Button = styled.button`
  position: relative;
  padding: 0.7rem 2rem;
  border: none;
  box-shadow: 0 3px 5px rgba(106, 3, 3, 0.04);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default Button;
