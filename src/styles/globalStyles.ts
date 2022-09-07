import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
    }
    :root{
        --font-primary: 'Lato', sans-serif;
        --font-segundary:'Lilita One', 'cursive';
        --color--red: #F43127; 
        --color-white: #ffffff;
        --color-opaque-brown: rgba(29, 6, 5, 0.69);
        --color-dark-brown: #1D0605;
        --color-brown: #3B200B;
        --color-orange: #F59A1B;
        --color-brown--h: #34201f;
        --color-brown--ligth: #635352;
    }
`;
