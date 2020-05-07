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
export const PageWrapper = styled.div`
  width: 80%;
  max-width: 1075px;
  margin: 75px auto;
  color: #343434;
`;

/* Base Title is the base style for all the module titles. */
const baseTitleStyle = css`
  font-size: 2.5rem;
  font-weight: normal;
`;

/* Main Title is for the main title of each specific sub-modules */
export const PageTitle = styled.h1`
  ${baseTitleStyle}
`;

/* Form Title is the title for the Form under the each module page */
export const FormTitle = styled.h2`
  ${baseTitleStyle}
`;

/* Back arrow button is for going back to the previous sub-module or previous module(if is at the begining of the current module) */
export const BackArrow = styled.div`
  position: relative;
  top: 25px;
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
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
  margin: 3% 0 3%;
`;

/* Next Button is for going to the next sub-module */
export const ContinueBtn = styled(Btn)`
  ${baseBtnStyle}
  width: 22rem;
`;

/* Submit button is for complete the current module then it will go to the next module */
export const SubmitBtn = styled(Btn)`
  ${baseBtnStyle}
  width: 24rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

/* Main section contains the main contents of the sub-module */
export const MainContent = styled.section`
  width: 100%;
  margin: 3% 0 1%;
`;

/* Text will be the universal font for all module texts. */
export const Text = styled.div`
  p {
    font-size: 2rem;
    font-weight: normal;
    line-height: 25px;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 2rem;
    font-weight: normal;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
  i {
    font-size: 2rem;
  }
  a {
    font-size: 2rem;
    color: #bababa;
    text-decoration: none;

    &:hover {
      color: #343434;
    }
  }
  li {
    font-size: 2rem;
    font-weight: bold;
`;

export const MediaWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  div {
    width: 49%;
  }
`;

export const Media = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Video = styled(Player)`
  margin: 0;
`;

/* Form Content wraps around all the form's contents inlucdes their title, inputs and so on. */
export const FormContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 7.5% 0 1%;
`;

export const FormInput = styled(Field)`
  width: 100%;
  font-size: 1.8rem;
  height: 16rem;
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;

export const FormLabel = styled.label`
  font-size: 2.4rem;
`;

export const ShortFormInput = styled(Field)`
  width: 100%;
  font-size: 1.8rem;
  height: 7rem;
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  margin: 40px 0 60px;
  font-size: 1.8rem;
  height: 16rem;
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`;

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
`;

export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #757575;
  height: 20px;
  width: 20px;
  background: ${(props) => (props.checked ? "#c4c4c4" : "#fff")};
  border-radius: ${(props) => (props.radio ? "100%" : 0)};
`;

/* ====================== End of the Style ====================== */
