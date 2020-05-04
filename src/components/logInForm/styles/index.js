import styled from "styled-components";
import { Form, Field } from "formik";
import { Flex, Btn } from "../../../GlobalStyles";

export const ContentBox = styled(Flex)`
  width: 70%;
  padding: 25px 120px;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled(Form)`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto 0;
`;

export const InputBox = styled(Flex)`
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  height: 5.6rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
`;

export const InputLabel = styled.div`
  font-size: 1.2rem;
  color: #545454;
  margin: 4px 10px;
`;

export const Submit = styled(Btn)`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  width: 14rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnContainer = styled(Flex)`
  margin-top: 80px;
  width: 100%;
  align-items: baseline;
`;

export const Button = styled(Flex)`
  justify-content: flex-end;
  width: 50%;
`;

export const Forgot = styled.h3`
  font-size: 16px;
  text-decoration-line: underline;
  color: #ff8d86;
  &:hover {
    cursor: pointer;
  }
`;

export const ForContainer = styled(Flex)`
  justify-content: flex-start;
  width: 50%;
`;
