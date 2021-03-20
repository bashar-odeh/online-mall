import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
      &::-webkit-scrollbar-thumb{
background-color:#ff324d;         border-radius:1rem;

   } 

&::-webkit-scrollbar-track{
background:white;           

 }
  
@media(min-width:1920px){
    font-size:24px;
}@media(max-width:768px){
    font-size:10px;
}
}
body{
    font-family: 'Poppins', sans-serif; 
}
h1,h2,h3{
    color:#292b2c;
}
`;
export default GlobalStyle;
