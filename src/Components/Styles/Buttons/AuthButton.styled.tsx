import styled from "styled-components";

export const StyledAuthButtton = styled.button<{
  width?: string;
  height?: string;
}>`
  background: var(--primary-btn-color);
  color: var(--primary-text-color);
  /* padding: 0.5rem; */
  width: ${(props) => props.width};
  border-radius: 0.5rem;
  height: ${(props) => props.height};
  z-index: 999; /* Adjust as needed */

  &:hover {
    background: var(--secondary-btn-color);
    cursor: pointer;
  }
`;
