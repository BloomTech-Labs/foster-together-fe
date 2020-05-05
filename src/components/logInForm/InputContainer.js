import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  InputBox,
  InputContainer,
  InputLabel,
  Submit,
  BtnContainer,
  Button,
  Forgot,
  ForContainer,
} from "./styles";
import { Event } from "../../utils/analytics/index";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/thunks/authThunks";

/* Below is loading */
import Loading from "../Loading/Loading";
/* Above is loading */

const EmailInput = () => {
  return (
    <InputBox>
      <Input required id="email" placeholder="Email" name="email" autoFocus />
      <InputLabel>Enter your email here</InputLabel>
    </InputBox>
  );
};

const PasswordInput = () => {
  return (
    <InputBox>
      <Input
        required
        placeholder="Password"
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <InputLabel>Enter your password here</InputLabel>
    </InputBox>
  );
};

const ForgotPass = () => {
  return (
    <ForContainer>
      <Forgot>I forgot my password</Forgot>
    </ForContainer>
  );
};

const SubmitBtn = () => {
  /* const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  if (loading) return <Loading />; */

  return (
    <Button>
      {
        <Submit
          type="submit"
          onClick={() => {
            Event("Login", "Tried to login", "submit");
            /* setLoading(true);
            setTimeout(() => {
              setLoading(false);
              push("/dashboard");
            }, 3000); */
          }}
        >
          Submit
        </Submit>
      }
    </Button>
  );
};

const Buttons = () => {
  return (
    <BtnContainer>
      <ForgotPass />
      <SubmitBtn />
    </BtnContainer>
  );
};

const LoginInputs = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => dispatch(login(values, push))}
    >
      <InputContainer>
        <EmailInput />
        <PasswordInput />
        <Buttons />
      </InputContainer>
    </Formik>
  );
};
export default LoginInputs;
