import styled from 'styled-components';

export const Limited = styled.div`
background-color:rgb(239, 239, 239);
margin:.5vw;
display:flex;
justify-content:center;
align-items:center;
.timeCount{
  text-align: center;
  animation: blink-animation 1s steps(3, start) infinite;
}
@keyframes blink-animation {
  to { visibility: hidden; }
}
`
export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width:800px){
    width:100%;
    display: flex;
    flex-direction: column;
    margin: 0px;
    float: left;
  }
  `;

