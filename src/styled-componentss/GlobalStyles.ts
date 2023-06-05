import backgroundImage from '../assets/background-mobile.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{ margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }
    html{
    font-size: 10px;
    }
    body{
        background-image: url(${backgroundImage});
        font-family: 'Poppins';
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8.8rem 2.4rem;
        color: white;    
    }
`;


export default GlobalStyles;