import { createGlobalStyle } from 'styled-components'
import reset from './reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    color: ${(props) => (props.theme.colorMode === 'day' ? '#000' : '#fff')};
    background-color: ${(props) =>
      props.theme.colorMode === 'day' ? '#fff' : '#000'};
    font-family: ${(props) => props.theme.fontFamily};
  }
`
export default GlobalStyle
