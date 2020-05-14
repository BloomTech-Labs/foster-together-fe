import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ModuleFourSchema2 } from "../../../../utils/yupSchemas/index";
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
  Video,
  FormInput,
  ButtonWrapper,
  ContinueBtn,
  FormLabel
} from "../../GlobalTraining.styles";

export const Module42 = props => {
  const handleBack = () => {
    push("/module4-1");
  };
  const { push } = useHistory();

  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow onClick={handleBack} />
        Sexual abuse prevention
      </PageTitle>

      <MainContent>
        <Text>
          <MediaWrapper>
            <div>
              <p>
                Because one in three girls and one in four boys will be targets
                for sexual abuse, we can't leave this part out.
              </p>
              <p>
                Because kids in foster care are one of the groups most at-risk
                to be abused, we can't afford not to prepare every Foster Family
                Helper to prevent abuse.
              </p>

              <span style={{ fontWeight: "bold" }}>
                For many people, this may be the toughest part of the Foster
                Together process.
              </span>
              <p>And we thank you for doing it anyway.</p>

              <p>
                We are looking for adults who are willing to feel uncomfortable
                in this training, so that they can decrease the likelihood of
                abuse for the kids they care about.
              </p>
            </div>
            <Media>
              <Video
                url="https://www.youtube.com/embed/ULGJphesPnk"
                width="550px"
                height="400px"
              />
            </Media>
          </MediaWrapper>
          <p>
            We are looking for adults who are willing to feel uncomfortable in
            this training, so that they can decrease the likelihood of abuse for
            the kids they care about.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              We do not include this section to scare you or make people
              super-suspicious of each other.
            </span>
          </p>
          <p>
            Rather, we want to create a Foster Together culture of open
            conversations and clarity.
          </p>
          <MediaWrapper>
            <Media>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525386132069-86G9CUPJYIFKEVYT5SKY/ke17ZwdGBToddI8pDm48kAUFOTPMSVxuKvNFAx6DKiZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYc0yAe_x11zxahcI_hfw238yWAp0jGKzhuVZoU5dfkFlA/FT+37.jpg?format=750w"
                style={{ width: "80%", position: "relative" }}
                alt=""
              />
            </Media>

            <div>
              <p>
                The main point is that secrets and wrong motivations can't exist
                in the light of open communication and savvy supervision. So if
                you have nothing to hide, you have nothing to worry about. We
                also know that the most effective way to prevent predators from
                targeting our kids is by setting the expectation for all adults
                involved that private parts are off limits and secrets are a
                no-go. As a foster care volunteer opportunity, we realize that
                someone who wants to gain access to children might see Foster
                Together as an easy target.{" "}
                <span>
                  Requiring this training for all foster parents and Family
                  Helpers is the best way we know to say "Not on our watch."
                </span>
              </p>
              <p>
                Please read the two linked articles, review the chart of “body
                safety rules,” and fill out the following form, stating that{" "}
                <span>
                  you understand that our foster parents are aware of red flags
                  for sexual abuse, and regularly enforcing the rules below.
                </span>
              </p>
            </div>
          </MediaWrapper>
          <p>Again, thank you for sticking with us.</p>
          <h3>
            <p>PLEASE CLICK TO READ:</p>
            <a href="https://parentingsafechildren.com/what-offenders-want-you-to-know/">
              WHAT SEXUAL OFFENDERS WANT YOU TO KNOW
            </a>
          </h3>
          <p>
            <span>Excerpt: Pay attention to our behaviors.</span>
          </p>
          <p>
            People who sexually abuse children methodically groom to gain
            access—and then compliance.
          </p>
          <p style={{ margin: "30px" }}>
            <i>
              “The kids I abused were all seeking love. I would shower the child
              with gifts, special treatment and attention, and painstakingly
              move toward the moment when I could gain compliance and cross the
              line.”
            </i>
          </p>
          <p>
            In some instances, the parent is also being groomed through a level
            of generosity that is probably too good to be true – free
            babysitting, financial support, and perhaps an excessive willingness
            to “help out.” There is good news. With knowledge, you can recognize
            grooming behaviors and with courage, you can speak up.
          </p>
          <p>
            <span>Lesson:</span> Pay attention to these kinds of behaviors and
            patterns: favoring children, special treatment, allowing kids to
            break rules, gift-giving, lots of attention, a listening ear, taking
            a child’s side, manipulation, introducing kids to sexual material,
            or talking about sex (i.e., sexualizing the relationship). Read the
            rest by
            <a href="https://parentingsafechildren.com/what-offenders-want-you-to-know/">
              {" "}
              clicking here.{" "}
            </a>
          </p>
          <p>
            For a deeper idea of how to keep kids safe, you might want to read:
          </p>
          <span>
            <a href="https://parentingsafechildren.com/your-top-10-questions-about-body-safety-2/">
              Top 10 Questions on Preventing Sexual Abuse (Includes
              developmentally appropriate explanations)
            </a>
          </span>
        </Text>
      </MainContent>

      <FormContent>
        <Formik
          initialValues={{
            m4_q2: ""
          }}
          validationSchema={ModuleFourSchema2}
          onSubmit={() => {
            push("/module4-3");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormTitle>
                Understanding sexual abuse prevention: Complete before
                proceeding
              </FormTitle>
              <FormLabel>
                What did you learn from the above article(s)? (3+ sentences)
                <FormInput
                  component="textarea"
                  id="m4_q2"
                  name="m4_q2"
                  placeholder="Your Answer Here"
                />
                {errors?.m4_q2 && touched?.m4_q2 && (
                  <p style={{ color: "red" }}>{errors.m4_q2}</p>
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

export default Module42;
