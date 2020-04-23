import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, TabContainer, Tab } from "../style";
import { ContentBox } from "./styles";
import { useSelector } from "react-redux";
import LoginInputs from "./InputContainer";
import LoginSideBar from "./LoginSideBar";

const LoginForm = () => {
  const { push } = useHistory();
  const { userType } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      if (userType === "admins") {
        push("/dashboard");
      } else if (userType === "families" || userType === "neighbors") {
        push("/userProfile");
      }
    }, 3000);
  }, [userType, push]);

  return (
    <Container>
      <LoginSideBar />
      <ContentBox>
        <TabContainer>
          <Tab active>
            <span>Log In</span>
          </Tab>
          <Tab onClick={() => push("/signup")}>
            <span>Register</span>
          </Tab>
        </TabContainer>
        <LoginInputs />
      </ContentBox>
    </Container>
  );
};

export default LoginForm;
