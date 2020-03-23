import React, { useState } from 'react'
import {
  Page,
  Section2,
  MainContent,
  Signature,
  Submit,
  Header,
  BigLink,
  InputHolder,
  SignContain,
  Link,
  Section,
  Header1,
} from './module4styles.js'
import Player from 'react-player'
import { useHistory } from 'react-router-dom'
import TrainingNav from '../TrainingNav/NavBar'

export default function Module4(props) {
  const [section, setSection] = useState(1)
  const { push } = useHistory()

  return (
    <>
      <TrainingNav />
      <Header>
        <svg
          width='21'
          height='18'
          viewBox='0 0 27 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => push('/Module4')}
        >
          <path
            d='M27 10.443H5.6129L13.3739 2.20163L11.3006 0L0 12L11.3006 24L13.3739 21.7984L5.6129 13.557H27V10.443Z'
            fill='#517E92'
          />
        </svg>
        What to do if you suspect abuse, or a child discloses abuse{' '}
      </Header>
      <Page id='section4'>
        <Section2>
          <Header1>
            1. Be prepared:{' '}
            <BigLink
              href='https://themamabeareffect.org/prevent/when-to-speak-up/'
              target='blank'
            >
              {'  '}How to Know, Who to Call, What to Say (Click to read){' '}
            </BigLink>
          </Header1>{' '}
          <br />
          <Header1>
            2. You need to call it in: Colorado has our own child abuse hotline:
            1-800-CO4KIDS. Remember, you don't have to investigate abuse before
            making the call. That's not your job. Most people are too afraid to
            take this step, but the child needs you to do it. <br /> TO DO: Save
            this number, and send a screenshot of the contact in your phone to
            connect@fostertogether.co.
          </Header1>{' '}
          <br />
          <Header1>
            3. Seek treatment for the child.{' '}
            <BigLink href='https://www.safepassagecac.org/'>
              Safe Passage Colorado{' '}
            </BigLink>{' '}
            provides a seamless referral and treatment system, lessening the
            trauma to the child and caretaker during an investigation. Contact
            them here: safepassagecac.org/
          </Header1>
          <Header1>
            4. Get help for the offender. If, after reading this, you realize
            that someone you know (or yourself) is abusing children, please get
            help. Treatment can be very effective and may even save a life.{' '}
            <BigLink href='https://www.atsa.com/referral'>
              {' '}
              This referral form{' '}
            </BigLink>{' '}
            with the Association for Treatment of Sexual Offenders is completely
            anonymous: atsa.com/referral
          </Header1>
        </Section2>
        <Section2>
          <MainContent>
            What Colorado-based number do you call if you suspect a child is
            being abused?
          </MainContent>
          <InputHolder>
            <Signature />
          </InputHolder>
          <MainContent>
            What is the name of the local program that walks abused kids through
            the investigation and initial recovery process? *
          </MainContent>
          <InputHolder>
            <Signature />
          </InputHolder>
          <MainContent>
            Where can you request a referral for the treatment of someone who
            has abused children? *
          </MainContent>
          <InputHolder>
            <Signature />
          </InputHolder>
        </Section2>
        <Submit>Submit</Submit>
      </Page>
    </>
  )
}
