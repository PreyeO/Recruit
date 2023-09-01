import styled from "styled-components";

export const StyledProficiencyCard = styled.div<{ width?: string }>`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  border: 1px solid #f1f1f1;
  flex-direction: column;
  gap: 1rem;
  max-width: ${(props) => props.width};
  align-items: center;
`;

export const StyledSkillTitle = styled.h2<{ fontSize?: string }>`
  font-weight: bold;
  font-size: ${(props) => props.fontSize};;
  text-align: left;
`;
