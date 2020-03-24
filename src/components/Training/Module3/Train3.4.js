import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Wrapper,
  BackArrow,
  Title,
  Text,
  MainSection,
  BulletList,
  MediaWrapper,
  Media,
  Step,
  Form,
  Label,
  Input,
  Submit,
} from '../TrainStyles'

export default function TrainingThreeTwo() {
  const { push } = useHistory()

  const handleSubmit = () => {
    push('/module4')
  }

  return (
    <Wrapper>
      <Title>
        <BackArrow />
        What kids need
      </Title>
      <MainSection>
        <Text>From Homecoming FAQs and Straight from a Foster Mom:</Text>
        <BulletList>
          <MediaWrapper style={{ marginBottom: '-50px' }}>
            <div>
              <Step>
                <p>
                  <span>
                    Please don’t ask questions about their past, their parents,
                  </span>{' '}
                  their health status. If you do ask, we’re not offended but
                  also don’t want you to be offended if we decline to answer.
                </p>
              </Step>
              <Step>
                <p>
                  <span>
                    Please don’t tell them or us how "lucky" they are to have a
                    family.
                  </span>{' '}
                  We are a flawed family with limited patience and resources
                  just like everyone else, and in the end we will probably be
                  far more blessed by their presence in our lives than visa
                  versa.
                </p>
              </Step>
            </div>
            <Media>
              <img src={require('./train3.png')} />
            </Media>
          </MediaWrapper>
          <Step>
            <p>
              Don’t label the kids, and{' '}
              <span>
                only differentiate kids by how they entered a family while
                necessary.
              </span>{' '}
              When we do distinguish, we call [kids born to us] “bio” kids, not
              “real” or “natural.” [Also avoid “your own kids.” Instead of
              “foster kids,” say “children in foster care.” Other ideas: “kids
              who were already at home with you,” and use first names whenever
              possible, to avoid reinforcing insecurities.]
            </p>
          </Step>
          <Step>
            <p>
              <span>Give attention to the children already in the home.</span>{' '}
              Having a new child in the home is a big adjustment as parents may
              feel consumed with visits, therapy appointments, and providing the
              new child with attention and nurturing in order to best meet their
              higher level of needs. Other children in the home will benefit
              from your attention and desire to do fun things with them. Simple
              implementation: When you enter the home, make sure to greet each
              of the children with the same level of enthusiasm and interest.
            </p>
          </Step>
        </BulletList>
      </MainSection>
      <MainSection>
        <Title>Perspective from foster mom Traci Schmidley:</Title>
        <Text>
          Excerpts from:{' '}
          <a
            href='https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff'
            target='blank'
          >
            My Foster Children Have Too Many Toys— but let me tell you what they
            do need
          </a>
        </Text>
        <Text>
          Many children who come into foster care may be overly clingy and lack
          appropriate boundaries. It’s easy to want to cuddle and coddle them
          and shower them with attention and affection to help heal their pain.
          However, [sometimes this is a sign that he or she has] made so many
          transitions they are confused as to who is “their person” and may seek
          the attention of any adult willing to give affection, which can be
          quite dangerous. Many of our friends will experience a foster child
          climbing up onto their laps and refuse to get down, and believe “Oh we
          have such a special bond! She loves me!” But the truth is the child
          likely does that to every single stranger we pass.
        </Text>
        <Text>
          <span>
            We can’t undo (sometimes years of) neglect by giving excessive
            attention now. Hurting children need affection, no doubt, but they
            also need to learn boundaries, and to be guided toward forming safe
            connections and trust with their new caretaker first.{' '}
          </span>
        </Text>
        <Text>
          I appreciate you the most when you give my foster children a{' '}
          <span>
            quick hug, a few kind words, and encourage him or her to continue
            doing whatever activity
          </span>{' '}
          they were previously engaged in, just like you would any other child.
        </Text>
        <Text>
          <span>
            Read the rest of Traci's article{' '}
            <a
              href='https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff'
              target='blank'
            >
              here.
            </a>
          </span>
        </Text>
      </MainSection>
      <Title>What kids need: Complete before proceeding</Title>
      <Form>
        <Label>
          What, if anything, was new to you in this section on how to approach
          the kids? *
          <Input id='m3_q4' name='m3_q4' placeholder='Your answer here' />
        </Label>
        <Label>
          Do you anticipate any of these foster parent requests will be
          difficult for you? Why or why not? *
          <Input id='m3_q5' name='m3_q5' placeholder='Your answer here' />
        </Label>
        <Submit onClick={handleSubmit}>Continue</Submit>
      </Form>
    </Wrapper>
  )
}
