import React from "react";
import { renderWithReduxAndRouter as render } from "../../../../utils/testHelpers/index";
import FullOverlay from "../Module3Container";
import TrainingThreeFour from "./module3-4";
import { Formik, Form } from "formik";
import TrainingThreethree from "./module3-3";
import TrainingThreeTwo from "./module3-2";
import TrainingThreeOne from "./module3-1";

const initialValues = {
  m3_q1: "",
  m3_q2: "",
  m3_q3: "",
  m3_q4: "",
  m3_q5: ""
};
test("Module 3 render", async () => {
  render(<FullOverlay />);
});

test("Module 3.4 renders", () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeFour {...props} />
        </Form>
      )}
    </Formik>
  );
});

test("Module 3.3 render", () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreethree {...props} />
        </Form>
      )}
    </Formik>
  );
});

test("Module 3.2 render", () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeTwo {...props} />
        </Form>
      )}
    </Formik>
  );
});

test("Module 3.1 render", () => {
  render(
    <Formik initialValues={initialValues}>
      {props => (
        <Form>
          <TrainingThreeOne {...props} />
        </Form>
      )}
    </Formik>
  );
});
