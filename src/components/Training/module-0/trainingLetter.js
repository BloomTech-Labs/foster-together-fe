import React from 'react'
import { Page, Letter, MainContent, Circle } from '../TrainStyles'
import next from '../TrainingIcons/next.png'
import TrainingNav from '../TrainingNav/NavBar'

const ModuleLetter = props => {
  return (
    <div>
      <TrainingNav />
      <Page>
        <Letter>
          <MainContent>
            Dear Foster Neighbor, <br /> <br />
            As one of our first matches, you are about to be living proof that
            foster care isn’t just a sterile system, but a community of good
            people making sure a kid gets what he or she needs. <br /> With your
            friendly support, we will increase the healing power of the entire
            home, creating more stability for kids. <br /> <br />
            In a system so confusing and demanding as child welfare, the
            humanity and customization of a match like yours is where the magic
            happens. <br /> While good neighbors want to do something simple to
            help a foster family, most people in Colorado don’t know a foster
            parent. We're fixing this by matching helpers with foster families
            within 10 miles of each other, with the simple commitment of
            dropping off a meal once a month (and freedom, but not obligation,
            to do more). <br /> All four modules of this training should take
            under two hours to read and complete.
          </MainContent>
        </Letter>
        <Circle
          onClick={() => {
            props.history.push('/module1')
          }}
        >
          <img src={next} width='100%' alt='next button' />
        </Circle>
      </Page>
    </div>
  )
}

export default ModuleLetter
