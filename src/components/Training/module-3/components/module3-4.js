import React from "react";

import {
  PageWrapper,
  PageTitle,
  MainContent,
  Text,
  MediaWrapper,
  Media,
  BackArrow,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonWrapper,
  SubmitBtn
} from "../../GlobalTraining.styles.js";

export const Module34 = ({ handleBack, errors, touched }) => {
  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow onClick={handleBack} />
        What kids need
      </PageTitle>

      <MainContent>
        <Text>
          <p>From Homecoming FAQs and Straight from a Foster Mom:</p>
          <p>
            Other than that, this opportunity is completely customized to you.
            For example:
          </p>
          <ul>
            <MediaWrapper style={{ marginBottom: "-50px" }}>
              <div>
                <li>
                  <p>
                    <span>
                      Please don’t ask questions about their past, their
                      parents,
                    </span>{" "}
                    their health status. If you do ask, we’re not offended but
                    also don’t want you to be offended if we decline to answer.
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      Please don’t tell them or us how "lucky" they are to have
                      a family.
                    </span>{" "}
                    We are a flawed family with limited patience and resources
                    just like everyone else, and in the end we will probably be
                    far more blessed by their presence in our lives than visa
                    versa.
                  </p>
                </li>
              </div>
              <Media>
                <img src={require("../../img/train3.png")} alt="" />
              </Media>
            </MediaWrapper>
            <br></br>
            <br></br>
            <li>
              <p>
                Don’t label the kids, and{" "}
                <span>
                  only differentiate kids by how they entered a family while
                  necessary.
                </span>{" "}
                When we do distinguish, we call [kids born to us] “bio” kids,
                not “real” or “natural.” [Also avoid “your own kids.” Instead of
                “foster kids,” say “children in foster care.” Other ideas: “kids
                who were already at home with you,” and use first names whenever
                possible, to avoid reinforcing insecurities.]
              </p>
            </li>
            <li>
              <p>
                <span>Give attention to the children already in the home.</span>{" "}
                Having a new child in the home is a big adjustment as parents
                may feel consumed with visits, therapy appointments, and
                providing the new child with attention and nurturing in order to
                best meet their higher level of needs. Other children in the
                home will benefit from your attention and desire to do fun
                things with them. Simple implementation: When you enter the
                home, make sure to greet each of the children with the same
                level of enthusiasm and interest.
              </p>
            </li>
          </ul>
          <h4 style={{ fontWeight: "normal" }}>
            Perspective from foster mom Traci Schmidley:
          </h4>
          <p>
            Excerpts from:{" "}
            <a
              href="https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff"
              target="blank"
            >
              My Foster Children Have Too Many Toys— but let me tell you what
              they do need
            </a>
          </p>
          <p>
            <i>
              Many children who come into foster care may be overly clingy and
              lack appropriate boundaries. It’s easy to want to cuddle and
              coddle them and shower them with attention and affection to help
              heal their pain. However, [sometimes this is a sign that he or she
              has] made so many transitions they are confused as to who is
              “their person” and may seek the attention of any adult willing to
              give affection, which can be quite dangerous. Many of our friends
              will experience a foster child climbing up onto their laps and
              refuse to get down, and believe “Oh we have such a special bond!
              She loves me!” But the truth is the child likely does that to
              every single stranger we pass.
            </i>
          </p>
          <span>
            <i>
              We can’t undo (sometimes years of) neglect by giving excessive
              attention now. Hurting children need affection, no doubt, but they
              also need to learn boundaries, and to be guided toward forming
              safe connections and trust with their new caretaker first.{" "}
            </i>
          </span>
          <p>
            <i>
              I appreciate you the most when you give my foster children a{" "}
              <span>
                quick hug, a few kind words, and encourage him or her to
                continue doing whatever activity
              </span>{" "}
              they were previously engaged in, just like you would any other
              child.
            </i>
          </p>
          <p>
            <i>
              While meant as a compliment, most foster parents will tell you
              this bothers them because they want the focus on the kids, who are
              struggling to heal and learn how to live (and that's an amazing
              task). It also doesn’t give the foster parent much to hold onto if
              he or she feels like quitting on a hard day.
            </i>
          </p>
          <span>
            Read the rest of Traci's article{" "}
            <a
              href="https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff"
              target="blank"
            >
              here.
            </a>
          </span>
        </Text>
      </MainContent>

      <FormContent>
        <FormTitle>What kids need: Complete before proceeding</FormTitle>
        <FormLabel>
          What, if anything, was new to you in this section on how to approach
          the kids? *
          <FormInput id="m3_q4" name="m3_q4" placeholder="Your answer here" />
          {errors?.m3_q4 && touched?.m3_q4 && (
            <p style={{ color: "red" }}>{errors?.m3_q4}</p>
          )}
        </FormLabel>
        <FormLabel>
          Do you anticipate any of these foster parent requests will be
          difficult for you? Why or why not? *
          <FormInput id="m3_q5" name="m3_q5" placeholder="Your answer here" />
          {errors?.m3_q5 && touched?.m3_q5 && (
            <p style={{ color: "red" }}>{errors?.m3_q5}</p>
          )}
        </FormLabel>
        <ButtonWrapper>
          <SubmitBtn type="submit">Complete Module 3</SubmitBtn>
        </ButtonWrapper>
      </FormContent>
    </PageWrapper>
  );
};

export default Module34;
