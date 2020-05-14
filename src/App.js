import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { initGA, PageView } from "./utils/analytics";
import { PrivateRouteAdmins, PrivateRouteUsers } from "./utils/customRoutes";
import { login } from "./redux/thunks/authThunks";
import LoginForm from "./components/logInForm/LoginForm";
import SignUp from "./components/signUpForm/SignUpOverlay/SignUpOverlay";
import AdminDash from "./components/AdminDash/AdminDashboard";
import Profile from "./components/AdminDash/Profile/Profile";
import Application from "./components/signUpForm/Application/Application";
import ModuleStart from "./components/Training/module-0/trainingLetter";
import ModuleStart2 from "./components/Training/module-0/trainingLetter2.js";
import ModuleOne from "./components/Training/module-1/Module1Container";
import Module2_1 from "./components/Training/module-2/components/module2-1";
import Module2_2 from "./components/Training/module-2/components/module2-2";
import Module2_3 from "./components/Training/module-2/components/module2-3";
import Module3_1 from "./components/Training/module-3/components/module3-1";
import Module3_2 from "./components/Training/module-3/components/module3-2";
import Module3_3 from "./components/Training/module-3/components/module3-3";
import Module3_4 from "./components/Training/module-3/components/module3-4";
import Module4_1 from "./components/Training/module-4/components/module4-1";
import Module4_2 from "./components/Training/module-4/components/module4-2";
import Module4_3 from "./components/Training/module-4/components/module4-3";
import Module4_4 from "./components/Training/module-4/components/module4-4";
import Module5 from "./components/Training/module-5/components/module5";
import UserProfile from "./components/AdminDash/Profile/User/UserProfile";
import Map from "./components/AdminDash/Map/MapOverlay";

function App() {
  useEffect(() => {
    initGA("UA-159166357-1");
    PageView();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route path="/application" component={Application} />

        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/signup" component={SignUp} />
        <PrivateRouteAdmins exact path="/dashboard" component={AdminDash} />
        <PrivateRouteAdmins exact path="/map" component={Map} />
        <PrivateRouteUsers path="/:membertype/:id" component={Profile} />
        <PrivateRouteUsers path="/training-start" component={ModuleStart} />
        <PrivateRouteUsers path="/training-start-2" component={ModuleStart2} />
        <PrivateRouteUsers path="/module1" component={ModuleOne} />
        <PrivateRouteUsers path="/module2-1" component={Module2_1} />
        <PrivateRouteUsers path="/module2-2" component={Module2_2} />
        <PrivateRouteUsers path="/module2-3" component={Module2_3} />
        <PrivateRouteUsers path="/module3-1" component={Module3_1} />
        <PrivateRouteUsers path="/module3-2" component={Module3_2} />
        <PrivateRouteUsers path="/module3-3" component={Module3_3} />
        <PrivateRouteUsers path="/module3-4" component={Module3_4} />
        <PrivateRouteUsers path="/module4-1" component={Module4_1} />
        <PrivateRouteUsers path="/module4-2" component={Module4_2} />
        <PrivateRouteUsers path="/module4-3" component={Module4_3} />
        <PrivateRouteUsers path="/module4-4" component={Module4_4} />
        <PrivateRouteUsers path="/module5" component={Module5} />
        <PrivateRouteUsers path="/userProfile" component={UserProfile} />
      </ThemeProvider>
    </>
  );
}
export default App;
