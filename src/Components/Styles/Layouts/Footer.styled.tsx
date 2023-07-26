import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: black;
  color: white;
  .first_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 3rem;
    margin-top: 1rem;
  }
  .footer_btn {
    flex-direction: column;
  }
  .horizontal_line {
    width: 100%;
    height: 1px;
    bottom: -0.5px;
    background: #8e9faa;
  }
  .footer_links {
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
    align-items: center;
  }
  .footer_logo {
    flex-direction: column;
  }
  p {
    width: 20rem;
    padding-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
