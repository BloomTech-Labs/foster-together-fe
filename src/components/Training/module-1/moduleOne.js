import React, { useState } from 'react'
import Player from 'react-player'
import {
  BigTitle,
  Page,
  Header,
  MainContent,
  Section,
  PlayerWrapper,
  Submit,
  Footer,
  Input,
} from '../TrainStyles'
import Stepper from '../TrainingStepper'
import Navigation from '../../AdminDash/Navigation/Navigation'
import TrainingNav from '../TrainingNav/NavBar'

const Context1 = () => {
  return (
    <MainContent>
      My goal is NEVER to overwhelm you or give you needless busywork (who has
      time for that?), but to set you up for success by answering common
      misconceptions and answering the questions you may not know to ask yet.
      This is what makes a Family Helper match last for a long time, rather than
      quickly fizzling out. <br />
      At the end of each section, fill out the short form to show your
      comprehension and help you prepare for your match. When you're done with
      the whole thing, complete the contract, and you'll be ready to be matched!{' '}
      <br />
      Enjoy, and drop me a line if you think of any way I can improve the
      process. connect@fostertogether.co <br />
      <br />
      Thrilled to change the story of foster care together, <br />
      Hope Forti, Founding Foster Mom.
    </MainContent>
  )
}

const Context2 = () => {
  return (
    <MainContent>
      “Anyone who has ever volunteered for anything knows that oftentimes, the
      scope of the volunteer role grows and grows and often becomes
      overwhelming. I can honestly say that I’ve been doing this for almost 6
      months and at no point have I felt overwhelmed in the least. This is a way
      to help that is super customized based on what I can do, and it’s
      manageable in real life.” - Michele, Foster Family Helper in Broomfield{' '}
      <br />
      <br />
      “Doubling my dinner recipe or taking a walk to the park with my new little
      friend doesn't take much extra effort, compared to the satisfaction of
      investing in my neighbors.” - Nicole, Foster Family Helper in Arvada{' '}
      <br />
      <br />
      “The process has been easy and wonderful. You're creating something
      beautiful!” - Sara, Foster Family Helper and monthly donor in Castle Pines
      <br />
      <br />
    </MainContent>
  )
}

function ModuleOne(props) {
  const [form, setForm] = useState({
    answer1: '',
    answer2: '',
  })
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section>
      <TrainingNav />
      <Page>
        <BigTitle>ONE: WHY HELP A FOSTER FAMILY?</BigTitle>
        <PlayerWrapper>
          <Player
            url='https://player.vimeo.com/video/288657929'
            controls='false'
          />
        </PlayerWrapper>
        <Section>
          <Context1 />
          <img
            src={require('../TrainingIcons/image1.png')}
            style={{ 'max-height': '350px', margin: 'auto' }}
            alt=''
          />
        </Section>

        <Header>Testimonials</Header>
        <Section>
          <img
            src={require('../TrainingIcons/image2.png')}
            style={{
              'max-height': '350px',
              'max-width': '300px',
              margin: 'auto',
              'border-radius': '10px',
            }}
            alt=''
          />
          <Context2 />
        </Section>
        <Header>BENEFITS OF SUPPORTING FOSTER FAMILIES</Header>
        <Section>
          <div>
            <div>
              <h1>1. Help families beat isolation</h1>
              <p>
                You’ve probably heard the idea that foster parents are heroes or
                saints. But they’re regular people pushing through stress,
                making lunches, running late to work, and fretting over their
                parenting methods, and the "superhero" ideal often makes them
                feel even more alone. Because of the high emotional needs at
                home (everything from confused kids feeling far away from mom,
                dad, and "normal," to the toll of saying goodbye to one dearly
                loved child while learning the rhythms of a new little one),
                they often feel inadequate and exhausted. In an ideal world,
                foster parents could depend on their existing circle of friends
                as support, and some do. But lack of general awareness about the
                needs of kids dealing with trauma means that foster parents
                don’t often share their joys and struggles, and worry about
                burning out their friends. Foster Together aims to be the “next
                best thing” to meeting a new neighbor who commits to regular,
                simple support--no guilt, no pressure.'
              </p>
            </div>
            <div>
              <h1>2. Go beyond transactions. Build relationships.</h1>
              content='You might be surprised to hear that delivering a meal is
              only half of your service to the foster family. The rest is your
              presence. It’s your willingness to say “I see you, and I care
              about you and the kids in your home.” None of us--no matter how
              much money we make or how capable we look at staying patient in a
              chaotic day--want to go through life without belonging and
              friendship. This is not just about feeding people. We wanted to
              create a simple, practical way for you to be present in the life
              of your foster family neighbors.'
            </div>
            <div>
              title='3. More relationships = more transparency = safer kids'
              content='While Foster Together tends to attract excellent, caring,
              engaged foster parents, we’ve heard enough stories from teens in
              foster care to know that some foster parents do not prioritize the
              safety or thriving of kids in their care. With more neighbors
              paying attention to families in natural, friendly ways, the risks
              of abuse or neglect while in foster care will decrease.'
            </div>
            <div>
              title='4. See beyond your comfort zone/ social circle'
              content='This one’s just for you, helper. We are in an era of
              political tension, social media debates, and moral questions
              (racism, institutional corruption, sexual violation, and equity).
              Making a personal investment of time and attention for families
              and kids in foster care is one of the simplest ways to get out of
              our own echo-chamber and face the issues in the lives of our
              fellow humans. You’ll also probably interact with “problems” that
              are invisible or nonexistent in your own social circle, allowing
              you to challenge your definition of “normal.” We can’t guarantee
              that you’ll know what to do in every situation, but if you keep an
              open, humble heart, you will absolutely come through this
              experience with a richer understanding of the lives and needs of
              kids in your town. And we, and the foster parents, are always here
              to help answer your questions.'
            </div>
            <div>
              title='5. Help great foster homes stay "open"' content='In
              Colorado, the average foster home “deactivates” (or stops
              fostering) after two years. Sometimes this is due to adopting, and
              needing space to focus on helping the child feel secure and
              permanent in the home. But often, it is due to frustration with
              the way things work, especially exhaustion and isolation. A lack
              of experienced, savvy, compassionate, tested foster homes
              ultimately hurts the kids. Your investment of a few hours a month
              may help excellent families stay in it for the long haul.'
            </div>
          </div>
        </Section>
        <Section>
          <Header>WHAT YOU OFFER: COMPLETE BEFORE PROCEEDING</Header>
        </Section>
        <Section>
          <MainContent>
            Are any of the "reasons to help" listed above new to you? In your
            own words, how do you anticipate this aspect enriching your life or
            the foster parents' lives? (2+ sentences) *
          </MainContent>
        </Section>
        <Input name='answer1' value={form.answer1} onChange={handleChange} />
        <Section>
          <MainContent>
            How can we improve this module? What would you add, shorten, or
            eliminate? This program is just getting started, so your feedback is
            helpful!
          </MainContent>
        </Section>
        <Input name='answer2' value={form.answer2} onChange={handleChange} />
        <Submit
          onClick={() => {
            props.history.push('/module2')
          }}
        >
          Submit
        </Submit>
        <Footer>
          <Stepper activeStep={0} />
        </Footer>
      </Page>
    </section>
  )
}

export default ModuleOne
