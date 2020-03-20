import React, { useState, createRef } from 'react'
import Player from 'react-player'
import Module3Text from './Train3.json'
import {
  Page,
  Header,
  BigTitle,
  MainContent,
  Image3,
  Input,
  ATag,
  Submit,
  Half,
  VideoHolder,
  Bold,
  Section2,
  Indented,
  Link,
} from './TrainStyle'
import ReadingProgress from './Scroller'

export default function TrainingThreeTwo(props) {
    const target = createRef();
    console.log(props)

  return (
    <div>
    <ReadingProgress target={target} props={props.module}/>
    <Page ref={target} >
      <Header>WHAT KIDS NEED</Header>
      <MainContent>
        From Homecoming FAQs and Straight from a Foster Mom:
      </MainContent>
      <Half>
        <Indented>
          <MainContent> <Bold> Please don’t ask questions about their past, their parents, </Bold> their health status. If you do ask, we’re not offended but also don’t want you to be offended if we decline to answer. <br/>
          <Bold>Please don’t tell them or us how "lucky" they are to have a family. </Bold> We are a flawed family with limited patience and resources just like everyone else, and in the end we will probably be far more blessed by their presence in our lives than visa versa. <br />
          </MainContent>
        </Indented>
        <Image3 src={require('./train3.png')}/>
      </Half>
      <MainContent>
      Don’t label the kids, and <Bold> only differentiate kids by how they entered a family while necessary. </Bold> When we do distinguish, we call [kids born to us] “bio” kids, not “real” or “natural.” [Also avoid “your own kids.” Instead of “foster kids,” say “children in foster care.” Other ideas: “kids who were already at home with you,” and use first names whenever possible, to avoid reinforcing insecurities.] <br/>
      <Bold >Give attention to the children already in the home.</Bold> Having a new child in the home is a big adjustment as parents may feel consumed with visits, therapy appointments, and providing the new child with attention and nurturing in order to best meet their higher level of needs. Other children in the home will benefit from your attention and desire to do fun things with them. Simple implementation: When you enter the home, make sure to greet each of the children with the same level of enthusiasm and interest.
      </MainContent>
      <Header>PERSPECTIVE FROM FOSTER MOM TRACI SCHMIDLEY: </Header>
            <MainContent>
              Excerpts from: My Foster Children Have Too Many Toys— but let me
              tell you what they do need <br /> <br />
              Many children who come into foster care may be overly clingy and
              lack appropriate boundaries. It’s easy to want to cuddle and
              coddle them and shower them with attention and affection to help
              heal their pain. However, [sometimes this is a sign that he or she
              has] made so many transitions they are confused as to who is
              “their person” and may seek the attention of any adult willing to
              give affection, which can be quite dangerous. Many of our friends
              will experience a foster child climbing up onto their laps and
              refuse to get down, and believe “Oh we have such a special bond!
              She loves me!” But the truth is the child likely does that to
              every single stranger we pass. <br />
              <br />
              <Bold>We can’t undo (sometimes years of) neglect by giving excessive
              attention now. Hurting children need affection, no doubt, but they
              also need to learn boundaries, and to be guided toward forming
              safe connections and trust with their new caretaker first. </Bold> <br />
              <br />
              I appreciate you the most when you give my foster children a <Bold> quick
              hug, a few kind words, and encourage him or her to continue doing
              whatever activity </Bold> they were previously engaged in, just like you
              would any other child. <br />
              <br />
              Ask the foster parent before giving extra food and special gifts.
              Once again, overcompensating for the previous neglect will hinder,
              not help, the healing process. I remember one time a very
              well-meaning gentleman at my church gave my foster son a Bible
              with an inscription written in it. My husband had already
              purchased one that he was waiting to give to him for his birthday.
              There is nothing wrong with two Bibles, but of course, that was a
              special gift my husband wanted to give our foster son. This
              particular boy had an absent father and struggled with male
              authority figures. A Bible from his foster father would likely
              have been more meaningful to our foster son if it wasn’t the
              second one he received and if he hadn’t already received one from
              someone he barely knew. It’s easy to want to step in and mentor a
              child in foster care, but be sure to not step on the foster
              family’s toes when you doing so. The best way to avoid stepping on
              toes is simply by asking first. <br />
              <br />
              <Bold>Read the rest of Traci's article </Bold>
              <Link
                href='https://medium.com/@tracischmidley/please-dont-give-my-foster-child-another-stuffed-animal-45435641c8ff'
                target='blank'
              >
                 <lb/> here.
              </Link>
            </MainContent>
      <Header>What kids need: Complete before proceeding</Header>
      <MainContent>
      What, if anything, was new to you in this section on how to approach the kids? *
      </MainContent>
      <Input />
      <MainContent>
      Do you anticipate any of these foster parent requests will be difficult for you? Why or why not? *
      </MainContent>
      <Input />
      <ATag href='#section3'>
        <Submit>Continue</Submit>
      </ATag>
    </Page>
    </div>
  )
}
