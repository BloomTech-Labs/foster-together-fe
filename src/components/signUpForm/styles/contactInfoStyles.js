import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : '100%')};
  margin-bottom: 20px;
`

export const Input = styled.input`
  height: 5.6rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
`

export const Label = styled.label`
  font-size: 1.2rem;
  color: #545454;
  margin: 4px 10px;
`

export const FirstName = styled.div``
