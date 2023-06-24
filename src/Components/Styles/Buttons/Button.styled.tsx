import styled from "styled-components";

export const StyledButtton = styled.button`
  background: var(--primary-btn-color);
  color: var(--primary-text-color);
  padding: 0.5rem;
  width: 22rem;
  height: 56px;
  border-radius: 16px;

  &:hover {
    background: var(--secondary-btn-color);
    cursor: pointer;
  }
`;
