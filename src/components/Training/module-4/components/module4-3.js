import React, { useState } from "react";
import {
  MainContent6,
  MainContent5,
  MainContent8,
  Signature,
  Module4Submit,
  ATag1,
  Image4,
  InputHolder,
  SignContain,
  BigInput,
  Module4Link,
  Header5,
  Body4,
  Span1,
  // Wrapper,
  Title,
} from "../../TrainStyles.js";

import {
  Wrapper,
  PageTitle,
  FormTitle,
  BackArrow,
} from "../../GlobalModule.styles";

export const Module43 = ({ handleBack, handleNext }) => {
  return (
    <>
      <Wrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          Body Safety Rules by The Mama Bear Effect{" "}
        </PageTitle>

        <>
          <MainContent8>
            Foster parents wishing to use a Foster Together parent helper are
            required to post the body safety rules in their home. We purchase a
            poster for each of our foster families, and if you'd like one for
            your own home, you may order by clicking
            <Module4Link
              href="https://mamabeareffect.ecwid.com/Body-Safety-Poster-p51112142"
              target="blank"
            >
              {" "}
              here.
            </Module4Link>
          </MainContent8>
          <Image4 src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1524686041133-7YL55J2UUCA0HGFQ9DFQ/ke17ZwdGBToddI8pDm48kGrEzKbmlT1aXa03pZYZUlJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmD3GJgI7_jN764QbmlaUTk5WyFFzHgH39gSTvnaFnniHmMoF0B1QmrvergKLtg00N/mama+bear+effect.jpg?format=1500w" />
        </>
        <Body4>
          Guidelines adapted from the book{" "}
          <Span1>
            Off Limits: A Parent's Guide to Keeping Children Safe from Sexual
            Abuse{" "}
          </Span1>
          and the live workshop Parenting Safe Children. To book a Parenting
          Safe Children workshop with Feather Berkower in Colorado,{" "}
          <Module4Link href="https://parentingsafechildren.com/parents/calendar-register">
            click here.
          </Module4Link>
          It's a half-day training with your neighborhood, school, church, or
          club teaching you to prevent child abuse from happening right under
          your nose.
        </Body4>
        <>
          <Header5>
            Body safety rules for all Foster Together Homes: Complete before
            proceeding
          </Header5>
          <SignContain>
            <MainContent5>
              The children in this home are actively taught body-safety rules
              and we ask that you reinforce these rules if the child ever raises
              the topics of: private parts, secrets, feeling unsafe, or open
              communication. *
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent5>
              Rule One: Children in this home do not touch other people’s
              private parts and no one is allowed to touch theirs.
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent5>
              Rule Two: Children in this home are regularly instructed not to
              keep secrets from the parents in their lives. *
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent5>
              Rule Three: Children in this home are regularly reminded to tell a
              safe adult if anyone tries to break any of their body safety rules
              or asks them to do anything that worries or frightens them. *
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent5>
              Rule Four: We have open communication with children in this home
              and no topics are off-limits. *
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent5>
              I understand that foster parents using a Foster Together helper
              are trained on this material and regularly talk about body safety
              with all kids at home. *
            </MainContent5>
            <InputHolder>
              <Signature placeholder="If you understand, please type your full name here to agree" />
            </InputHolder>
          </SignContain>
          <MainContent6>
            Any questions or concerns about this section?
          </MainContent6>
          <InputHolder>
            <BigInput placeholder="Your Answer Here" />
          </InputHolder>
        </>
        <ATag1>
          <Module4Submit onClick={handleNext}>Continue</Module4Submit>
        </ATag1>
      </Wrapper>
    </>
  );
};

export default Module43;
