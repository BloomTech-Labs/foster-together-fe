import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { ModuleOneSchema } from '../../../utils/yupSchemas'

import {
  Wrapper,
  Title,
  BackArrow,
  MainContent,
  Submit,
  Footer,
  Label,
  Input,
  Error,
  FlexRow,
  Div,
} from '../TrainStyles'
import Stepper from '../TrainingStepper'

import TrainingNav from '../TrainingNav/NavBar'

const Context3 = () => {
  return (
    <Div>
      <h1>1. Help families beat isolation.</h1>
      <MainContent>
        You’ve probably heard the idea that foster parents are heroes or saints.
        But they’re regular people pushing through stress, making lunches,
        running late to work, and fretting over their parenting methods, and the
        "superhero" ideal often makes them feel even more alone. Because of the
        high emotional needs at home (everything from confused kids feeling far
        away from mom, dad, and "normal," to the toll of saying goodbye to one
        dearly loved child while learning the rhythms of a new little one), they
        often feel inadequate and exhausted. In an ideal world, foster parents
        could depend on their existing circle of friends as support, and some
        do. But lack of general awareness about the needs of kids dealing with
        trauma means that foster parents don’t often share their joys and
        struggles, and worry about burning out their friends. Foster Together
        aims to be the “next best thing” to meeting a new neighbor who commits
        to regular, simple support--no guilt, no pressure.'
      </MainContent>
    </Div>
  )
}

const Context4 = () => {
  return (
    <Div>
      <h1>2. Go beyond transactions. Build relationships.</h1>
      <MainContent>
        You might be surprised to hear that delivering a meal is only half of
        your service to the foster family. The rest is your presence. It’s your
        willingness to say “I see you, and I care about you and the kids in your
        home.” None of us--no matter how much money we make or how capable we
        look at staying patient in a chaotic day--want to go through life
        without belonging and friendship. This is not just about feeding people.
        We wanted to create a simple, practical way for you to be present in the
        life of your foster family neighbors.
      </MainContent>
    </Div>
  )
}

const Context5 = () => {
  return (
    <Div>
      <h1>3. More relationships = more transparency = safer kids. </h1>
      <MainContent>
        While Foster Together tends to attract excellent, caring, engaged foster
        parents, we’ve heard enough stories from teens in foster care to know
        that some foster parents do not prioritize the safety or thriving of
        kids in their care. With more neighbors paying attention to families in
        natural, friendly ways, the risks of abuse or neglect while in foster
        care will decrease.
      </MainContent>
    </Div>
  )
}

const Context6 = () => {
  return (
    <Div>
      <h1>4. See beyond your comfort zone/social circle.</h1>
      <MainContent>
        This one’s just for you, helper. We are in an era of political tension,
        social media debates, and moral questions (racism, institutional
        corruption, sexual violation, and equity). Making a personal investment
        of time and attention for families and kids in foster care is one of the
        simplest ways to get out of our own echo-chamber and face the issues in
        the lives of our fellow humans. You’ll also probably interact with
        “problems” that are invisible or nonexistent in your own social circle,
        allowing you to challenge your definition of “normal.” We can’t
        guarantee that you’ll know what to do in every situation, but if you
        keep an open, humble heart, you will absolutely come through this
        experience with a richer understanding of the lives and needs of kids in
        your town. And we, and the foster parents, are always here to help
        answer your questions.
      </MainContent>
    </Div>
  )
}

const Context7 = () => {
  return (
    <Div>
      <h1>5. Help great foster homes stay "open"</h1>
      <MainContent>
        In Colorado, the average foster home “deactivates” (or stops fostering)
        after two years. Sometimes this is due to adopting, and needing space to
        focus on helping the child feel secure and permanent in the home. But
        often, it is due to frustration with the way things work, especially
        exhaustion and isolation. A lack of experienced, savvy, compassionate,
        tested foster homes ultimately hurts the kids. Your investment of a few
        hours a month may help excellent families stay in it for the long haul.
      </MainContent>
    </Div>
  )
}

const Context8 = ({ errors, touched }) => {
  return (
    <>
      <Title>What you offer: Complete before proceeding</Title>
      <Label>
        Are any of the "reasons to help" listed above new to you? In your own
        words, how do you anticipate this aspect enriching your life or the
        foster parents' lives? (2+ sentences) *
        <Input component='textarea' id='m1_q1' name='m1_q1' />
        {errors?.m1_q1 && touched?.m1_q1 && <Error>{errors?.m1_q1}</Error>}
      </Label>
      <Label>
        How can we improve this module? What would you add, shorten, or
        eliminate? This program is just getting started, so your feedback is
        helpful!
        <Input component='textarea' id='m1_q2' name='m1_q2' />
        {errors?.m1_q2 && touched?.m1_q2 && <Error>{errors?.m1_q2}</Error>}
      </Label>
    </>
  )
}

function TitleWrapper() {
  const { push } = useHistory()
  return (
    <Title>
      <BackArrow
        onClick={() => {
          push('/module0')
        }}
      />
      Benefits of supporting foster families
    </Title>
  )
}

const Img1 = () => {
  return (
    <FlexRow>
      <Context3 />
      <img
        src={require('../TrainingIcons/image2.png')}
        style={{
          'max-height': '350px',
          'max-width': '300px',
          'border-radius': '10px',
        }}
        alt=''
      />
    </FlexRow>
  )
}

const Img2 = () => {
  return (
    <FlexRow>
      <Context6 />
      <img
        src={require('../TrainingIcons/image19.png')}
        style={{
          'max-height': '350px',
          'max-width': '300px',
          'border-radius': '10px',
        }}
        alt=''
      />
    </FlexRow>
  )
}

const Context = () => {
  return (
    <>
      <Img1 />
      <Context4 />
      <Context5 />
      <Img2 />
      <Context7 />
    </>
  )
}

function ModuleOne() {
  const { push } = useHistory()

  return (
    <section>
      <TrainingNav />
      <Wrapper>
        <TitleWrapper />
        <Context />
        <Formik
          initialValues={{
            m1_q1: '',
            m1_q2: '',
          }}
          validationSchema={ModuleOneSchema}
          onSubmit={() => push('/module2')}
        >
          {props => (
            <Form>
              <Context8 {...props} />
              <Submit type='submit'>Submit</Submit>
            </Form>
          )}
        </Formik>
      </Wrapper>
      <Footer>
        <Stepper activeStep={0} />
      </Footer>
    </section>
  )
}

export default ModuleOne
