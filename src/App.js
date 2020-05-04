import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { initGA, PageView } from "./utils/analytics";
import { PrivateRoute } from "./utils/customRoutes";
import LoginForm from "./components/logInForm/LoginForm";
import SignUp from "./components/signUpForm/SignUpOverlay/SignUpOverlay";
import AdminDash from "./components/AdminDash/AdminDashboard";
import Profile from "./components/AdminDash/Profile/Profile";
import Application from "./components/signUpForm/Application/Application";
import ModuleStart from "./components/Training/module-0/trainingLetter";
import ModuleStart2 from "./components/Training/module-0/trainingLetter2.js";
import Module11 from "./components/Training/module-1/components/module1-1";
import ModuleTwo from "./components/Training/module-2/Module2Container.js";
import ModuleThree from "./components/Training/module-3/Module3Container.js";
import ModuleFour from "./components/Training/module-4/Module4Container.js";
import ModuleFive from "./components/Training/module-5/components/module5-1";
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
        {/* <Route path="/training" component={Training} /> */}
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={AdminDash} />
        <Route exact path="/map" component={Map} />
        <PrivateRoute path="/:membertype/:id" component={Profile} />
        <Route path="/training-start" component={ModuleStart} />
        <Route path="/training-start-2" component={ModuleStart2} />
        <Route path="/module1" component={Module11} />
        <Route path="/module2" component={ModuleTwo} />
        <Route path="/module3" component={ModuleThree} />
        <Route path="/module4" component={ModuleFour} />
        <Route path="/module5" component={ModuleFive} />
        <Route path="/userProfile" component={UserProfile} />
      </ThemeProvider>
    </>
  );
}
export default App;
