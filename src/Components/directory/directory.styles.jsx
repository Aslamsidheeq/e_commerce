import styled from 'styled-components';

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

