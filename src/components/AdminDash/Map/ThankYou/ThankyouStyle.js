import styled, { keyframes } from 'styled-components';
import { rotateInDownRight } from 'react-animations';

const bounceAnimation = keyframes`${rotateInDownRight}`;



export const Video = styled.video`
position: fixed;
top: 50%;
left: 50%;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: -1;
transform: translateX(-50%) translateY(-50%);
`
export const Card = styled.div`
height: 35vh;
width: 15vw;
display: flex; 
flex-direction: column;
background: black;
animation: 4s ${bounceAnimation}
`

export const ImageContain = styled.div`
height: 85vh;
display: flex;
align-items: flex-end;
`
export const Page = styled.div`
height: 100%;
width: 100%;
display: flex; 
justify-content: space-evenly;
align-items: flex-end;
`

export const Header = styled.h1`
font-size: 9rem;
text-align: center;
color: purple;
margin: 0;
`

export const Image = styled.img`
width: 100%;
`
export const Name = styled.h1`
font-size: 3rem;
margin: 0;
text-align: center;
color: blue;
`