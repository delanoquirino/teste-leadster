
import { createGlobalStyle } from 'styled-components';

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
    }

`;

export default GlobalStyle;