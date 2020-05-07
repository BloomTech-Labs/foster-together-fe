import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import { ModuleOneSchema } from "../../../../utils/yupSchemas";
import trainingAxiosWithAuth from "../../../../utils/axios/trainingAxiosWithAuth";

import {
  BackArrow,
  PageWrapper,
  PageTitle,
  MainContent,
  Text,
  MediaWrapper,
  Media,
  Video,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonWrapper,
  SubmitBtn,
} from "../../GlobalModule.styles.js";

export const Module11 = ({ errors, touched }) => {
  const { push } = useHistory();
  //!axios call here trainingAxiosWithAuth()
  const handleSubmit = (values) => {
    trainingAxiosWithAuth()
      .post("/update", values)
      .then(() => {
        push("/module2");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <PageWrapper>
        <PageTitle>
          <BackArrow
            onClick={() => {
              push("/training-start");
            }}
          />
          Benefits of supporting foster families
        </PageTitle>

        <MainContent>
          <Text>
            <ul>
              <MediaWrapper>
                <div>
                  <li>
                    <h3>1. Help families beat isolation.</h3>
                    <p>
                      You've probably heard the idea that foster parents are
                      heroes or saints. But they're regular people pushing
                      through stress, making lunches, running late to work, and
                      fretting over their parenting methods, and the "superhero"
                      ideal often makes them feel even more alone. Because of
                      the high emotional needs at home (everything from confused
                      kids feeling far away from mom, dad, and "normal," to the
                      toll of saying goodbye to one dearly loved child while
                      learning the rhythms of a new little one), they often feel
                      inadequate and exhausted.
                    </p>
                  </li>
                </div>
                <Media>
                  <Video
                    url="https://player.vimeo.com/video/288661409"
                    controls={false}
                    width={480}
                  />
                </Media>
              </MediaWrapper>
              <li>
                <h3>2. Go beyond transactions. Build relationships.</h3>
                <p>
                  You might be surprised to hear that delivering a meal is only
                  half of your service to the foster family. The rest is your
                  presence. It's your willingness to say "I see you, and I care
                  about you and the kids in your home." None of us--no matter
                  how much money we make or how capable we look at staying
                  patient in a chaotic day--want to go through life without
                  belonging and friendship. This is not just about feeding
                  people. We wanted to create a simple, practical way for you to
                  be present in the life of your foster family neighbors.
                </p>
              </li>
              <MediaWrapper>
                <div>
                  <li>
                    <h3>
                      3. More relationships = more transparency = safer kids.{" "}
                    </h3>
                    <p>
                      While Foster Together tends to attract excellent, caring,
                      engaged foster parents, we've heard enough stories from
                      teens in foster care to know that some foster parents do
                      not prioritize the safety or thriving of kids in their
                      care. With more neighbors paying attention to families in
                      natural, friendly ways, the risks of abuse or neglect
                      while in foster care will decrease.
                    </p>
                  </li>
                </div>
                <Media>
                  <img
                    src={require("../../TrainingIcons/image19.png")}
                    alt=""
                  />
                </Media>
              </MediaWrapper>
              <li>
                <h3>4. See beyond your comfort zone/social circle.</h3>
                <p>
                  This one's just for you, helper. We are in an era of political
                  tension, social media debates, and moral questions (racism,
                  institutional corruption, sexual violation, and equity).
                  Making a personal investment of time and attention for
                  families and kids in foster care is one of the simplest ways
                  to get out of our own echo-chamber and face the issues in the
                  lives of our fellow humans. You'll also probably interact with
                  "problems" that are invisible or nonexistent in your own
                  social circle, allowing you to challenge your definition of
                  "normal." We can't guarantee that you'll know what to do in
                  every situation, but if you keep an open, humble heart, you
                  will absolutely come through this experience with a richer
                  understanding of the lives and needs of kids in your town. And
                  we, and the foster parents, are always here to help answer
                  your questions.
                </p>
              </li>
              <li>
                <h3>5. Help great foster homes stay "open"</h3>
                <p>
                  In Colorado, the average foster home "deactivates" (or stops
                  fostering) after two years. Sometimes this is due to adopting,
                  and needing space to focus on helping the child feel secure
                  and permanent in the home. But often, it is due to frustration
                  with the way things work, especially exhaustion and isolation.
                  A lack of experienced, savvy, compassionate, tested foster
                  homes ultimately hurts the kids. Your investment of a few
                  hours a month may help excellent families stay in it for the
                  long haul.
                </p>
              </li>
            </ul>
          </Text>
        </MainContent>

        <Formik
          initialValues={{
            m1_q1: "",
          }}
          validationSchema={ModuleOneSchema}
          onSubmit={() => {
            push("/module2");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FormikForm>
            <FormContent>
              <FormTitle>What you offer: Complete before proceeding</FormTitle>

              <FormLabel>
                Are any of the "reasons to help" listed above new to you? In
                your own words, how do you anticipate this aspect enriching your
                life or the foster parents' lives? (2+ sentences) *
                <FormInput component="textarea" id="m1_q1" name="m1_q1" />
                {errors?.m1_q1 && touched?.m1_q1 && (
                  <p style={{ color: "red" }}>{errors?.m1_q1}</p>
                )}
              </FormLabel>
              <ButtonWrapper>
                <SubmitBtn type="submit">Complete Module 1</SubmitBtn>
              </ButtonWrapper>
            </FormContent>
          </FormikForm>
        </Formik>
      </PageWrapper>
    </>
  );
};

export default Module11;
