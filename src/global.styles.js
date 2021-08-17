import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;

        @media screen and (max-width: 767px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    button {
        margin-top: auto;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
