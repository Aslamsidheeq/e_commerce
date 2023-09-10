import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';


export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`

export const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
background-color: rgb(255, 255, 255);
border-radius: 50%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`