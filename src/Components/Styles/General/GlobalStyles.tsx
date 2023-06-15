import { createGlobalStyle } from "styled-components";

const GlobalStyles= createGlobalStyle `

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-styling:none;
  outline: 0;
  border: 0;
  text-decoration: none;

}

.body{
  width:100%;
  height:100vh;
}

section{
  padding-top:2rem;
}

.main_container{
  padding:1.5rem
}

`

export default GlobalStyles;