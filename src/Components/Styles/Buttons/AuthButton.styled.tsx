import styled from "styled-components";

export const StyledAuthButtton = styled.button`
  background: var(--primary-btn-color);
  color: var(--primary-text-color);
  padding: 0.5rem;
  width: 22.5rem;
  border-radius: 0.5rem;
  height: 56px;

  &:hover {
    background: var(--secondary-btn-color);
    cursor: pointer;
  }
`;
