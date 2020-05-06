import React from "react";
import {
  // Wrapper,
  BackArrow,
  // Title,
  /* Text, */
  /* MainSection, */
  MediaWrapper,
  Media,
  MediaLeft,
  Video,
  Step,
  // Form,
  Label,
  Input,
  Submit
} from "../../TrainStyles";

import {
  PageWrapper,
  PageTitle,
  FormTitle,
  MainContent,
  FormContent,
  Text
} from "../../GlobalModule.styles.js";

import { useHistory } from "react-router-dom";

export const Module31 = ({ handleBack, errors, touched }) => {
  return (
    <>
      <PageWrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          What's your vision of a foster family?
        </PageTitle>
        <MainContent>
          <ol>
            <Text style={{ margin: "0 0 50px -30px" }}>
              Helpers are often surprised when they meet their foster parent
              match. As humans, we tend to make assumptions about what a “type”
              might look like, and it’s best when we leave room to be pleasantly
              surprised by reality. For example, here are a few of the massive
              variations in foster families:
            </Text>
            <MediaWrapper style={{ marginBottom: "-50px" }}>
              <div>
                <Step>
                  <p>
                    They don’t feel like they possess a super-human strength.
                    They feel pretty average, just as most parents do at the end
                    of a long day. Personality types can influence anyone’s
                    affect and energy level.
                  </p>
                </Step>
                <Step>
                  <p>
                    Very few foster parents have medical or professional
                    therapeutic training for their care of kids with high
                    special needs (everything from complex trauma to feeding
                    tubes), and those who do are paid a living wage for this
                    full-time care. Most foster homes simply receive the average
                    $13 daily reimbursement for the child's food,
                    transportation, childcare, and special activities.
                  </p>
                </Step>
              </div>
              <Media>
                <Video
                  url="https://player.vimeo.com/video/288657927"
                  width={480}
                />
              </Media>
            </MediaWrapper>
            <Step>
              <p>
                They make various levels of income. Some foster families are
                single parent homes where the parent works full time, others are
                dual-income, and others have an at-home parent while the
                partner's job provides financially. Due to income differences,
                some drive 15 year old minivans, others drive a sportscar. As
                far as we can tell, every foster family we’ve worked with,
                regardless of the size of house or price of car, has clear and
                honorable intentions to help kids, and that’s what matters to
                us. We want to provide that extra friendship (that money can't
                buy) and practical support to any families willing to help kids
                heal.
              </p>
            </Step>
            <Step>
              <p>
                They might be married, single, living with parents or grown
                kids, elderly, or LGBT.
              </p>
            </Step>
            <Step>
              <p>They might be religious or secular.</p>
            </Step>
            <MediaWrapper style={{ marginBottom: "-50px" }}>
              <MediaLeft>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385623625-BVHPKT4NS4BBS6YU07S0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/FT+7.jpg?format=750w"
                  alt=""
                  style={{ width: 480 }}
                />
              </MediaLeft>
              <div>
                <Step>
                  <p>
                    They might have different food standards than you. Some will
                    have a thriving vegetable garden and chicken coop,
                    maintaining that this is the path to optimal nutrition.
                    Others have days packed full with activities, so quick meals
                    like hot dogs, cereal, and frozen veggies keep everything
                    running.
                  </p>
                </Step>
                <Step>
                  <p>
                    They might dress kids differently. One parent will let kids
                    play in a stained t-shirt (especially if it holds
                    sentimental value--even smells of home can be comforting for
                    a kid), and another will buy all new matching outfits for
                    siblings in their homes.
                  </p>
                </Step>
              </div>
            </MediaWrapper>
            <Step>
              <p>They might have completed high school, or achieved a PhD.</p>
            </Step>
            <Step>
              <p>
                They will have vastly different capacities and specialties.
                Foster parents quickly find their “groove” with the ages they
                want to parent (teens and babies both have their special joys),
                and how many kids they can confidently parent (some set a firm
                limit at one, others thrive orchestrating and supervising large
                sibling groups of five or six kids).
              </p>
            </Step>
            <Step>
              <p>
                Parenting and communication styles vary. While we strive for all
                homes to be “trauma informed” (seeing the child’s need, rather
                than just “bad behavior”), some parents present their authority
                with soft gentleness, and others are firmly no-nonsense.
              </p>
            </Step>
            <Step>
              <p>
                They may be open to adopting a child, or even in the process of
                adopting a child whose parents lost their rights. Or, they may
                be a foster family “stop along the way” for kids who are going
                home eventually. Both deeply love and care for the children in
                their homes.
              </p>
            </Step>
            <Text style={{ margin: "0 0 50px -30px" }}>
              Again, whether money is tight or plentiful, whether the kids look
              like they jumped out of a magazine or have been playing outside
              for three days straight, whether parents are accomplished in
              formal education or have huge hearts (or both!), the neighborly
              support you provide is priceless, and crucial to the family's
              thriving.
            </Text>
          </ol>
        </MainContent>
        <FormContent>
          <FormTitle>Family differences: Complete before proceeding</FormTitle>

          <Label>
            Are you surprised by any of the possible differences in family
            structure or norms? Do any of them make you feel uneasy? (2+
            sentences) *
            <Input
              component="textarea"
              id="m3_q1"
              name="m3_q1"
              placeholder="Your answer here"
            />
            {errors?.m3_q1 && touched?.m3_q1 && (
              <p style={{ color: "red" }}>{errors?.m3_q1}</p>
            )}
          </Label>
          <Submit type="submit">Continue</Submit>
        </FormContent>
      </PageWrapper>
    </>
  );
};

export default Module31;
