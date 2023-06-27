import Image from "next/image";
import { styled } from "styled-components";

export const SDemonstrationSection = styled.div`
  background-color: var(--bg-secondary);
`;

export const Container = styled.div`
  padding: 6em 0.5em;
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5em;

  @media only screen and (max-width: 680px) {
      flex-direction:column
     }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const ContainerImage = styled.div`
  flex: 1;
`;
export const SImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Text = styled.div`
  h1 {
    font-weight: 300;
    span {
      font-weight: bold;
    }
  }
  p {
    margin-top: 0.1em;
  }
`;
export const ButtonDemonstration = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  

  button {
    background-color: var(--color-contrast);
    color: var(--bg-primary);
    cursor: pointer;
    padding: 1.5em 2em;
    border-radius: 30px;
    border: 1px solid var(--color-contrast);
    text-transform: uppercase;
    font-weight: bold;
    transition: all .2s linear;

    &:hover {
   
        color: var(--color-contrast);
        background-color: transparent;
        border: 1px solid var(--color-contrast);
    }

    @media only screen and (max-width: 880px) {
      padding: 1em;    
      font-size: 10px;
     }
 
}

`;
export const Rating = styled.div`
  display: flex;
  gap: 10px;
`;
export const TextCard = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;
export const TextRating = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  border-left: 1px solid var(--color-border);
  padding-left: 1em;
  font-size: 12px;
`;
