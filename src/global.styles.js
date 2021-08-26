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
        margin: 0;
        padding: 10px 40px 20px 40px;
        font-family: 'Open Sans Condensed';

        @media screen and (max-width: 767px) {
            padding: 10px;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }
    
    a {
        text-decoration: none;
        color: black;
    }

    p {
        margin: 0.5em;
    }
    
    button {
        margin-top: auto;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
