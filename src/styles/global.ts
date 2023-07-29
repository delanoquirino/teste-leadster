"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --bg-primary: #FFFFFF;
        --bg-secondary: #F0F8FF;
        --color-contrast: #2c83fb;
        --color-border: #dce0e3;
        --text-color:#abaeb0;
        --text-bold:#000;
        --link-hover:#0dcaf0;
    }
   
     h1{
            font-size: 2.25rem;
            
        }

        h2 {
            font-size: 1.5rem ;
        }

        p {
            font-size: 1rem ;
        }

        span {

        }

        a {

        }

        @media screen and (min-width: 768px) {
            h1{
            font-size: 3.75rem;
            }

            h2 {
            font-size: 2.25rem;
            }

            p {
            font-size: 1.25rem;
            }
        }
        @media  screen and (min-width: 640px) {
            h1{
            font-size: 3rem;
            }

            h2 {
            font-size: 1.875rem;
            }

            p {
            font-size: 0.875rem;
            }
        }
        
    
    
`;

export default GlobalStyle;
