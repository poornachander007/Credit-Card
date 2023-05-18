// Write your code here
import {useState} from 'react'
import {Container, Heading, Para, Input} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <Container main>
      <Container left>
        <Heading main>CREDIT CARD</Heading>
        <Container data-testid="creditCard" card>
          <Para>{cardNumber}</Para>
          <Para>CARDHOLDER NAME</Para>
          <Para>{name}</Para>
        </Container>
      </Container>
      <Container right>
        <Container inputContainer>
          <Heading>Payment Method</Heading>
          <Input
            placeholder="Card Number"
            onChange={onChangeNumber}
            type="text"
            value={cardNumber}
          />
          <Input
            placeholder="Cardholder Name"
            onChange={onChangeName}
            type="text"
            value={name}
          />
        </Container>
      </Container>
    </Container>
  )
}

export default CreditCard
