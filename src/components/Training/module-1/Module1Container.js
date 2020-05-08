import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../TrainingNav/NavBar";
import Module11 from "./components/module1";

const ModuleOne = () => {
  const { push } = useHistory();
  let query = useQuery();
  let page = parseInt(query.get("page")) - 1;
  let defaultStep = 0;
  if (page !== null && page < 4) {
    defaultStep = page;
  }
  const [activeStep, setActiveStep] = useState(defaultStep);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (activeStep === 0) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      push("/module2");
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      push("/training-start");
    } else if (activeStep === 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <>
      <NavBar title="One: Why help a foster family" />
      {activeStep === 0 ? (
        <Module11 handleNext={handleNext} handleBack={handleBack} />
      ) : activeStep === 1 ? (
        <Module11 handleNext={handleNext} handleBack={handleBack} />
      ) : null}
    </>
  );
};

export default ModuleOne;
