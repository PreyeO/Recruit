import styled from "styled-components";


export const StyledAuthButtton = styled.button`
background: var(--primary-btn-color);
color:var(--primary-text-color);
padding:0.5rem;
width:20rem;
border-radius:0.5rem;
margin-top:1rem;

&:hover{
  background: var(--secondary-btn-color);
  cursor:pointer
}
`