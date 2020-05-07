import React from "react";
import { Image4 } from "../../TrainStyles.js";

import {
  PageWrapper,
  PageTitle,
  MainContent,
  FormTitle,
  BackArrow,
  Text,
  FormContent,
  ShortFormInput,
  CommentInput,
  ButtonWrapper,
  ContinueBtn,
  FormLabel,
} from "../../GlobalModule.styles";

export const Module43 = (props) => {
  const { handleBack, errors, touched } = props;

  return (
    <>
      <PageWrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          Body Safety Rules by The Mama Bear Effect
        </PageTitle>

        <MainContent>
          <Text>
            <p>
              Foster parents wishing to use a Foster Together parent helper are
              required to post the body safety rules in their home. We purchase
              a poster for each of our foster families, and if you'd like one
              for your own home, you may order by clicking
              <a
                href="https://mamabeareffect.ecwid.com/Body-Safety-Poster-p51112142"
                target="blank"
              >
                here.
              </a>
            </p>
          </Text>

          <Image4 src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1524686041133-7YL55J2UUCA0HGFQ9DFQ/ke17ZwdGBToddI8pDm48kGrEzKbmlT1aXa03pZYZUlJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmD3GJgI7_jN764QbmlaUTk5WyFFzHgH39gSTvnaFnniHmMoF0B1QmrvergKLtg00N/mama+bear+effect.jpg?format=1500w" />

          <Text>
            <i>
              Guidelines adapted from the book
              <span>
                {" "}
                Off Limits: A Parent's Guide to Keeping Children Safe from
                Sexual Abuse{" "}
              </span>
              and the live workshop Parenting Safe Children. To book a Parenting
              Safe Children workshop with Feather Berkower in Colorado,
              <a href="https://parentingsafechildren.com/parents/calendar-register">
                {" "}
                click here.{" "}
              </a>
              It's a half-day training with your neighborhood, school, church,
              or club teaching you to prevent child abuse from happening right
              under your nose.
            </i>
          </Text>
        </MainContent>

        <FormContent>
          <FormTitle>
            Body safety rules for all Foster Together Homes: Complete before
            proceeding
          </FormTitle>

          <FormLabel>
            <h4>
              The children in this home are actively taught body-safety rules
              and we ask that you reinforce these rules if the child ever raises
              the topics of: private parts, secrets, feeling unsafe, or open
              communication. *
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q3"
              name="m4_q3"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q3 && touched?.m4_q3 && (
              <p style={{ color: "red" }}>{`\n` + errors?.m4_q3}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>
              Rule One: Children in this home do not touch other people’s
              private parts and no one is allowed to touch theirs.
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q4"
              name="m4_q4"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q4 && touched?.m4_q4 && (
              <p style={{ color: "red" }}>{errors?.m4_q4}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>
              Rule Two: Children in this home are regularly instructed not to
              keep secrets from the parents in their lives. *
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q5"
              name="m4_q5"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q5 && touched?.m4_q5 && (
              <p style={{ color: "red" }}>{errors?.m4_q5}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>
              Rule Three: Children in this home are regularly reminded to tell a
              safe adult if anyone tries to break any of their body safety rules
              or asks them to do anything that worries or frightens them. *
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q6"
              name="m4_q6"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q6 && touched?.m4_q6 && (
              <p style={{ color: "red" }}>{errors?.m4_q6}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>
              Rule Four: We have open communication with children in this home
              and no topics are off-limits. *
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q7"
              name="m4_q7"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q7 && touched?.m4_q7 && (
              <p style={{ color: "red" }}>{errors?.m4_q7}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>
              I understand that foster parents using a Foster Together helper
              are trained on this material and regularly talk about body safety
              with all kids at home. *
            </h4>
            <ShortFormInput
              component="textarea"
              id="m4_q8"
              name="m4_q8"
              placeholder="If you understand, please type your full name here to agree"
            />
            {errors?.m4_q8 && touched?.m4_q8 && (
              <p style={{ color: "red" }}>{errors?.m4_q8}</p>
            )}
          </FormLabel>
          <FormLabel>
            <h4>Any questions or concerns about this section?</h4>
            <CommentInput placeholder="Your Answer Here" />
          </FormLabel>
        </FormContent>

        <ButtonWrapper>
          <ContinueBtn type="submit">Continue</ContinueBtn>
        </ButtonWrapper>
      </PageWrapper>
    </>
  );
};

export default Module43;
