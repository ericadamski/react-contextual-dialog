import styled from "styled-components";
import colors from "./utils/colors";

const Button = styled.button`
  min-height: 1.75rem;
  min-width: 4rem;
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  transition-property: background-color, border-color;
  transition: 0.2s;
  border: 1px solid ${colors.purple.normal};

  &:hover {
    cursor: pointer;
    background-color: ${colors.blue.normal};
    border-color: ${colors.blue.normal};
  }
`;

export default Button;
