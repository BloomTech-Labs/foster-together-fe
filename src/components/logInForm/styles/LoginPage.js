import styled from 'styled-components'

export const ContentBox = styled.div`
  width: 70%;
  padding: 25px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputContainer = styled.form`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto 0;
`

export const InputBox = styled.div`
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

export const InputLabel = styled.div`
  font-size: 1.2rem;
  color: #545454;
  margin: 4px 10px;
`

export const Submit = styled.button`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  height: 5.6rem;
  width: 14rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 80px;
  width: 100%;
  align-items: baseline;
`

export const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

export const Forgot = styled.h3`
  font-size: 16px;
  text-decoration-line: underline;
  color: #ff8d86;
`

export const ForContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`
