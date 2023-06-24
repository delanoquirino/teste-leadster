import { styled } from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 5px;
    list-style: none;

`

export const ItemList = styled.li`
        border: 1px solid black;
        padding: 0.3em 1em;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            color: var(--color-contrast);
            border-color: var(--color-contrast);;
        }
`