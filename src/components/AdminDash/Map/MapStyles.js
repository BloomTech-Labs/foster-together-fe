import styled from 'styled-components'

export const FilterDiv = styled.div`
width: 20vw;
height: 100vh;
background-color: F9F9F9;
`

export const MapContain = styled.div`
height: 100vh;
width: 60vw;
background-color: black;
`

export const PageContain = styled.div`
display: flex;
`

export const InfoDiv = styled.div`
width: 20vw;
height: 100vh;
background-color: F9F9F9;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 2%;
padding-top: 1%;
`
export const UserName = styled.div`
font-size:5rem;
padding-top: 2%;
text-align: center;
`

export const IconContain = styled.div`
display: flex; 
align-items: flex-start;
justify-content: flex-start;
font-size: 1.2rem;
width: 100%
`

export const Icon = styled.img`
padding: 5px;
height: 50px;
`

export const Buttons = styled.button`
width: auto;
height: auto;
margin-top: 1%;
background: white;
border: none;
font-size: 3rem;
color: ${props => props.selected === props.current ? "black" : "white"};
border: 1px solid black;

`

export const ButtonHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1vh;
`

export const Header = styled.h1`
font-size: 3rem;
margin: 0;
`

export const Image = styled.img`
width: 20%;
`

export const HeaderHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

export const Input = styled.input`
width: 80%;
margin-bottom: 1.6%;
height: 5%;
font-size: 2rem;
`
export const ButtonContain = styled.div`
display: flex;
align-items: center;
width: 40%;
`

export const Label = styled.h1`
font-size: 2.2rem;
margin-left: 10%;

`

export const SmallIcon = styled.img`
width: 20px;
position: relative;
top: -20px;
`