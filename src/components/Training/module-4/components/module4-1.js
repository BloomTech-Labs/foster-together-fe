import React, { useState } from "react";
import {
  Module4Input,
  Module4Submit,
  ATag1,
  Question,
  Module4Title,
  MainContent1,
  Paragraph,
  Paragraph1,
  Module4Video,
  Or,
  Header2,
  Input
} from "../../TrainStyles.js";

import {
  PageWrapper,
  PageTitle,
  FormTitle,
  BackArrow,
  MainContent,
  FormContent,
  Text,
  MediaWrapper,
  Media,
  Video
} from "../../GlobalModule.styles";

export const Diamond = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (
  <svg
    width="9"
    height="9"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="0.343262"
      width="7"
      height="7"
      transform="rotate(45 6 0.343262)"
      fill="#343434"
    />
  </svg>
);

export const Module41 = props => {
  const { handleNext, handleBack, errors, touched } = props;

  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow onClick={handleBack} />
        When do you need a background check?
      </PageTitle>

      <MainContent>
        <Text>
          <ul>
            <h3>Basic Overview of Safety and Legal Requirements: </h3>
            <MediaWrapper>
              <p>
                We perform a basic Colorado Arrest Records check before each
                match. Foster Together defers to foster parents whether to
                reveal their home address after the initial meeting with the
                helping family. In the case of Foster Family Helpers who desire
                to do more with families (babysitting, driving, etc), Foster
                Together <span>defers to the licensing county or agency</span>,
                as background check and training requirements differ across
                institutions.
              </p>

              <Media>
                <Video
                  url="https://player.vimeo.com/video/288657921"
                  width="500px"
                  height="300px"
                />
              </Media>
            </MediaWrapper>

            <li>
              <h3>Option One: Casual Helping</h3>
              <p>
                While there is no legal requirement for a background check or
                training for casual contact with a foster family (i.e. dropping
                off meals, meeting at the park with the foster parents and
                kids), we do run a Colorado Arrest Records check as a buffer. As
                a Foster Family Helper, you are developing a natural
                relationship with the family, and are allowed to help out as any
                other friend or neighbor would. As a best practice, Foster
                Together Colorado seeks to deter predators from our matching
                program by educating families in sexual abuse prevention, red
                flags for predatory grooming, and body safety rules (more info
                in the next section). We know that talking openly about
                prevention with adults in the child’s life is the best way to As
                with any family connections, foster parents have the
                responsibility to be aware and cautious as all parties earn
                trust.
              </p>
            </li>

            <br></br>

            <li>
              <h3>
                Option Two: Regular Babysitting for Less than Six Hours, or
                Driving Children{" "}
              </h3>
              <p>
                For anyone who babysits for less than six hours or transports
                kids in a car, foster parents may be required to do one of the
                following. Agency and county requirements likely include:
              </p>
            </li>

            <div style={{ margin: "50px" }}>
              <li>
                {"  "}CBI, FBI, TRAILS (BIU), sexual offender registry
                background checks
              </li>
              <li>{"  "}Proof of auto insurance and valid driver’s license.</li>
              <li>
                {"  "}Check references, personal interview, training, and/or
                other agency-specific vetting.
              </li>
              <span>OR</span>
              <li>
                {"  "}Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </div>

            <li>
              <h3>
                Option Three: Babysitting More than Six Hours or Overnight
                Respite in Foster Home
              </h3>
              <p>
                For anyone who provides respite (babysitting for over six hours
                or overnight) in the{" "}
                <span>
                  licensed foster home, agency and county requirements{" "}
                </span>
                likely include:
              </p>
            </li>

            <div style={{ margin: "50px" }}>
              <li>
                CBI, FBI, TRAILS (BIU), sexual offender registry background
                checks
              </li>
              <li>Core foster care training on rules and regulations</li>
              <li>CPR and first aid certification</li>
              <span>OR</span>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </div>

            <li>
              <h3>
                Option Four: Babysitting Overnight in Family Helper’s Home
              </h3>
              <p>
                For anyone who provides respite (babysitting for over six hours
                or overnight) in their
                <span>own home, agency and county requirements </span>
                likely include:
              </p>
            </li>

            <div style={{ margin: "50px" }}>
              <li>
                CBI, FBI, TRAILS, and sexual offender registry background checks
              </li>
              <li>CPR and first aid certification</li>
              <li>
                Full home study (foster home certification process) on the
                Family Helper’s home
              </li>
              <li>Full state-required foster care training</li>
              <span>OR</span>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </div>

            <span>
              At any time in the match, foster parents and Foster Family Helpers
              may contact the agency or county to request specific next steps
              for allowing childcare, transportation, or other contact with
              kids. Foster Together is willing to help with this process. Foster
              Family Helpers are encouraged to pay for their own background
              checks, but Foster Together is willing to subsidize these costs if
              needed.
            </span>
          </ul>
        </Text>
      </MainContent>
      <FormContent>
        <FormTitle>
          Understanding legal requirements: Complete before proceeding
        </FormTitle>
        <FormTitle>
          Please let us know if you have any questions about the requirements
          listed here, so we can clarify. *
        </FormTitle>
        <Input
          component="textarea"
          id="m4_q1"
          name="m4_q1"
          placeholder="Your Answer Here"
        />
        {errors?.m4_q1 && touched?.m4_q1 && (
          <p style={{ color: "red" }}>{errors.m4_q1}</p>
        )}
        <ATag1>
          <Module4Submit type="submit">Continue</Module4Submit>
        </ATag1>
      </FormContent>
    </PageWrapper>
  );
};

export default Module41;
