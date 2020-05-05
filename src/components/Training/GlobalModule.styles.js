/* Required dependencies importing */
import styled, { css } from "styled-components";
import Player from "react-player";
import { Field } from "formik";

/* Assets importing */
import backArrow from "../../images/icons/back-arrow.svg";

/* Borrow style from global style */
import { Btn, Flex } from "../../GlobalStyles";

/* ====================== Start of the Style ====================== */

/* Wrapper Container is for wrapping around all the contents */
export const Wrapper = styled.div`
  width: 80%;
  max-width: 1075px;
  margin: 75px auto;
  color: #343434;
`;

/* Main Title is for the main title of each specific sub-modules */
export const PageTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
`;

/* Form Title is the title for the Form under the each module page */
export const FormTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
`;

/* Back arrow button is for going back to the previous sub-module or previous module(if is at the begining of the current module) */
export const BackArrow = styled.div`
  position: relative;
  top: 30px;
  left: -45px;
  height: 24px;
  width: 27px;
  background-image: url(${backArrow});

  &:hover {
    cursor: pointer;
  }
`;

/* Base Button style is base style for both next button and submit button */
const baseBtnStyle = css`
  align-self: center;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  margin: 5%;
`;

/* Next Button is for going to the next sub-module */
export const NextBtn = styled(Btn)`
  ${baseBtnStyle}
  width: 22rem;
`;

/* Submit button is for complete the current module then it will go to the next module */
export const SubmitBtn = styled(Btn)`
  ${baseBtnStyle}
  width: 24rem;
`;

/* Main section contains the main contents of the sub-module */
export const MainContent = styled.section`
  width: 100%;
  margin: 3% 0 1%;
`;

/*  */
export const FormContent = styled.section`
  width: 100%;
  margin: 1% 0 3%;
`;

/* ====================== End of the Style ====================== */
