 
import { createGlobalStyle } from "styled-components";
import imagem from "../assets/imgs/fundo.jpg"
const GlobalStyle =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
   
   
  }

  body{
    background:url(${imagem.src});
    width: 100%;
    min-height: 100vh;
    overflow:hidden
  }

 

`;



export default GlobalStyle;