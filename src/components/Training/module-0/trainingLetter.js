import React from 'react'
import {
  Page,
  Letter,
  MainContent,
  Circle,
  TitleContainer,
  BigTitle,
  LetterCircle,
  LetterDiv,
  LetterText,
} from '../TrainStyles'
import next from '../TrainingIcons/next.png'
import TrainingNav from '../TrainingNav/NavBar'

function LetterTitle({ props }) {
  return (
    <TitleContainer>
      <img
        src={require('../../../images/icons/back-arrow.svg')}
        onClick={() => {
          props.history.push('/module0')
        }}
        alt=''
      />
      <BigTitle>A letter of gratitude</BigTitle>
    </TitleContainer>
  )
}

const Text1 = () => {
  return (
    <LetterDiv>
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
    </LetterDiv>
  )
}

const Text2 = () => {
  return (
    <LetterDiv>
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
    </LetterDiv>
  )
}

const Text3 = () => {
  return (
    <LetterDiv>
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
    </LetterDiv>
  )
}

const Text4 = () => {
  return (
    <LetterDiv>
      <LetterText>
        Enjoy, and drop me a line if you think of any way I can improve the
        process. <br />
        connect@fostertogether.co
      </LetterText>
      <LetterText>
        Thrilled to change the story of foster care together,
      </LetterText>
      <LetterText>Hope Forti, Founding Foster Mom</LetterText>
    </LetterDiv>
  )
}

const LetterContext = () => {
  return (
    <LetterDiv>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </LetterDiv>
  )
}

const ModuleLetter = props => {
  return (
    <div>
      <TrainingNav />
      <LetterTitle />
      <Page>
        <Letter>
          <LetterContext />
        </Letter>
        <LetterCircle>
          <Circle
            onClick={() => {
              props.history.push('/modulestart')
            }}
          >
            <img src={next} type='button' width='100%' alt='next button' />
          </Circle>
          <h3>Continue</h3>
        </LetterCircle>
      </Page>
    </div>
  )
}

export default ModuleLetter
