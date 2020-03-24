import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`
export const Text = styled.p`
  font-size: 2.4rem;
`

export const List = styled.ol`
  margin: 0;
  padding: 0 0 0 2.5rem;
`

export const BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 2.5rem;
`

export const SmallList = styled(BulletList)`
  padding: 0 0 0 9rem;
`

export const Step = styled.li`
  font-size: 2.4rem;
  margin: 50px 0;
  padding-left: 1.7rem;
  font-weight: bold;
  h3,
  p,
  span {
    font-size: 2.4rem;
  }
  p {
    margin: 0 0 30px;
    font-weight: normal;
  }
  span {
    font-weight: bold;
  }

  &:first-child {
    margin-top: 0;
  }
`

export const SmallStep = styled(Step)`
  margin: 25px 0;
  p,
  span {
    font-size: 2rem;
  }
`

export const FormGroup = styled.div`
  margin: 25px 0;
`

export const Label = styled.label`
  font-size: 2.4rem;
`

export const CheckLabel = styled.label`
  display: block;
  position: relative;
  font-size: 1.8rem;
  padding-left: 3.5rem;
  margin-top: 2rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`

export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #757575;
  height: 20px;
  width: 20px;
  background: ${props => (props.checked ? '#c4c4c4' : '#fff')};
  border-radius: ${props => (props.radio ? '100%' : 0)};
`
