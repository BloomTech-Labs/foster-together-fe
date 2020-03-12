import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

WebFont.load({
  google: {
    families: ['Roboto'],
  },
})

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  * {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  address,
  ol,
  ul,
  li,
  form,
  label,
  table,
  caption {
    font-size: 1.6rem;
}
`
