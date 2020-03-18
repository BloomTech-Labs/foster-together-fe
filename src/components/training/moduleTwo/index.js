import React from 'react'
import styled from 'styled-components'
import {
  fiveSteps,
  bestPractices,
  mealTips,
  beyondTheMeal,
  survey,
} from './data'
import { Btn } from '../../../GlobalStyles'

const Wrapper = styled.div`
  width: 80%;
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
`

const StepTitle = styled.h3`
  font-size: 2.4rem;
`

const Text = styled.p`
  font-size: 2.4rem;
  margin: 0 0 30px;
`

const Bold = styled.span`
  font-weight: bold;
  font-size: 2.4rem;
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

const FiveSteps = () => {
  return (
    <Wrapper>
      <Title>{fiveSteps.title}</Title>
      <Section>
        <ol>
          <Step>
            <StepTitle>
              Submit your application. You're already DONE with this one!
            </StepTitle>
            <Text>
              Want to grow our team? Send your friends to fostertogether.co/help
              or contact us to set up a Neighborhood Party with local foster
              parents and your friends!
            </Text>
          </Step>
          <Step>
            <StepTitle>
              At your own pace, read and answer questions in all four training
              modules, then sign the contract.
            </StepTitle>
            <Text>
              More good news: you are already on Module Two of four! The full
              process should take two to three hours, and can happen over a few
              days or all at once.
            </Text>
          </Step>
          <Step>
            <StepTitle>
              Get an overview of the family closest to you, and agree to be
              matched.
            </StepTitle>
            <Text>
              When a specific family in your area, or a family you meet at a
              Neighborhood Party, is ready for help, Foster Together will email
              or call you with a basic overview of the family. If you agree,
              we'll help you exchange info and meet up.
            </Text>
            <Text>
              NOTE: We are working statewide and expanding our outreach to
              foster parents daily. It may take up to two months for us to find
              a match for you, but rest assured, it’s a priority!
            </Text>
          </Step>
          <Step>
            <StepTitle>Set your initial meeting.</StepTitle>
            <Text>
              Let the foster family know a bit about yourself, and{' '}
              <Bold>
                offer three options of a time to meet the family and deliver
                their first meal.
              </Bold>
            </Text>
            <Text>
              Foster Together will do the work{' '}
              <Bold>
                of sharing the foster parent's family evaluation (especially
                dietary restrictions, and most-needed helping tasks) with you.
              </Bold>{' '}
              By this time, both you and the foster family have signed the
              contract (at the end of these four training modules) outlining
              expectations and responsibilities for both parties.
            </Text>
            <Text>
              <Bold>
                Some foster parents prefer to meet at a neutral location first,
              </Bold>{' '}
              to allow both parties to get a “feel” for each other, and make
              sure no red flags arise. We want this match to be as natural as
              getting to know a caring nextdoor neighbor.
            </Text>
          </Step>
          <Step>
            <StepTitle>Check in every month. Develop a relationship!</StepTitle>
            <Text>
              Drop the foster parents a line every few weeks to make sure your
              meals are received. Ask how the family enjoys the food, and be
              genuinely open to specific requests or changes, within reason.
            </Text>
            <Text>
              If desired and fitting into your time/money budget, you and the
              foster family are free to develop a relationship beyond meal
              drop-off, always with the oversight of the family’s county or
              agency (for childcare or transportation).
            </Text>
          </Step>
        </ol>
      </Section>
      <Title>{fiveSteps.question.title}</Title>
      <Form>
        <Label>{fiveSteps.question.text}</Label>
        <Input placeholder='Your answer here' />
        <Continue>Continue</Continue>
      </Form>
    </Wrapper>
  )
}

const ModuleTwo = () => {
  return <FiveSteps />
}

export default ModuleTwo
