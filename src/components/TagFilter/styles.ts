import { styled } from "styled-components";

interface TagButtonProps {
  isActive: boolean;
}

export const List = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  flex-wrap: wrap;
`;

export const ItemList = styled.li`
  
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

export const TagButton = styled.button<TagButtonProps>`
  cursor: pointer;
    border: 1px solid black;
    border-radius: 20px;
    padding: 0.5em 0.5em;
    background-color: ${({ isActive }) => (isActive ? "var(--color-contrast)" : "transparent")};
    border-color: ${({ isActive }) => (isActive ? "var(--color-contrast)" : "black")};
    color: ${({ isActive }) => (isActive ? "white" : "black")};

  &:hover {
    color: ${({ isActive }) => (isActive ? "white" : "var(--color-contrast)")};
    border-color: var(--color-contrast);
  }

`;