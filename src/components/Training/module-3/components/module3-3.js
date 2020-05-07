import React from "react";

import {
  PageWrapper,
  PageTitle,
  MainContent,
  Text,
  BackArrow,
  MediaWrapper,
  Media,
  Video,
  FormContent,
  FormTitle,
  FormLabel,
  FormInput,
  ButtonWrapper,
  ContinueBtn,
} from "../../GlobalTraining.styles.js";

export const Module33 = ({ handleBack, errors, touched }) => {
  return (
    <PageWrapper>
      <PageTitle>
        <BackArrow onclick={handleBack} />
        Foster parents' least favorite compliments (and a few ideas for what you
        should say instead)
      </PageTitle>

      <MainContent>
        <Text>
          <span>
            Challenge yourself to take your conversations off auto-pilot. Foster
            parents hear the following four phrases way too much:
          </span>
          <p>
            Other than that, this opportunity is completely customized to you.
            For example:
          </p>
          <ul>
            <MediaWrapper style={{ marginBottom: "-50px" }}>
              <div>
                <li>
                  <h3>"You’re so amazing to do this!"</h3>
                  <p>
                    While meant as a compliment, most foster parents will tell
                    you this bothers them because they want the focus on the
                    kids, who are struggling to heal and learn how to live (and
                    that's an amazing task). It also doesn’t give the foster
                    parent much to hold onto if he or she feels like quitting on
                    a hard day.
                  </p>
                </li>
              </div>
              <Media>
                <Video
                  url="https://player.vimeo.com/video/288657930"
                  width={480}
                />
              </Media>
            </MediaWrapper>
            <li>
              <h3>"You’re a hero/saint!"</h3>
              <p>
                Foster parents feel like average people. They are also not the
                hero in the story. Kids who’ve experienced trauma, and their
                parents who overcome challenges to create safe homes, are the
                focus. And foster parents are privileged to nurture that victory
                behind the scenes.
              </p>
            </li>
            <li>
              <h3>"I don’t know how you do it!" Or "I could never foster!"</h3>
              <p>
                This can add to the feelings of isolation and loneliness. It can
                also make the kids feel like a burden.
              </p>
            </li>
            <li>
              <h3>
                "Isn’t it hard to send them back?" Or "Don’t you get attached?"
              </h3>
              <p>
                Foster parents are trained and required to “get attached”
                because it’s what kids need to develop strong connections. If we
                turn off our humanity, shut down our tender hearts, the kids
                lose. So, yes, of course it's hard. At the same time, we are
                challenged to de-center themselves from the child’s life (which
                simply means "This is not about ME, it's about THEM."), while
                investing massive amounts of emotional energy and focus on the
                child, as the children often return to family members. Foster
                parents appreciate not hearing this phrase, because it shows
                that you understand this nuance. One less thing to explain.
              </p>
            </li>
          </ul>

          <span>
            Instead of the above phrases, we love it when our Foster Family
            Helpers really listen, and empathize with the foster parent.
          </span>
          <ul>
            <li>
              <p>
                A phrase that almost always fits is{" "}
                <span>“Thank you for loving them.”</span> It works for hard
                days. It works for celebrations. It affirms the hard work of
                love without idolizing or isolating the foster parent.
              </p>
            </li>
            <li>
              <p>
                <span>
                  "This world needs more people who will pay attention to kids
                  like you do."
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  "I know a lot of your love for them is in the unseen moments.
                  Thank you for being committed."
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  "I love watching you interact with the kids. Seems like they
                  enjoy living here. Your
                  [patience/joy/commitment/approach/relational
                  intuition/consistency/steadiness] inspires me."
                </span>
              </p>
            </li>
          </ul>
          <p>
            Find the joy. Celebrate kids. Foster parents want you to see the
            beautiful childhoods they’re nurturing--not just the trauma and
            struggle.{" "}
            <span>
              Treat foster families with the joy and normalcy you’d want for
              your own family, all while giving them your needed gifts of warm
              neighborliness.
            </span>
          </p>
          <p>
            This helps everyone feel included, rather than ostracized, and
            delightful, rather than burdensome. And that’s the entire goal of
            foster parenting.
          </p>
          <p>
            If you come up with your own great phrase to say to a foster parent,
            you let us know.
          </p>
        </Text>
      </MainContent>

      <FormContent>
        <FormTitle>What to say: Complete before proceeding</FormTitle>
        <FormLabel>
          To you, what is the most surprising phrase on the "to avoid saying"
          list? *
          <FormInput id="m3_q3" name="m3_q3" placeholder="Your answer here" />
          {errors?.m3_q3 && touched?.m3_q3 && (
            <p style={{ color: "red" }}>{errors?.m3_q3}</p>
          )}
        </FormLabel>
        <ButtonWrapper>
          <ContinueBtn type="submit">Continue</ContinueBtn>
        </ButtonWrapper>
      </FormContent>
    </PageWrapper>
  );
};

export default Module33;
