import React from "react";
import {
  MainContent7,
  Signature,
  Module4Submit,
  BigInput,
  InputHolder,
  // Header7,
  // Body,
  // Header6,
  Todo,
  Span2,
  NewSection,
  BigLink
  // Wrapper,
  // Title,
} from "../../TrainStyles.js";
import { useHistory } from "react-router-dom";

import {
  BackArrow,
  PageWrapper,
  PageTitle,
  FormTitle,
  MainContent,
  FormContent,
  Text
} from "../../GlobalModule.styles";

export const Module44 = props => {
  const { handleBack, errors, touched } = props;

  return (
    <>
      <PageWrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          What to do if you suspect abuse, or a child discloses abuse{" "}
        </PageTitle>

        <MainContent>
          <Text>
            <ol>
              <li>
                <span>Be prepared: </span>
                <a
                  href="https://themamabeareffect.org/prevent/when-to-speak-up/"
                  target="blank"
                >
                  {"  "}How to Know, Who to Call, What to Say (Click to read){" "}
                </a>
              </li>

              <li>
                <span>You need to call it in:</span> Colorado has our own child
                abuse hotline: 1-800-CO4KIDS. Remember, you don't have to
                investigate abuse before making the call. That's not your job.
                Most people are too afraid to take this step, but the child
                needs you to do it.
                <br />
                <i>
                  TO DO: Save this number, and send a screenshot of the contact
                  in your phone to connect@fostertogether.co.
                </i>
              </li>

              <li>
                <span>Seek treatment for the child.</span>
                <a href="https://www.safepassagecac.org/">
                  Safe Passage Colorado{" "}
                </a>{" "}
                provides a seamless referral and treatment system, lessening the
                trauma to the child and caretaker during an investigation.
                Contact them here: safepassagecac.org/
              </li>

              <li>
                <span>Get help for the offender.</span> If, after reading this,
                you realize that someone you know (or yourself) is abusing
                children, please get help. Treatment can be very effective and
                may even save a life.{" "}
                <a href="https://www.atsa.com/referral"> This referral form </a>{" "}
                with the Association for Treatment of Sexual Offenders is
                completely anonymous: atsa.com/referral
              </li>
            </ol>

            <p>
              P.S. For those who want to do even more to help kids: For Foster
              Together to recruit and train our average volunteer, it costs us
              $200. That's pretty good when you consider the long term
              friendships we're providing to foster families. If you'd like to
              help us cover the costs for the next volunteer, please join our
              donor team! CLICK HERE.
            </p>
          </Text>
        </MainContent>

        <FormContent>
          <FormTitle>
            Understanding actions in cases of potential abuse: Complete before
            proceeding
          </FormTitle>
          <h4>
            What Colorado-based number do you call if you suspect a child is
            being abused?
          </h4>
          <InputHolder>
            <Signature id="m4_q9" name="m4_q9" placeholder="Your Answer Here" />
            {errors?.m4_q9 && touched?.m4_q9 && (
              <p style={{ color: "red" }}>{errors?.m4_q9}</p>
            )}
          </InputHolder>
          <h4>
            What is the name of the local program that walks abused kids through
            the investigation and initial recovery process? *
          </h4>
          <InputHolder>
            <Signature
              id="m4_q10"
              name="m4_q10"
              placeholder="Your Answer Here"
            />
            {errors?.m4_q10 && touched?.m4_q10 && (
              <p style={{ color: "red" }}>{errors?.m4_q10}</p>
            )}
          </InputHolder>
          <h4>
            Where can you request a referral for the treatment of someone who
            has abused children? *
          </h4>
          <InputHolder>
            <Signature
              id="m4_q11"
              name="m4_q11"
              placeholder="Your Answer Here"
            />
            {errors?.m4_q11 && touched?.m4_q11 && (
              <p style={{ color: "red" }}>{errors?.m4_q11}</p>
            )}
          </InputHolder>
          <h4>
            From what you’ve learned so far how can we improve the modules
            you’ve completed? What would you add, shorten, or eliminate? This
            program is always looking for ways to be better, so your feedback is
            definitely helpful!
          </h4>
          <BigInput placeholder="Your Answer Here" />
          <Module4Submit type="submit">Submit</Module4Submit>
        </FormContent>
      </PageWrapper>
    </>
  );
};

export default Module44;
