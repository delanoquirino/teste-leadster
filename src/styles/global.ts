"use client"

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

        body {
            @media only screen and (max-width: 880px) {
                font-size: 70%;
            }
        }
    
`;

export default GlobalStyle;
