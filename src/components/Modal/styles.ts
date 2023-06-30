import { styled } from "styled-components";

interface ButtonProps {
    background: string;
    color: string
  }

export const BgModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;

`
export const ContainerModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: var(--bg-primary);
    border-radius: 10px;
    border-top: 10px solid var(--color-contrast);
    
    @media only screen and (max-width: 890px) {
        width:100%;
        
  }
`

export const ModalTitle = styled.div`
    font-size: 18px;
    padding: 1em 5em;
    position: relative;
    span {
        display: inline;
        color: var(--color-contrast);
    }

    @media only screen and (max-width: 1050px) {
        padding: 1em 2.5em;
  }

`

export const ModalVideo = styled.div`
    width: 100%;

    iframe {
        width: 100%;
        height: 350px;

        @media only screen and (max-width: 890px) {
            height: 250px;
  }
    }


`


export const ModalDescription = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
   
    padding: 2em;


    
`
export const ButtonStyle = styled.button<ButtonProps>`
        font-size: 14px;
        font-weight: 400;
        margin: 0.8em 0.5em 0 0;
        color: ${props => props.color} ;
        padding: 0.3em 0.5em;
        border-radius: 5px;
        border: none;
        background: ${props => props.background};
        cursor: pointer;
      
        &:hover {
            filter: brightness(105%);
        }
      
    
`
export const ModalClose = styled.button`
    position: absolute;
    top: 15%;
    right: 1%;
   
    background-color: transparent;
    cursor: pointer;
    border: none;
        svg {
            color: black;
            width: 20px;
            height: 20px;
        }

        
`