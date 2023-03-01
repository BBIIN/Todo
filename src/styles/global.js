import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import bg from './bg.jpg';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        background: url(${bg}) no-repeat center;
        background-size: cover;
    }
    button {
        border: none;
    }
`;
export default GlobalStyles;
