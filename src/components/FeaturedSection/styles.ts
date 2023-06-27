import { styled } from "styled-components";

export const TfeaturedSection = styled.div`
  background-color: var(--bg-secondary);
`;
export const Container = styled.div`
  padding: 6em 0.5em;
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 15px;
    font-size: 12px;
    text-align: center;
    span {
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  p {
    display: inline-block;
    padding: 0.1em 0.7em;

    color: var(--color-contrast);
    border: 2px solid var(--color-contrast);
    border-radius: 10px 10px 10px 0px;

    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
  h2 {
    font-size: 50px;
    font-weight: 300;
    margin-top: 0.4em;
  }

  h1 {
    background: linear-gradient(to right, #2c83fb, #1f76f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 80px;
    margin-bottom: 10px;
    padding: 0 0.3em;
  }

  span {
    background: #1f76f0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    img {
      position: absolute;
      right: -8px;
      top: 16px;
    }

 
  }

  @media only screen and (max-width: 500px) {
     p {
        font-size: 14px;
     }

     h2 {
        font-size: 30px;
     }

     h1 {
        font-size: 60px;
     }

     span {
    
    img {
      right: -13px;
      top: 10px;
    }

 
  }

  

  }

  @media only screen and (max-width: 352px) {
     p {
        font-size: 12px;
     }

     h2 {
        font-size: 25px;
     }

     h1 {
        font-size: 45px;
     }

     span {
    
    img {
      right: -13px;
      top: 5px;
    }

 
  }

  

  }

`;
