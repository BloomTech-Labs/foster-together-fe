import React, { useState } from 'react'
import {
  Page1,
  Header,
  Body,
  Body1,
  MainContent2,
  MainContent3,
  Body2,
  Half1,
  Question1,
  MainContent4,
  Section2,
  Header3,
  Image2,
  Span,
  Section1,
  Module4Input,
  Module4Submit,
  ClickHere,
 ATag1,
  Header4,
  Body3,
  Module4Link,
  Quote,
  Statement,
  Video1,
} from '../../TrainStyles.js'
import Player from 'react-player'
import Progress from "../../TrainingModuleContainer";


export const Module42 = ({ handleNext, handleBack }) => {

  return (
    <>
    <Page1>
     <Progress />
     
      <Header>
        <svg
          width='21'
          height='22'
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
        Sexual abuse prevention{' '}
      </Header>
      
        <Section1>
          <MainContent2>
            <Section2>
              <Body>
                Because one in three girls and one in four boys will be targets
                for sexual abuse, we can't leave this part out. <br />
              </Body>
              <Body>
                Because kids in foster care are one of the groups most at-risk
                to be abused, we can't afford not to prepare every Foster Family
                Helper to prevent abuse. <br />
              </Body>
              <Body>
                <Span>
                  For many people, this may be the toughest part of the Foster
                  Together process.{' '}
                </Span>
                And we thank you for doing it anyway. <br />
              </Body>
              <Body>
                We are looking for adults who are willing to feel uncomfortable
                in this training, so that they can decrease the likelihood of
                abuse for the kids they care about. <br />
              </Body>
              <Body1>
                We are looking for adults who are willing to feel <br />
                uncomfortable in this training, so that they can <br />
                decrease the likelihood of abuse for the kids they care about.{' '}
              </Body1>
            </Section2>
            <Video1>
              <Player
                url='https://www.youtube.com/embed/ULGJphesPnk'
                width='550px'
                height='400px'
              />
            </Video1>
          </MainContent2>
          <Body1>
            <Span>
              We do not include this section to scare you or make people
              super-suspicious of each other.{' '}
            </Span>
            Rather, we want to create a Foster Together culture of open
            conversations and clarity.
            <br />
          </Body1>
          <Half1>
            <Image2
              src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525386132069-86G9CUPJYIFKEVYT5SKY/ke17ZwdGBToddI8pDm48kAUFOTPMSVxuKvNFAx6DKiZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYc0yAe_x11zxahcI_hfw238yWAp0jGKzhuVZoU5dfkFlA/FT+37.jpg?format=750w'
              width='450px'
              height='570px'
            />
            <MainContent3>
              <Body2>
                The main point is that secrets and wrong motivations can't exist
                in the light of open communication and savvy supervision. So if
                you have nothing to hide, you have nothing to worry about.{' '}
                <br />
                <br></br>
                We also know that the most effective way to prevent predators
                from targeting our kids is by setting the expectation for all
                adults involved that private parts are off limits and secrets
                are a no-go. As a foster care volunteer opportunity, we realize
                that someone who wants to gain access to children might see
                Foster Together as an easy target.{' '}
                <Span>
                  Requiring this training for all foster parents and Family
                  Helpers is the best way we know to say "Not on our watch."
                </Span>
                <br></br>
                <br></br>
                Please read the two linked articles, review the chart of “body
                safety rules,” and fill out the following form, stating that
                <Span>
                  {' '}
                  you understand that our foster parents are aware of red flags
                  for sexual abuse, and regularly enforcing the rules below.
                </Span>
              </Body2>
            </MainContent3>
          </Half1>
          <Header4>Again, thank you for sticking with us.</Header4>
        </Section1>
        <Section2>
          <Body3>
            <Span>PLEASE CLICK TO READ:</Span>
            <Module4Link href='https://parentingsafechildren.com/what-offenders-want-you-to-know/'>
              {' '}
              WHAT SEXUAL OFFENDERS WANT YOU TO KNOW
            </Module4Link>
          </Body3>
          <MainContent4>
            <Statement>
              Excerpt: Pay attention to our behaviors. <br />
            </Statement>
            People who sexually abuse children methodically groom to gain
            access—and then compliance. <br />
            <Quote>
              “The kids I abused were all seeking love. I would shower the child
              with gifts, special treatment and attention, and painstakingly
              move toward the moment when I could gain compliance and cross the
              line.”
            </Quote>
            In some instances, the parent is also being groomed through a level
            of generosity that is probably too good to be true – free
            babysitting, financial support, and perhaps an excessive willingness
            to “help out.” <br /> <br />
            There is good news. With knowledge, you can recognize grooming
            behaviors and with courage, you can speak up. <br /> <br />
            <Span>Lesson:</Span> Pay attention to these kinds of behaviors and
            patterns: favoring children, special treatment, allowing kids to
            break rules, gift-giving, lots of attention, a listening ear, taking
            a child’s side, manipulation, introducing kids to sexual material,
            or talking about sex (i.e., sexualizing the relationship). Read the
            rest by clicking{' '}
            <Module4Link href='https://parentingsafechildren.com/what-offenders-want-you-to-know/'>
              here.
            </Module4Link>
            <br />
            <br />
          </MainContent4>
        </Section2>
        <Section2>
          <MainContent4>
            <ClickHere>
              <Span>
                For a deeper idea of how to keep kids safe, you might want to
                read
              </Span>{' '}
              Top 10 Questions on Preventing Sexual Abuse (Includes
              developmentally appropriate explanations, click{' '}
              <Module4Link href='https://parentingsafechildren.com/your-top-10-questions-about-body-safety-2/'>
                HERE
              </Module4Link>{' '}
              to read)
            </ClickHere>
          </MainContent4>
          <Header3>
            Understanding sexual abuse prevention: Complete before proceeding
          </Header3>
          <Question1>
            What did you learn from the above article(s)? (3+ sentences)
          </Question1>
        </Section2>
        <Module4Input placeholder='Your Answer Here' />
        <ATag1>
          <Module4Submit onClick={handleNext}>Continue</Module4Submit>
        </ATag1>
      </Page1>
    </>
  )
}

export default Module42;