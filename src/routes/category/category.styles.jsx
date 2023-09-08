import styled from 'styled-components';

export const CategoryContainer = styled.h2`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    @media screen and (max-width:800px){
    grid-template-columns: repeat(2, 1fr);
    margin-left:4vw;
    }
    @media screen and (max-width:400px){
      grid-template-columns:1fr;
      grid-row-gap:25px;
      margin-left:10vw;
    }
    `
  
  export const CategoryTitle = styled.div`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
    `
  