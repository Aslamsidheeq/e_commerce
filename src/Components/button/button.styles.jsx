import  styled  from "styled-components";

export const BaseButton = styled.button`
min-width: 145px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

@media screen and (max-width:400px){
  width:80px;
}


&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`
export const GoogleSignInBtn = styled(BaseButton)`
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }`

export const InvertedBtn = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;
// line-height:normal;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
@media screen and (min-width:800px){
  line-height:normal;
}
`