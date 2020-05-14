import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";

import {
  FormContent,
  FormLabel,
  FormInput,
  ButtonWrapper,
  SubmitBtn,
  CheckLabel,
  Checkbox
} from "../../GlobalTraining.styles";
import { ModuleTwoSchema3 } from "../../../../utils/yupSchemas";

const initialValues = {
  m2_q3: 0,
  m2_q4: false,
  answer_a1: false,
  answer_a2: false,
  answer_a3: false,
  answer_a4: false,
  answer_a5: false,
  answer_a6: false,
  answer_a7: false,
  answer_a8: false,
  answer_a9: false,
  answer_b: "",
  m2_q6: false,
  m2_q7: false,
  m2_q8: ""
};

const questionOneData = [
  "2 hours a month (minimum for monthly meal drop-off)",
  "5 hours a month",
  "2 hours a week",
  "5 hours a week",
  "One weekend every two months",
  "One weekend a month"
];

const QuestionFive = ({ setFieldValue, values }) => {
  const handleClick = value => {
    setFieldValue("m2_q7", value);
  };

  return (
    <FormLabel>
      Do you understand that Foster Together and the foster parents are here to
      help facilitate any needed background checks with the family's foster care
      agency or county, and that this process can take one to four weeks,
      depending on the requirements of the specific county or agency? *
      <CheckLabel onClick={() => setFieldValue("m2_q7", true)}>
        Yes
        <Checkbox radio checked={values.m2_q7} />
      </CheckLabel>
      <CheckLabel onClick={() => setFieldValue("m2_q7", false)}>
        No
        <Checkbox radio /* checked={!values.m2_q7} */ />
      </CheckLabel>
    </FormLabel>
  );
};

