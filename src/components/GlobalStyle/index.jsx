import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html {
    font-size: 20px;
}

body  {
    font-family: sans-serif;
    height: 100%;
    width: 100%;

}

`

export default GlobalStyle
