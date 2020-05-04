import React from 'react'
import {
  Module4Page,
  MainContent7,
  Signature,
  Module4Submit,
  Module4Header,
  // BigLink1,
  BigInput,
  InputHolder,
  SignContain,
  Module4Link,
  Header7,
  Body,
  Header6,
  Signature2,
  Todo,
  Span2,
  Header8,
  NewSection,
  Span,
BigLink,
  Wrapper,
  Title
} from '../../TrainStyles.js'
import { useHistory } from 'react-router-dom'
import Progress from "../../TrainingModuleContainer";

export const Module44 = ({ handleBack }) => {
  const { push } = useHistory()

  return (
    <>
    <Wrapper>
    <Progress />
      <Title>
        <svg
          width='21'
          height='18'
          viewBox='0 0 27 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={handleBack}
        >
          <path
            d='M27 10.443H5.6129L13.3739 2.20163L11.3006 0L0 12L11.3006 24L13.3739 21.7984L5.6129 13.557H27V10.443Z'
            fill='#517E92'
          />
        </svg>
        What to do if you suspect abuse, or a child discloses abuse{' '}
      </Title>
      {/* <Module4Page> */}
        <Header6>
          <ol>
            <li>
              <Span2>Be prepared: </Span2>
              <BigLink
                href='https://themamabeareffect.org/prevent/when-to-speak-up/'
                target='blank'
              >
                {'  '}How to Know, Who to Call, What to Say (Click to read){' '}
              </BigLink>
            </li>
            <li>
              <span>You need to call it in:</span> Colorado has our own child
              abuse hotline: 1-800-CO4KIDS. Remember, you don't have to
              investigate abuse before making the call. That's not your job.
              Most people are too afraid to take this step, but the child needs
              you to do it.
              <br />
              <Todo>
                TO DO: Save this number, and send a screenshot of the contact in
                your phone to connect@fostertogether.co.
              </Todo>
            </li>
            <li>
              <span>Seek treatment for the child. </span>
              <BigLink href='https://www.safepassagecac.org/'>
                Safe Passage Colorado{' '}
              </BigLink>{' '}
              provides a seamless referral and treatment system, lessening the
              trauma to the child and caretaker during an investigation. Contact
              them here: safepassagecac.org/
            </li>
            <li>
              <span>Get help for the offender.</span> If, after reading this,
              you realize that someone you know (or yourself) is abusing
              children, please get help. Treatment can be very effective and may
              even save a life.{' '}
              <BigLink href='https://www.atsa.com/referral'>
                {' '}
                This referral form{' '}
              </BigLink>{' '}
              with the Association for Treatment of Sexual Offenders is
              completely anonymous: atsa.com/referral
            </li>
          </ol>
        </Header6>
        <Body>
          P.S. For those who want to do even more to help kids: For Foster
          Together to recruit and train our average volunteer, it costs us $200.
          That's pretty good when you consider the long term friendships we're
          providing to foster families. If you'd like to help us cover the costs
          for the next volunteer, please join our donor team! CLICK HERE.
        </Body>
        <Header7>
          Understanding actions in cases of potential abuse: Complete before
          proceeding
        </Header7>
        <NewSection>
          <MainContent7>
            What Colorado-based number do you call if you suspect a child is
            being abused?
          </MainContent7>
          <InputHolder>
            <Signature placeholder='Your Answer Here' />
          </InputHolder>
          <MainContent7>
            What is the name of the local program that walks abused kids through
            the investigation and initial recovery process? *
          </MainContent7>
          <InputHolder>
            <Signature placeholder='Your Answer Here' />
          </InputHolder>
          <MainContent7>
            Where can you request a referral for the treatment of someone who
            has abused children? *
          </MainContent7>
          <InputHolder>
            <Signature placeholder='Your Answer Here' />
          </InputHolder>
          <MainContent7>
            From what you’ve learned so far how can we improve the modules
            you’ve completed? What would you add, shorten, or eliminate? This
            program is always looking for ways to be better, so your feedback is
            definitely helpful!
          </MainContent7>
        </NewSection>
        <BigInput placeholder='Your Answer Here' />
        <Module4Submit
          onClick={() => {
            push('./module5')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Submit
        </Module4Submit>
      {/* </Module4Page> */}
      </Wrapper>
    </>
  )
}

export default Module44;