const Survey = props => {
  const { push } = useHistory();
  // onClick functions for setFieldValues

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ModuleTwoSchema3}
      onSubmit={() => {
        push("/module3");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <FormContent>
            <FormLabel>
              How much time do you want to spend helping a foster family? *
              {questionOneData.map((answer, index) => (
                <CheckLabel
                  key={index}
                  onClick={() => {
                    setFieldValue("m2_q3", index + 1);
                  }}
                >
                  {answer}
                  <Checkbox radio checked={values.m2_q3 === index + 1} />
                </CheckLabel>
              ))}
            </FormLabel>

            <FormLabel>
              Do you understand that the decision to add additional meals or
              helping tasks is at the discretion of you and the foster family? *
              <CheckLabel onClick={() => setFieldValue("m2_q4", true)}>
                Yes, I understand that adding additional meal and helping tasks
                would be at the discretion of me and the foster family.
                <Checkbox radio checked={values.m2_q4} />
              </CheckLabel>
              <CheckLabel onClick={() => setFieldValue("m2_q4", false)}>
                No.
                <Checkbox radio checked={!values.m2_q4} />
              </CheckLabel>
            </FormLabel>

            <FormLabel>
              As you get to know them, are you open to providing practical
              support to the foster family, beyond meals?
              <CheckLabel
                onClick={() => {
                  if (values.answer_a1 === false) {
                    setFieldValue("answer_a1", true);
                  } else {
                    setFieldValue("answer_a1", false);
                  }
                }}
              >
                Additional meal drop-offs monthly (option to have foster parent
                provide a gift card for groceries)
                <Checkbox checked={values.answer_a1} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a2 === false) {
                    setFieldValue("answer_a2", true);
                  } else {
                    setFieldValue("answer_a2", false);
                  }
                }}
              >
                Help around the house: Cleaning the kitchen
                <Checkbox checked={values.answer_a2} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a3 === false) {
                    setFieldValue("answer_a3", true);
                  } else {
                    setFieldValue("answer_a3", false);
                  }
                }}
              >
                Help around the house: Laundry
                <Checkbox checked={values.answer_a3} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a4 === false) {
                    setFieldValue("answer_a4", true);
                  } else {
                    setFieldValue("answer_a4", false);
                  }
                }}
              >
                Help around the house: Yardwork
                <Checkbox checked={values.answer_a4} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a5 === false) {
                    setFieldValue("answer_a5", true);
                  } else {
                    setFieldValue("answer_a5", false);
                  }
                }}
              >
                Help around the house: Sweeping/cleaning floors
                <Checkbox checked={values.answer_a5} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a6 === false) {
                    setFieldValue("answer_a6", true);
                  } else {
                    setFieldValue("answer_a6", false);
                  }
                }}
              >
                Driving kids to visits with parents, therapy, or school activity
                (Requires foster agency/county approval. Contact Hope for help
                with approval.)
                <Checkbox checked={values.answer_a6} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a7 === false) {
                    setFieldValue("answer_a7", true);
                  } else {
                    setFieldValue("answer_a7", false);
                  }
                }}
              >
                Babysitting under six hours (May require foster agency/county
                approval. Contact Hope for help with approval.)
                <Checkbox checked={values.answer_a7} />
              </CheckLabel>
              <CheckLabel
                onClick={() => {
                  if (values.answer_a8 === false) {
                    setFieldValue("answer_a8", true);
                  } else {
                    setFieldValue("answer_a8", false);
                  }
                }}
              >
                Respite for more than six hours or overnight (Requires
                CPA/county approval. Contact Hope for help with approval.)
                <Checkbox checked={values.answer_a8} />
              </CheckLabel>
            </FormLabel>

            <CheckLabel
              onClick={() => {
                if (values.answer_a9 === false) {
                  setFieldValue("answer_a9", true);
                } else {
                  setFieldValue("answer_a9", false);
                }
              }}
            >
              Other ways I'd like to help (if any)
              <Checkbox checked={values.answer_a9} />
            </CheckLabel>
            <FormLabel>
              <FormInput
                component="textarea"
                id="answer_b"
                name="answer_b"
                placeholder="Your answer here"
              />
            </FormLabel>

            <FormLabel>
              Do you understand that Foster Together and the foster parents are
              here to help facilitate any needed background checks with the
              family's foster care agency or county, and that this process can
              take one to four weeks, depending on the requirements of the
              specific county or agency? *
              <CheckLabel onClick={() => setFieldValue("m2_q6", true)}>
                Yes
                <Checkbox radio checked={values.m2_q6} />
              </CheckLabel>
              <CheckLabel onClick={() => setFieldValue("m2_q6", false)}>
                No
                <Checkbox radio checked={!values.m2_q6} />
              </CheckLabel>
            </FormLabel>
            <FormLabel>
              Do you understand that Foster Together and the foster parents are
              here to help facilitate any needed background checks with the
              family's foster care agency or county, and that this process can
              take one to four weeks, depending on the requirements of the
              specific county or agency? *
              <CheckLabel onClick={() => setFieldValue("m2_q7", true)}>
                Yes
                <Checkbox radio checked={values.m2_q7} />
              </CheckLabel>
              <CheckLabel onClick={() => setFieldValue("m2_q7", false)}>
                No
                <Checkbox radio checked={!values.m2_q7} />
              </CheckLabel>
            </FormLabel>

            <FormLabel>
              From what you’ve learned so far how can we improve the modules
              you’ve completed? What would you add, shorten, or eliminate? This
              program is always looking for ways to be better, so your feedback
              is definitely helpful!
              <FormInput
                component="textarea"
                id="m2_q8"
                name="m2_q8"
                placeholder="Your answer here"
              />
            </FormLabel>
            {errors.m2_q3 && touched.m2_q3 && (
              <p style={{ color: "red" }}>
                Please answer all required questions
              </p>
            )}
            <ButtonWrapper>
              <SubmitBtn type="submit">Complete Module 2</SubmitBtn>
            </ButtonWrapper>
          </FormContent>
        </Form>
      )}
    </Formik>
  );
};

export default Survey;
