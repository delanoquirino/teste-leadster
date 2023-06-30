import { styled } from "styled-components";
import Image from "next/image";
import { Pagination } from "antd";

export const SCards = styled.ul`
    margin: 5em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media only screen and (max-width: 680px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
   
 
  }
    
`
export const ItemCard = styled.li`
    
    border-radius: 20px;
    box-shadow: 8px 8px 10px #cfcfcf;
    list-style: none;

    button {
      width: 100%;
      border: none;
      cursor: pointer;
      border-radius: 20px;
      background-color: var(--bg-primary);

      &:hover {
        color: var(--color-contrast);
        
      }
    }
 
    
`
export const Description = styled.div`
        padding: 1em;
    
`

export const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
   
`;

export const VideoCard = styled.video`
    border-radius: 20px;
    
    
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SPagination = styled(Pagination)`
 
    margin-top: 2em;
    display: flex;
    justify-content: center;
    
`