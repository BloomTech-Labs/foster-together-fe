import React, { useState } from 'react'
import styled from 'styled-components'
import {
  fiveSteps,
  bestPractices,
  mealTips,
  beyondTheMeal,
  survey,
} from './data'
import { Btn, Flex } from '../../../GlobalStyles'
import { gettingMatchedVideo, fiveStepsImage, keepItSimpleVideo } from './img'

const Wrapper = styled.div`
  width: 80%;
  max-width: 1075px;
  margin: 75px auto;
`

const Section = styled.section`
  width: 100%;
  margin: 50px 0 75px;
`

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: normal;
`

const Step = styled.li`
  font-size: 2.4rem;
  margin: 50px 0;
  h3,
  p,
  span {
    font-size: 2.4rem;
  }
  p {
    margin: 0 0 30px;
  }
  span {
    font-weight: bold;
  }
`

const MediaWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  div {
    width: 48%;
  }
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 2.4rem;
`

const Input = styled.textarea`
  width: 100%;
  margin: 40px 0 60px;
  height: 16rem;
  padding: 20px 15px;
  background: #f9f9f9;
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid #a1a1a1;
`

const Continue = styled(Btn)`
  align-self: center;
  width: 22rem;
  background: ${({ theme: { palette } }) => palette.primary.main};
  color: #fff;
`

const FiveSteps = ({ handleNext }) => {
  return (
    <Wrapper>
      <Title>{fiveSteps.title}</Title>
      <Section>
        <ol>
          <Step>
            <h3>Submit your application. You're already DONE with this one!</h3>
            <p>
              Want to grow our team? Send your friends to fostertogether.co/help
              or contact us to set up a Neighborhood Party with local foster
              parents and your friends!
            </p>
          </Step>
          <Step>
            <h3>
              At your own pace, read and answer questions in all four training
              modules, then sign the contract.
            </h3>
            <p>
              More good news: you are already on Module Two of four! The full
              process should take two to three hours, and can happen over a few
              days or all at once.
            </p>
          </Step>
          <Step>
            <h3>
              Get an overview of the family closest to you, and agree to be
              matched.
            </h3>
            <MediaWrapper>
              <div>
                <p>
                  When a specific family in your area, or a family you meet at a
                  Neighborhood Party, is ready for help, Foster Together will
                  email or call you with a basic overview of the family. If you
                  agree, we'll help you exchange info and meet up.
                </p>
                <p>
                  NOTE: We are working statewide and expanding our outreach to
                  foster parents daily. It may take up to two months for us to
                  find a match for you, but rest assured, it’s a priority!
                </p>
              </div>
              <div>
                <img src={gettingMatchedVideo} />
              </div>
            </MediaWrapper>
          </Step>
          <Step>
            <h3>Set your initial meeting.</h3>
            <p>
              Let the foster family know a bit about yourself, and{' '}
              <span>
                offer three options of a time to meet the family and deliver
                their first meal.
              </span>
            </p>
            <MediaWrapper>
              <div>
                <p>
                  Foster Together will do the work{' '}
                  <span>
                    of sharing the foster parent's family evaluation (especially
                    dietary restrictions, and most-needed helping tasks) with
                    you.
                  </span>{' '}
                  By this time, both you and the foster family have signed the
                  contract (at the end of these four training modules) outlining
                  expectations and responsibilities for both parties.
                </p>
                <p>
                  <span>
                    Some foster parents prefer to meet at a neutral location
                    first,
                  </span>{' '}
                  to allow both parties to get a “feel” for each other, and make
                  sure no red flags arise. We want this match to be as natural
                  as getting to know a caring nextdoor neighbor.
                </p>
              </div>
              <div>
                <img src={fiveStepsImage} />
              </div>
            </MediaWrapper>
          </Step>
          <Step>
            <h3>Check in every month. Develop a relationship!</h3>
            <p>
              Drop the foster parents a line every few weeks to make sure your
              meals are received. Ask how the family enjoys the food, and be
              genuinely open to specific requests or changes, within reason.
            </p>
            <p>
              If desired and fitting into your time/money budget, you and the
              foster family are free to develop a relationship beyond meal
              drop-off, always with the oversight of the family’s county or
              agency (for childcare or transportation).
            </p>
          </Step>
        </ol>
      </Section>
      <Title>{fiveSteps.question.title}</Title>
      <Form>
        <Label>{fiveSteps.question.text}</Label>
        <Input placeholder='Your answer here' />
        <Continue onClick={handleNext}>Continue</Continue>
      </Form>
    </Wrapper>
  )
}

