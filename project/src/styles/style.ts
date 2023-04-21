import styled from "styled-components"

interface StyledProps {
  fontSize?: string;
  padding?: string,
}


export const Nav = styled.nav`
  width: 100%;
  height: 45px;
  background-color: #c9a1c9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  

 
`
export const Footer = styled.footer`
    width: 100%;
    height: 150px;
    background: rgb(227,184,227);
    background: linear-gradient(0deg, rgba(227,184,227,1) 19%, rgba(201,161,201,1) 59%);
    display: flex;
    justify-content: center;
    align-items: center;
 
`
export const Ul = styled.ul`
  display: flex;
  margin-right: 30px;
  text-align: center;
  margin-top: 5px;

   
`

export const Li = styled.li`
  list-style: none;
  padding: 0 1rem;
  color: #fff;
  font-family: sans-serif;

`

export const Body = styled.body`
 
`

export const Title = styled.h1<StyledProps>`
  color: ${props => props.color ?? '#000'};
  font-size: ${props => props.fontSize };
  font-family: sans-serif;
  text-align: center;
  padding: ${props => props.padding  };
  
  
`
 
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
   
`
export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
`
export const Button = styled.button`
    width: 60px;
    height: 60px;
    background-color: #9B5774;
    color: #fff;
    font-size: 2rem;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    
    &:hover{
      background-color: #fff;
      color: #9B5774;
      border: 2px solid #9B5774;
    }

`

export const Paragrafo = styled.p<StyledProps>`
 color: #fff;
 font-size: ${props => props.fontSize };
 font-family: Arial, Helvetica, sans-serif;
`

export const Infos = styled.div`
background-color: #9B5774;
border-radius: 8px;
padding: .5rem;
margin-top: 20%;
`