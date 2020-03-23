import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Page,
  Section2,
  MainContent,
  Input,
  Submit,
  ATag,
  Header,
  Question,
  Title,
  MainContent1,
  Paragraph,
  Span,
  Header1,
  Paragraph1,
  Video,
  Or,
  Header2,
} from './module1styles'
import Player from 'react-player'
import TrainingNav from '../TrainingNav/NavBar'
import { TitleContainer } from '../TrainStyles'

export default function Module1(props) {
  const [section, setSection] = useState(1)
  const { push } = useHistory()
  return (
    <>
      <TrainingNav />
      <Header>
        <svg
          width='21'
          height='17'
          viewBox='0 0 27 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => push('/Module5')}
        >
          <path
            d='M27 10.443H5.6129L13.3739 2.20163L11.3006 0L0 12L11.3006 24L13.3739 21.7984L5.6129 13.557H27V10.443Z'
            fill='#517E92'
          />
        </svg>
        When do you need a background check?
      </Header>
      <Page>
        <Section2>
          <Title>Basic Overview of Safety and Legal Requirements: </Title>
          <MainContent1>
            <Paragraph>
              We perform a basic Colorado Arrest Records check before each
              match. Foster Together defers to foster parents whether to reveal
              their home address after the initial meeting with the helping
              family. In the case of Foster Family Helpers who desire to do more
              with families (babysitting, driving, etc), Foster Together
              <Span>defers to the licensing county or agency</Span>, as
              background check and training requirements differ across
              institutions.
            </Paragraph>
            <Video>
              <Player
                url='https://player.vimeo.com/video/288657921'
                width='500px'
                height='300px'
              />
            </Video>
          </MainContent1>
          <MainContent>
            <Question>Option One: Casual Helping</Question>
            <Paragraph1>
              While there is no legal requirement for a background check or
              training for casual contact with a foster family (i.e. dropping
              off meals, meeting at the park with the foster parents and kids),
              we do run a Colorado Arrest Records check as a buffer. As a Foster
              Family Helper, you are developing a natural relationship with the
              family, and are allowed to help out as any other friend or
              neighbor would. As a best practice, Foster Together Colorado seeks
              to deter predators from our matching program by educating families
              in sexual abuse prevention, red flags for predatory grooming, and
              body safety rules (more info in the next section). We know that
              talking openly about prevention with adults in the child’s life is
              the best way to keep kids safe. As with any family connections,
              foster parents have the responsibility to be aware and cautious as
              all parties earn trust.
            </Paragraph1>
            <br></br>
            <Question>
              Option Two: Regular Babysitting for Less than Six Hours, or
              Driving Children{' '}
            </Question>
            <Paragraph1>
              For anyone who babysits for less than six hours or transports kids
              in a car, foster parents may be required to do one of the
              following. Agency and county requirements likely include:
            </Paragraph1>
            <ul>
              <li>
                CBI, FBI, TRAILS (BIU), sexual offender registry background
                checks
              </li>

              <li>Proof of auto insurance and valid driver’s license. </li>

              <li>
                Check references, personal interview, training, and/or other
                agency-specific vetting.
              </li>
              <Or>OR</Or>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            <Question>
              Option Three: Babysitting More than Six Hours or Overnight Respite
              in Foster Home
            </Question>
            <Paragraph1>
              For anyone who provides respite (babysitting for over six hours or
              overnight) in the licensed foster home, agency and county
              requirements likely include:
            </Paragraph1>
            <ul>
              <li>
                CBI, FBI, TRAILS (BIU), sexual offender registry background
                checks
              </li>
              <li>Core foster care training on rules and regulations</li>
              <li> CPR and first aid certification</li>
              <Or>OR</Or>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            <Question>
              Option Four: Babysitting Overnight in Family Helper’s Home
            </Question>
            <Paragraph1>
              For anyone who provides respite (babysitting for over six hours or
              overnight) in their own home, agency and county requirements
              likely include:
            </Paragraph1>
            <ul>
              <li>
                CBI, FBI, TRAILS, and sexual offender registry background checks
              </li>
              <li>CPR and first aid certification</li>
              <li>
                Full home study (foster home certification process) on the
                Family Helper’s home
              </li>
              <li>Full state-required foster care training</li>
              <Or>OR</Or>
              <li>
                Acceptability under the agency or county’s individual
                interpretation of the Reasonable and Prudent Parenting Standard.
              </li>
            </ul>
            <Paragraph1>
              At any time in the match, foster parents and Foster Family Helpers
              may contact the agency or county to request specific next steps
              for allowing childcare, transportation, or other contact with
              kids. Foster Together is willing to help with this process. Foster
              Family Helpers are encouraged to pay for their own background
              checks, but Foster Together is willing to subsidize these costs if
              needed.
            </Paragraph1>
          </MainContent>
        </Section2>
        <Section2>
          <Header1>
            Understanding legal requirements: Complete before proceeding
          </Header1>
          <Header2>
            Please let us know if you have any questions about the requirements
            listed here, so we can clarify. *
          </Header2>
        </Section2>
        <Input />
        <ATag href='#section2'>
          <Submit
            onClick={() => {
              setSection(2)
            }}
          >
            Continue
          </Submit>
        </ATag>
      </Page>
    </>
  )
}
