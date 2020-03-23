import React from 'react'
import {
  Wrapper,
  Title,
  BackArrow,
  Section,
  List,
  Step,
  MediaWrapper,
  Media,
  Video,
  Form,
  Label,
  Input,
  Continue,
} from '../styles'
import { fiveStepsImage } from '../img'
import { SimpleStep } from './index'

const simpleStepData = [
  {
    title: `Submit your application. You're already DONE with this one!`,
    text:
      'Want to grow our team? Send your friends to fostertogether.co/help or contact us to set up a Neighborhood Party with local foster parents and your friends!',
  },
  {
    title:
      'At your own pace, read and answer questions in all four training modules, then sign the contract.',
    text:
      'More good news: you are already on Module Two of four! The full process should take two to three hours, and can happen over a few days or all at once.',
  },
]

export const FiveSteps = ({ handleBack, errors, touched }) => {
  return (
    <Wrapper>
      <Title>
        <BackArrow onClick={handleBack} />
        Five steps in the matching process
      </Title>
      <Section>
        <List>
          {simpleStepData.map((step, index) => (
            <SimpleStep key={index} title={step.title} text={step.text} />
          ))}
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
              <Media>
                <Video
                  url='https://player.vimeo.com/video/288660938'
                  controls={false}
                  width={480}
                />
              </Media>
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
              <Media>
                <img src={fiveStepsImage} alt='' />
              </Media>
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
        </List>
      </Section>
      <Title>Understanding the five steps: Complete before proceeding</Title>
      <Form>
        <Label>
          Do you have any questions about the five steps? Write them here so we
          can provide clarity. *
        </Label>
        <Input
          component='textarea'
          id='m2_q1'
          name='m2_q1'
          placeholder='Your answer here'
        />
        {errors?.m2_q1 && touched?.m2_q1 && (
          <p style={{ color: 'red' }}>{errors?.m2_q1}</p>
        )}
        <Continue type='submit'>Continue</Continue>
      </Form>
    </Wrapper>
  )
}
