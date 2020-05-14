import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { ModuleThreeSchema2 } from "../../../../utils/yupSchemas/index.js";

import {
  PageWrapper,
  PageTitle,
  MainContent,
  Text,
  BackArrow,
  MediaWrapper,
  Media,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonWrapper,
  ContinueBtn
} from "../../GlobalTraining.styles.js";

export const Module32 = () => {
  const handleBack = () => {
    push("/module3-1");
  };
  const { push } = useHistory();

  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow onClick={handleBack} />
        What makes a great foster family helper?
      </PageTitle>

      <MainContent>
        <Text>
          <MediaWrapper>
            <div>
              <p>
                We love our Family Helpers! They are usually{" "}
                <span>
                  self-starters who aren’t afraid to take initiative and want
                  their relationships to be meaningful and helpful to those who
                  need them most.
                </span>
              </p>
              <p>
                Other than that, this opportunity is completely customized to
                you. For example:
              </p>
              <ul>
                <li>
                  <p>
                    She might be able to double her grocery budget and pull out
                    all the stops in her meal deliveries, dropping off five or
                    six freezer meals in a month, or she might be able to afford
                    one meal drop-off a month.
                  </p>
                </li>
                <li>
                  <p>He might work full time or be a busy stay at home dad.</p>
                </li>
                <li>
                  <p>
                    The family might love to meet for play dates or expand their
                    “helping” to include what you need, or they might want to
                    keep it simple, and continue with meal drop-offs
                    exclusively.
                  </p>
                </li>
                <li>
                  <p>
                    Most have considered fostering, or wish they had family
                    support for fostering, but find helping a family to be the
                    perfect outlet for that desire.
                  </p>
                </li>
                <li>
                  <p>
                    They come to realize the need for friendly,
                    neighbor-to-neighbor support in foster care, especially with
                    the wide spectrum of needs (small to big) in the life of
                    kids in foster care.
                  </p>
                </li>
                <li>
                  <p>
                    They are self-aware and willing to offer a time and
                    financial (grocery expenses) commitment that works for them,
                    without over-committing.
                  </p>
                </li>
              </ul>
            </div>
            <Media>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385742778-FWVIMH270TN6KNWXQBAA/ke17ZwdGBToddI8pDm48kHk9taYkEy7sLhgS3EyD6457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFQmF03bpsbun_LAh8ZlxTmgswgaiiNAbnlkQr7g4-9D1w/FT+5.jpg?format=750w"
                alt=""
                style={{ width: 480, marginTop: 25 }}
              />
            </Media>
          </MediaWrapper>
          <p>
            As one of our first Helpers said,{" "}
            <span>
              “I quickly realized that no level of help is too little. Anyone
              can customize the deliveries to whatever they have time and money
              for.”
            </span>
          </p>
        </Text>
      </MainContent>

      <FormContent>
        <Formik
          initialValues={{
            m3_q2: ""
          }}
          validationSchema={ModuleThreeSchema2}
          onSubmit={() => {
            push("/module3-3");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormTitle>My strengths: Complete before proceeding</FormTitle>
              <FormLabel>
                After reading this list, please name one or two strengths you
                will bring to the match. *
                <FormInput
                  id="m3_q2"
                  name="m3_q2"
                  placeholder="Your answer here"
                />
                {errors?.m3_q2 && touched?.m3_q2 && (
                  <p style={{ color: "red" }}>{errors?.m3_q2}</p>
                )}
              </FormLabel>
              <ButtonWrapper>
                <ContinueBtn type="submit">Continue</ContinueBtn>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </FormContent>
    </PageWrapper>
  );
};

export default Module32;
