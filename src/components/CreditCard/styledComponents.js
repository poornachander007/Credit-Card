// Style your elements here
import styled, {createGlobalStyle} from 'styled-components'

const cardBgmUrl = 'https://assets.ccbp.in/frontend/hooks/credit-card-bg.png'

// Container, Heading, Para, Input

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    font-family: 'Roboto';
  }
  `

export const Container = styled.div`
  padding: ${props => (props.card || props.inputContainer ? '30px' : '0')};
  display: flex;
  flex-direction: ${props => (props.main ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  width: ${props => (props.card || props.inputContainer ? '80%' : '100%')};
  height: ${props => (props.left || props.right ? '100vh' : 'normal')};
  background-color: ${props => (props.left ? 'blue' : 'normal')};
  background-image: url(${props => (props.card ? cardBgmUrl : 'none')});
  border-radius: ${props =>
    props.card || props.inputContainer ? '20px' : 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${props =>
    props.card || props.inputContainer ? '2px 4px 0px 4px black' : 'none'};
`

export const Heading = styled.h1`
  text-decoration: ${props =>
    props.main ? 'underline yellow solid 5px' : 'none'};
  color: ${props => (props.main ? 'white' : 'blue')};
`

export const Para = styled.p``

export const Input = styled.input`
  outline: none;
  border: solid 1px black;
  border-radius: 5px;
  margin: 5px;
  padding: 8px;
`
