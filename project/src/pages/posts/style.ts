import styled from "styled-components"
import imagem from "../../assets/imgs/fundo.jpg"

export const Div = styled.div`
background-image: url(${imagem.src});
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;

 
`
interface StyledProps {
  fontSize?: string;
  padding?: string,
}



export const Left = styled.div`
  width: 70%;
  display:flex;
  justify-content: center;
  align-items: center;
 

`

export const DivLeft = styled.div`
  height:650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 
`;

export const Right = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(227,184,227);
  background: linear-gradient(0deg, rgba(227,184,227,1) 19%, rgba(142,96,142,1) 59%);
`;
export const Img = styled.img`
  width: 60%;
  height: 200px;
  margin-bottom: 20px;
  margin-top: 50px;
  border: 3px solid #8e608e;
  border-radius: 8px;;
`
export const P = styled.p`
  font-size: .8rem;
  padding: 2rem;
  text-shadow: 0 0 15px #fff;
  
  text-align: center;
  color: ${props => (props.color)};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const TitleH2 = styled.h2<StyledProps>`
  font-size: ${props => props.fontSize };
  font-family: Arial, Helvetica, sans-serif;
  text-align:center
  
`;

