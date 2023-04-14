import { createGlobalStyle } from 'styled-components';
import img from '../assets/bg.png'

export const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family :sans-serif;
}
body{
    background-image:url('${img}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    overflow-y:hidden;
}
`