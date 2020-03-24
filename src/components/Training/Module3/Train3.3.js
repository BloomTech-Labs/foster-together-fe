import React, { useState } from 'react'
import Player from 'react-player'
import {
  Page,
  Header,
  MainContent,
  Input,
  ATag,
  Submit,
  Half,
  VideoHolder,
  Bold,
  Indented,
} from './TrainStyle'
import axios from 'axios'

export default function TrainingThreeTwo(props) {
  const [answers, setAnswers] = useState({answerThree: ''})
  const handleChange = e => {
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    props.setModule(3)
    axios.post("", answers) 
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <Page>
      <Header>
        Foster parents' least favorite compliments (and a few ideas for what you
        should say instead){' '}
      </Header>
      <Bold>
        Challenge yourself to take your conversations off auto-pilot. Foster
        parents hear the following four phrases way too much:
      </Bold>
      <Half>
        <MainContent>
          Other than that, this opportunity is completely customized to you. For
          example:
          <Indented>
            <MainContent>
          <Header>"You’re so amazing to do this!"</Header>
          While meant as a compliment, most foster parents will tell you this
          bothers them because they want the focus on the kids, who are
          struggling to heal and learn how to live (and that's an amazing task).
          It also doesn’t give the foster parent much to hold onto if he or she
          feels like quitting on a hard day.
          <Header>
            "I don’t know how you do it!" Or "I could never foster!"
          </Header>
          This can add to the feelings of isolation and loneliness. It can also
          make the kids feel like a burden. <br />
          </MainContent>
          </Indented>
        </MainContent>
        <VideoHolder>
          <Player url='https://player.vimeo.com/video/288657930'></Player>
        </VideoHolder>
      </Half>
      <Indented>
      <MainContent>
        <Header>"You’re a hero/saint!"</Header>
        Foster parents feel like average people. They are also not the hero in
        the story. Kids who’ve experienced trauma, and their parents who
        overcome challenges to create safe homes, are the focus. And foster
        parents are privileged to nurture that victory behind the scenes.
        <Header>
          "Isn’t it hard to send them back?" Or "Don’t you get attached?"
        </Header>
        Foster parents are trained and required to “get attached” because it’s
        what kids need to develop strong connections. If we turn off our
        humanity, shut down our tender hearts, the kids lose. So, yes, of course
        it's hard. At the same time, we are challenged to de-center themselves
        from the child’s life (which simply means "This is not about ME, it's
        about THEM."), while investing massive amounts of emotional energy and
        focus on the child, as the children often return to family members.
        Foster parents appreciate not hearing this phrase, because it shows that
        you understand this nuance. One less thing to explain. <br /> <br/>
      </MainContent>
      </Indented>
      <Header>Instead of the above phrases, we love it when our Foster Family Helpers really listen, and empathize with the foster parent.</Header>
          <Indented>
            <MainContent>A phrase that almost always fits is <Bold> “Thank you for loving them.” </Bold>It works for hard days. It works for celebrations. It affirms the hard work of love without idolizing or isolating the foster parent. <br /> <br/>
            <Bold>"This world needs more people who will pay attention to kids like you do." <br /> <br/> </Bold>
            <Bold>"I know a lot of your love for them is in the unseen moments. Thank you for being committed." <br /> <br/></Bold>
            <Bold>"I love watching you interact with the kids. Seems like they enjoy living here. Your [patience/joy/commitment/approach/relational intuition/consistency/steadiness] inspires me." <br /> <br/></Bold>
            </MainContent>
          </Indented>
          <MainContent>
          Find the joy. Celebrate kids. Foster parents want you to see the beautiful childhoods they’re nurturing--not just the trauma and struggle. <Bold>Treat foster families with the joy and normalcy you’d want for your own family, all while giving them your needed gifts of warm neighborliness.  <br/></Bold>
          This helps everyone feel included, rather than ostracized, and delightful, rather than burdensome. And that’s the entire goal of foster parenting. <br />
          If you come up with your own great phrase to say to a foster parent,  you let us know. <br/>
          </MainContent>
      
      
      <Header>What to say: Complete before proceeding</Header>
      <MainContent>
      To you, what is the most surprising phrase on the "to avoid saying" list? *
      </MainContent>
      <Input name="answerThree" onChange={handleChange}/>
      <ATag href='#section3'>
        <Submit             onClick={() => {
              handleSubmit()
            }}>Continue</Submit>
      </ATag>
    </Page>
  )
}
