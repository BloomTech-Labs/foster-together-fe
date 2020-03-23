import React, { useState} from 'react'
import Player from 'react-player'
import {
  Page,
  Header,
  BigTitle,
  MainContent,
  Image2,
  Input,
  ATag,
  Submit,
  Half,
  VideoHolder,
} from './TrainStyle'
import axios from 'axios'


export default function TrainingThreeOne(props) {
  const [answers, setAnswers] = useState({answerOne: ''})
  const handleChange = e => {
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    props.setModule(1)
    axios.post("", answers) 
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <>
      <Page>
        <BigTitle> THREE: WHAT YOU NEED TO KNOW</BigTitle>
        <Header>WHAT'S YOUR VISION OF A FOSTER FAMILY?</Header>
        <MainContent>
          Helpers are often surprised when they meet their foster parent match.
          As humans, we tend to make assumptions about what a “type” might look
          like, and it’s best when we leave room to be pleasantly surprised by
          reality. For example, here are a few of the massive variations in
          foster families: <br />
        </MainContent>
        <Half>
          <MainContent>
            1. They don’t feel like they possess a super-human strength. They
            feel pretty average, just as most parents do at the end of a long
            day. Personality types can influence anyone’s affect and energy
            level.
            <br />
            2. Very few foster parents have medical or professional therapeutic
            training for their care of kids with high special needs (everything
            from complex trauma to feeding tubes), and those who do are paid a
            living wage for this full-time care. Most foster homes simply
            receive the average $13 daily reimbursement for the child's food,
            transportation, childcare, and special activities. <br />
          </MainContent>
          <VideoHolder>
            <Player url='https://player.vimeo.com/video/288657927' />
          </VideoHolder>
        </Half>
        <MainContent>
          3. They make various levels of income. Some foster families are single
          parent homes where the parent works full time, others are dual-income,
          and others have an at-home parent while the partner's job provides
          financially. Due to income differences, some drive 15 year old
          minivans, others drive a sportscar. As far as we can tell, every
          foster family we’ve worked with, regardless of the size of house or
          price of car, has clear and honorable intentions to help kids, and
          that’s what matters to us. We want to provide that extra friendship
          (that money can't buy) and practical support to any families willing
          to help kids heal. <br />
          4. They might be married, single, living with parents or grown kids,
          elderly, or LGBT. <br />
        </MainContent>
        <MainContent>
          5. They might be religious or secular. <br />
          5. They might have different food standards than you. Some will have a
          thriving vegetable garden and chicken coop, maintaining that this is
          the path to optimal nutrition. Others have days packed full with
          activities, so quick meals like hot dogs, cereal, and frozen veggies
          keep everything running. <br />
        </MainContent>
        <Half>
          <Image2 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385623625-BVHPKT4NS4BBS6YU07S0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/FT+7.jpg?format=750w' />
          <MainContent>
            {' '}
            6. They might have completed high school, or achieved a PhD.
            <br />
            7. They might dress kids differently. One parent will let kids play
            in a stained t-shirt (especially if it holds sentimental value--even
            smells of home can be comforting for a kid), and another will buy
            all new matching outfits for siblings in their homes. <br />
            8. They will have vastly different capacities and specialties.
            Foster parents quickly find their “groove” with the ages they want
            to parent (teens and babies both have their special joys), and how
            many kids they can confidently parent (some set a firm limit at one,
            others thrive orchestrating and supervising large sibling groups of
            five or six kids). <br />
          </MainContent>
        </Half>
        <MainContent>
          9. Parenting and communication styles vary. While we strive for all
          homes to be “trauma informed” (seeing the child’s need, rather than
          just “bad behavior”), some parents present their authority with soft
          gentleness, and others are firmly no-nonsense. <br />
          10. They may be open to adopting a child, or even in the process of
          adopting a child whose parents lost their rights. Or, they may be a
          foster family “stop along the way” for kids who are going home
          eventually. Both deeply love and care for the children in their homes.
          <br />
          Again, whether money is tight or plentiful, whether the kids look like
          they jumped out of a magazine or have been playing outside for three
          days straight, whether parents are accomplished in formal education or
          have huge hearts (or both!), the neighborly support you provide is
          priceless, and crucial to the family's thriving. <br />
        </MainContent>
        <Header>FAMILY DIFFERENCES: COMPLETE BEFORE PROCEEDING</Header>
        <MainContent>
          Are you surprised by any of the possibile differences in family
          structure or norms? Do any of them make you feel uneasy? (2+
          sentences) *
        </MainContent>
        r,
        <Input name="answerOne" value={answers.answerOne} onChange={handleChange} />
        <ATag>
          <Submit
            onClick={() => {
              handleSubmit()
            }}
          >
            Continue
          </Submit>
        </ATag>
      </Page>
    </>
  )
}
