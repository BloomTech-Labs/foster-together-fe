import React from "react";
import { useHistory } from "react-router-dom";
import { ModuleTwoSchema2 } from "../../../../utils/yupSchemas";
import NavBar from "../../TrainingNav/NavBar";

import {
  PageWrapper,
  PageTitle,
  FormTitle,
  MainContent,
  FormContent,
  Text,
  BackArrow,
  MediaWrapper,
  Media,
  Video,
  FormInput,
  ButtonWrapper,
  ContinueBtn,
  FormLabel
} from "../../GlobalTraining.styles.js";
import { Formik, Form } from "formik";

export const Module22 = ({ handleBack }) => {
  const { push } = useHistory();
  return (
    <>
      <NavBar title="Two: How to do it?" />
      <PageWrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          Best practices for a happy match
        </PageTitle>

        <MainContent>
          <Text>
            <ol>
              <li>
                <h3> Be clear</h3>
                <p>
                  Before offering specific details on meal drop-off at the first
                  meeting, the Helper already has an idea of what would work
                  well for his or her schedule and budget (see questionnaire
                  below).
                </p>
              </li>
              <li>
                <h3>Start with simple, small tasks.</h3>
                <MediaWrapper>
                  <div>
                    <p>
                      Foster Together starts all matches with the Family Helper
                      dropping off a meal once a month. You may like to expand
                      your responsibilities over the coming weeks or months, and
                      each foster family communicates with us about a variety of
                      needs in the home--not just meals. Before you commit to
                      more, we encourage you to establish a rhythm with only one
                      task (meal drop-off) within your time/money budget before
                      adding more.
                    </p>
                    <p>
                      In the past, some Helpers have jumped in enthusiastically
                      (for example, creating ten freezer meals per month), then
                      felt awkward when they had to cut back due to the grocery
                      budget or time demands. You can always add tasks, but it's
                      best not to over commit.
                    </p>
                  </div>
                  <Media>
                    <Video
                      url="https://player.vimeo.com/video/288657931"
                      controls={false}
                      width={480}
                    />
                  </Media>
                </MediaWrapper>
              </li>
              <li>
                <h3>Stay focused.</h3>
                <p>
                  {" "}
                  The Family Helper’s main job is to give the foster parent
                  additional capacity (time, emotional energy, physical energy,
                  encouragement) to remain emotionally present with the
                  child(ren). Therefore, in addition to meals, specific helping
                  tasks may include errands, housework, homework in a family
                  setting, or supervising playtime while the parent is home. As
                  the parent-helper relationship develops and trust is
                  warranted, more interaction with the children may be helpful
                  (driving, babysitting, respite), as approval by county or
                  agency is granted. Keep in mind, though, the Family Helper’s
                  primary job is not to develop a relationship with the child,
                  become a mentor, or show special attention. In other words,
                  you are a warm presence and practical help for the whole
                  family, and not a "special friend" to the kids (you'll see
                  specific examples and more explanations in Module Three).{" "}
                </p>
              </li>
              <li>
                <h3> If one party begins to feel uneasy... </h3>
                <p>
                  {" "}
                  If one party begins to feel uneasy about any aspect of the
                  match, and clear, kind communication does not resolve the
                  problem, contact Foster Together for assistance.{" "}
                </p>
              </li>
              <li>
                <h3> Let the relationship benefit others naturally. </h3>
                <p>
                  {" "}
                  Let the relationship benefit others naturally, as far as both
                  parties are comfortable. Does the Helper have a friend who
                  would like to deliver a meal? Does the Foster Parent know a
                  fellow foster parent who needs help? Open communication and
                  idea-sharing can make the best kinds of neighborly connection.{" "}
                </p>
              </li>
              <li>
                <h3>
                  {" "}
                  Approach the matching relationship as you would a new
                  friendship.
                </h3>
                <p>
                  {" "}
                  Be courteous (on time, predictable), anticipate the needs of
                  the other person, don’t make assumptions (please DO
                  over-communicate at first!), and get to know each other.{" "}
                </p>
              </li>
              <li>
                <h3> Know when you need to get official. </h3>
                <p>
                  {" "}
                  If the family needs help with driving or babysitting, ask the
                  family, or Foster Together, for background requirements from
                  the foster care agency or county. You'll get the details of
                  possible requirements in Module Four.{" "}
                </p>
              </li>
            </ol>
          </Text>
        </MainContent>

        <Formik
          initialValues={{
            m2_q2: ""
          }}
          validationSchema={ModuleTwoSchema2}
          onSubmit={() => {
            push("/module2-3");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormContent>
                <FormTitle>
                  Understanding of responsibility: Complete before proceeding
                </FormTitle>
                <FormLabel>
                  Please summarize your responsibility (relationally and
                  practically) in this match with a sentence or two. *
                  <FormInput
                    component="textarea"
                    id="m2_q2"
                    name="m2_q2"
                    placeholder="Your answer here"
                  />
                  {errors?.m2_q2 && touched?.m2_q2 && (
                    <p style={{ color: "red" }}>{errors?.m2_q2}</p>
                  )}
                </FormLabel>
                <ButtonWrapper>
                  <ContinueBtn type="submit">Continue</ContinueBtn>
                </ButtonWrapper>
              </FormContent>
            </Form>
          )}
        </Formik>
      </PageWrapper>
    </>
  );
};

export default Module22;
