import styled from "styled-components";

/* =============================================================================================================== */
/* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ Below is for Map Page Component ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
/* =============================================================================================================== */
export const PageContain = styled.div`
  display: flex;
`;
/* =============================================================================================================== */
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Above is for Map Page Component ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
/* =============================================================================================================== */

/* ========================================================================================================== */
/* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ Below is for Map component ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
/* ========================================================================================================== */
export const MapContain = styled.div`
  height: 92.5vh;
  width: 70vw;
  background-color: black;
`;
/* ========================================================================================================== */
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Above is for Map component ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
/* ========================================================================================================== */

/* ================================================================================================================ */
/* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ Below is for MapFilter component ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
/* ================================================================================================================ */
export const FilterDiv = styled.div`
  width: 15vw;
  height: 92.5vh;
  padding: 3vh 0.5vw 0 3vw;
  background-color: #f9f9f9;
  color: #375762;
`;

export const Buttons = styled.button`
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.selected === props.current ? "#375762" : "white"};
  border: none;
  font-size: 1.4rem;
  border: 1.5px solid #bdbdbd;
  border-radius: 50%;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
`;

export const Header = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #757575;
`;

export const Label = styled.p`
  font-size: 1.3rem;
  margin-left: 6px;
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
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
  width: 100%;
`;

export const SmallIcon = styled.img`
  width: 20px;
  position: relative;
  top: -20px;
`;

export const FilterInput = styled.input`
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: absolute;
  z-index: 1;
  left: 340px;
  border: 1px solid #3a6e79;
  border-radius: 3px;
  background-color: #fff;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 280px;
`;
/* ================================================================================================================ */
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Above is for MapFilter component ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
/* ================================================================================================================ */

/* ================================================================================================================= */
/* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ Below is for Personinfo component ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
/* ================================================================================================================= */
export const InfoContainer = styled.div`
  background-color: #f9f9f9;
  width: 15vw;
  height: 92.5vh;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoDiv = styled.div`
  padding: 7.5vh 2vw;
  white-space: nowrap;
  overflow: auto;
`;

export const UserName = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 2%;
  color: #676767;
`;

export const InfoType = styled.p`
  font-size: 1.2rem;
  font-weigth: normal;
  color: #676767;
  padding: 0;
  margin: 0;
`;

export const IconContain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px 0px 20px 0px;
`;

export const SubInfoContainer = styled.div`
  margin: 9vh 0;
`;

export const InfoText = styled.p`
  margin: 0px 0px 20px 9px;
  color: #676767;
  font-size: 1.2rem;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

/* ===================================================================================================================== */
/* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Above is for the PersonInfo component ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
/* ===================================================================================================================== */
