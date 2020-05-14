import React from "react";

import { useHistory } from "react-router-dom";

import {
  BackArrow,
  PageWrapper,
  PageTitle,
  MainContent,
  Text,
  FormContent,
  FormTitle,
  FormLabel,
  ShortFormInput,
  ButtonWrapper,
  SubmitBtn,
  Media,
  MediaWrapper
} from "../../GlobalTraining.styles.js";

const Module5 = ({ errors, touched }) => {
  const { push } = useHistory();

  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow
          onClick={() => {
            push("/module4");
          }}
        />
        Foster Together Colorado's Responsibility
      </PageTitle>

      <MainContent>
        <Text>
        <MediaWrapper>
          <div>
          <ol>
          
            <li>
              <p>
                To recruit and minimally vet potential foster family helpers
                through marketing and application process.
              </p>
            </li>
            <li>
              <p>
                To train and support foster families and Family Helpers in the
                purpose, implementation, and safeguards of the Foster Together
                process.
              </p>
            </li>
            <li>
              <p>
                To match the helper with a foster family within 10 miles of the
                helper’s home (unless otherwise requested).
              </p>
            </li>
            <li>
              <p>
                As requested, to assist the foster family in obtaining County or
                CPA approval to use the family helper for babysitting,
                transportation, or respite.
              </p>
            </li>
            <li>
              <p> To explain general expectations to each party.</p>
            </li>
            <li>
              <p>
                As requested, to assist with problem-solving throughout the
                match.
              </p>
            </li>
            </ol>
            </div>
            <Media style={{ justifyContent: "center" }}>
                  <img src={require("../../img/FT1.png")} alt="" />
                </Media>
              </MediaWrapper>
       

          <h4>Foster Parent’s Responsibility</h4>
          <ol>
            <li>
              <p>
                To be responsive to Foster Together and the foster family
                helper, acknowledging receipt of any texts, emails, or
                voicemails within 48 hours.
              </p>
            </li>
            <li>
              <p>
                To practice discretion as the matching relationship progresses,
                using reasonable parental judgment AND obtaining written
                approval from placing county and/or CPA before allowing the
                foster family helper to provide babysitting, transportation, or
                respite.
              </p>
            </li>
            <li>
              <p>
                To post Body Safety Rules poster in your home and regularly
                review body safety rules with kids.
              </p>
            </li>
            <li>
              <p>
                To communicate from a tone of gratitude with the helper,
                recognizing the gift of time and care that the helper desires to
                give.
              </p>
            </li>
            <li>
              <p>
                To communicate your needs with forethought, rather than urgency,
                to the family helper, recognizing that the family helper also
                has responsibilities and time commitments.
              </p>
            </li>
          </ol>

          <h4>Foster Neighbor’s Responsibility</h4>
          <ol>
            <li>
              <p>
                To be responsive to Foster Together and the foster parent,
                acknowledging receipt of any texts, emails, or voicemails within
                48 hours.
              </p>
            </li>
            <li>
              <p>
                To ensure that the foster family has obtained approval from the
                licensing county or child placement agency before babysitting,
                driving, or providing respite.
              </p>
            </li>
            <li>
              <p>
                To communicate with clarity your limits and logistics for
                helping the foster parent.
              </p>
            </li>
            <li>
              <p>
                To be dependable with your commitments to the family, and
                communicate immediately when you need to adjust plans.
                Dependability lessens the stress on a foster family.
              </p>
            </li>
            <li>
              <p>
                To respect and protect the privacy of the foster family and the
                children in the home. Do not ask questions about the
                child(ren)’s histories. If the need arises for you to know
                something, the foster parent can reveal information as
                appropriate.
              </p>
            </li>
            <li>
              <p>
                Not to become a primary adult in the child’s life, but to take a
                role in the background as much as possible, increasing the
                capacity of the foster parent.
              </p>
            </li>
          </ol>
          <Media style={{ justifyContent: "center", padding:  "30px"}}>
                  <img src={require("../../img/FT20.png")} alt="" />
                </Media>
        </Text>
      </MainContent>

      <FormContent>
        <FormTitle>
          Understanding Responsibility: Complete before proceeding
        </FormTitle>

        <FormLabel>
          As the Foster Neighbor in this match, I understand and agree to my
          responsibilities outlined above. *
          <ShortFormInput component="textarea" id="m5_q1" name="m5_q1" />
          {errors?.m5_q1 && touched?.m5_q1 && (
            <p style={{ color: "red" }}>{errors?.m5_q1}</p>
          )}
        </FormLabel>

        <FormLabel>
          I understand that I may not babysit or provide transportation to the
          children without prior approval from the family's foster care agency
          and/or the county department. *
          <ShortFormInput component="textarea" id="m5_q2" name="m5_q2" />
          {errors?.m5_q2 && touched?.m5_q2 && (
            <p style={{ color: "red" }}>{errors?.m5_q2}</p>
          )}
        </FormLabel>

        <FormLabel>
          Any questions we can address before helping you find a foster family?
          <ShortFormInput component="textarea" id="m5_q3" name="m5_q3" />
          {errors?.m5_q3 && touched?.m5_q3 && (
            <p style={{ color: "red" }}>{errors?.m5_q3}</p>
          )}
        </FormLabel>

        <ButtonWrapper>
          <SubmitBtn type="submit">Complete Module 5</SubmitBtn>
        </ButtonWrapper>
      </FormContent>
    </PageWrapper>
  );
};

export default Module5;
