import WebFont from 'webfontloader'
import styled, { createGlobalStyle } from 'styled-components'
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
    max-width: 100%;
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

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`