const BestPractices = ({ handleNext }) => {
  return (
    <Wrapper>
      <Title>{bestPractices.title}</Title>
      <Section>
        <ol>
          <Step>
            <h3>Be clear.</h3>
            <p>
              Before offering specific details on meal drop-off at the first
              meeting, the Helper already has an idea of what would work well
              for his or her schedule and budget (see questionnaire below).
            </p>
          </Step>
          <Step>
            <h3>Start with simple, small tasks.</h3>
            <MediaWrapper>
              <div>
                <p>
                  Foster Together starts all matches with the Family Helper
                  dropping off a meal once a month. You may like to expand your
                  responsibilities over the coming weeks or months, and each
                  foster family communicates with us about a variety of needs in
                  the home--not just meals. Before you commit to more, we
                  encourage you to establish a rhythm with only one task (meal
                  drop-off) within your time/money budget before adding more.
                </p>
              </div>
              <div>
                <img src={keepItSimpleVideo} />
              </div>
            </MediaWrapper>
            <p>
              In the past, some Helpers have jumped in enthusiastically (for
              example, creating ten freezer meals per month), then felt awkward
              when they had to cut back due to the grocery budget or time
              demands. You can always add tasks, but it's best not to over
              commit.
            </p>
          </Step>
          <Step>
            <h3>Stay focused</h3>
            <p>
              The Family Helper’s main job is to give the foster parent
              additional capacity (time, emotional energy, physical energy,
              encouragement) to remain emotionally present with the child(ren).
              Therefore, in addition to meals, specific helping tasks may
              include errands, housework, homework in a family setting, or
              supervising playtime while the parent is home. As the
              parent-helper relationship develops and trust is warranted, more
              interaction with the children may be helpful (driving,
              babysitting, respite), as approval by county or agency is granted.
              Keep in mind, though, the Family Helper’s primary job is not to
              develop a relationship with the child, become a mentor, or show
              special attention. In other words, you are a warm presence and
              practical help for the whole family, and not a "special friend" to
              the kids (you'll see specific examples and more explanations in
              Module Three).
            </p>
          </Step>
          <Step>
            <h3>If one party begins to feel uneasy...</h3>
            <p>
              If one party begins to feel uneasy about any aspect of the match,
              and clear, kind communication does not resolve the problem,
              contact Foster Together for assistance.
            </p>
          </Step>
          <Step>
            <h3>Let the relationship benefit others naturally.</h3>
            <p>
              Let the relationship benefit others naturally, as far as both
              parties are comfortable. Does the Helper have a friend who would
              like to deliver a meal? Does the Foster Parent know a fellow
              foster parent who needs help? Open communication and idea-sharing
              can make the best kinds of neighborly connection.
            </p>
          </Step>
          <Step>
            <h3>
              Approach the matching relationship as you would a new friendship.
            </h3>
            <p>
              Be courteous (on time, predictable), anticipate the needs of the
              other person, don’t make assumptions (please DO over-communicate
              at first!), and get to know each other.
            </p>
          </Step>
          <Step>
            <h3>Know when you need to get official.</h3>
            <p>
              If the family needs help with driving or babysitting, ask the
              family, or Foster Together, for background requirements from the
              foster care agency or county. You'll get the details of possible
              requirements in Module Four.
            </p>
          </Step>
        </ol>
      </Section>
      <Title>{bestPractices.question.title}</Title>
      <Form>
        <Label>{bestPractices.question.text}</Label>
        <Input placeholder='Your answer here' />
        <Continue onClick={handleNext}>Continue</Continue>
      </Form>
    </Wrapper>
  )
}

const ModuleTwo = () => {
  const [activeStep, setActiveStep] = useState(0)
  console.log(activeStep)

  const handleNext = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (activeStep === 0) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1)
    } else if (activeStep === 2) {
      setActiveStep(0)
    }
  }

  if (activeStep === 0) {
    return <FiveSteps handleNext={handleNext} />
  } else if (activeStep > 0) {
    return <BestPractices handleNext={handleNext} />
  }
}

export default ModuleTwo
