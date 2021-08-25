import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: black;
        --secondary-color: #4285f4;
        --white-color: white;
        --disabled-color: gray;
        --error-color: red;
        --default-font-family: 'Open Sans Condensed';
        --icon-length: 40px; 
    }

    body {
        font-family: var(----default-font-family);
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
