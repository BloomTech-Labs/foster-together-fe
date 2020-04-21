import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Wrapper,
  BackArrow,
  Title,
  Page,
  Letter,
  Circle,
  LetterCircle,
  LetterText,
 
} from '../TrainStyles'
import next from '../TrainingIcons/next.png'
import TrainingNav from '../TrainingNav/NavBar'

function LetterTitle() {
  const { push } = useHistory()
  return (
    <Title>
      <BackArrow
        onClick={() => {
          push('/modulestartcontinued')
        }}
      />
      A letter of gratitude
    </Title>
  )
}

const Text1 = () => {
  return (
    <>
      <LetterText> Dear Foster Neighbor,</LetterText>
      <LetterText>
        As one of our first matches, you are about to be living proof that
        foster care isn’t just a sterile system, but a community of good people
        making sure a kid gets what he or she needs.
      </LetterText>
      <LetterText>
        With your friendly support, we will increase the healing power of the
        entire home,<b> creating more stability for kids.</b>
      </LetterText>
      <LetterText>
        In a system so confusing and demanding as child welfare, the humanity
        and customization of a match like yours is where the magic happens.
      </LetterText>
    </>
  )
}

const Text2 = () => {
  return (
    <>
      <LetterText>
        While good neighbors want to do something simple to help a foster
        family, most people in Colorado don’t know a foster parent. We're fixing
        this by matching helpers with foster families within 10 miles of each
        other{' '}
        <b>
          with the simple commitment of dropping off a meal once a month (and
          freedom, but not obligation, to do more).
        </b>
      </LetterText>
      <LetterText>
        All four modules of this training should take under two hours to read
        and complete.
      </LetterText>
    </>
  )
}

const Text3 = () => {
  return (
    <>
      <LetterText>
        My goal is NEVER to overwhelm you or give you needless busywork (who has
        time for that?),
        <b>
          {' '}
          but to set you up for success by answering common misconceptions and
          answering the questions you may not know to ask yet.
        </b>
        This is what makes a Family Helper match last for a long time, rather
        than quickly fizzling out.
      </LetterText>
      <LetterText>
        At the end of each section, fill out the short form to show your
        comprehension and help you prepare for your match. When you're done with
        the whole thing, complete the contract, and you'll be ready to be
        matched!
      </LetterText>
    </>
  )
}

const Text4 = () => {
  return (
    <>
      <LetterText>
        Enjoy, and drop me a line if you think of any way I can improve the
        process. <br />
        connect@fostertogether.co
      </LetterText>
      <LetterText>
        Thrilled to change the story of foster care together,
      </LetterText>
      <LetterText>Hope Forti, Founding Foster Mom</LetterText>
    </>
  )
}

const LetterContext = () => {
  return (
    <>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </>
  )
}

const ModuleStart = () => {
  const { push } = useHistory()
  return (
    <>
      <TrainingNav />
   
      <Wrapper>
        <LetterTitle />
        <Page>
          <Letter>
            <LetterContext />
          </Letter>
          <LetterCircle>
            <Circle
              onClick={() => {
                push('/modulestartcontinued')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img src={next} type='button' width='100%' alt='next button' />
            </Circle>
            <h3>Continue</h3>
          </LetterCircle>
        </Page>
      </Wrapper>
    </>
  )
}

export default ModuleStart
