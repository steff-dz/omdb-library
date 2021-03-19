import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
}

*::-webkit-scrollbar{
    width: 5px;
}

*::-webkit-scrollbar-thumb{
    background-color: #9c9a9a;
    border-radius: 20px;
    border: transparent;
}


html {
    font-size: 20px;
}

body  {
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.pageBackground}

}

`

export default GlobalStyle
