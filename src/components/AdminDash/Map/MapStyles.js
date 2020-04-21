import styled from "styled-components";

/*
=== FilterDiv (old) ===
position: relative;
  left: 43px;
  top: 34px;
*/

export const FilterDiv = styled.div`
  width: 240px;
  height: 960px;
  margin-left: 43px;
  background-color: F9F9F9;
  font-family: "Roboto";
`;

export const MapContain = styled.div`
  height: 100vh;
  width: 90vw;
  background-color: black;
`;

export const PageContain = styled.div`
  display: flex;
`;

/* === Below is for Personinfo component === */
export const InfoDiv = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: F9F9F9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2%;
  padding-top: 1%;
`;
export const UserName = styled.div`
  font-size: 5rem;
  padding-top: 2%;
  text-align: center;
`;

export const IconContain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2rem;
  margin: 0px 0px 20px 6px;
  width: 100%;
`;

export const InfoText = styled.p`
  margin: 0px 0px 20px 6px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
/* === Above is for the PersonInfo component ===*/

export const Buttons = styled.button`
  width: 16px;
  height: 16px;
  margin-top: 1%;
  background: white;
  border: none;
  font-size: 1.4rem;
  color: ${props => (props.selected === props.current ? "black" : "white")};
  border: 2px solid black;
  border-radius: 50%;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  margin-top: 1vh;
`;

export const Header = styled.h1`
  font-size: 1.6rem;
  margin: 0;
  padding-left: 6px;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export const HeaderHolder = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  margin-bottom: 1.6%;
  height: 5%;
  font-size: 2rem;
`;
export const ButtonContain = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const Label = styled.h1`
  font-size: 2.2rem;
  margin-left: 10%;
`;

export const SmallIcon = styled.img`
  width: 20px;
  position: relative;
  top: -20px;
`;
