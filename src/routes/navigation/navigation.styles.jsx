import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width:800px){
      height:60px;
      padding:10px 20px;
      margin-bottom:20px;
    }
`
export const LogoContainer = styled(Link)`
      height: 100%;
      width: 100px;
      padding: 8px;
      display: block;
      text-decoration: none;
      background-color: #f7f7f7;
      color: #a7a7a7;
      margin: 6px;
      width: 64px;
      height: 64px;
      position: relative;
      text-align: center;
      line-height: 34px;
      border-radius: 50%;
      box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
      border: solid 1px transparent;
      @media screen and (max-width:800px){
            width:55px;
            height:50px;
            padding:0;
      }
`
export const NavLinks = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width:800px){
            width:80% auto;
      }
`
export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
        background-color:grey;
        border-radius:50px;
        margin:5px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        `