import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  flex-wrap: wrap;

`;

export const ItemList = styled.li`
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 0.5em;
  
  &:hover {
    color: var(--color-contrast);
    border-color: var(--color-contrast);
  }
  
 

`;


/*@media only screen and (max-width: 880px) {
    flex-direction: column;
    gap: 20px;

  }*/