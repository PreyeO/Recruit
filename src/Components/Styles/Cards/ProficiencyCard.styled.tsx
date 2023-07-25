import styled from "styled-components";

export const StyledProficiencyCard = styled.div<{ width?: string }>`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  display: flex;
  border: 1px solid #f1f1f1;
  flex-direction: column;
  gap: 1rem;
  max-width: ${(props) => props.width};
  align-items: center;
`;

export const StyledSkillTitle = styled.h2`
  font-weight: bold;
  font-size: 28px;
  text-align: left;
`;
