import React, { useState } from 'react'
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
} from './TrainStyle'

export default function TrainingThreeTwo(props) {
  return (
    <Page>
      <Header>WHAT MAKES A GREAT FOSTER FAMILY HELPER? </Header>
      <Half>
        <MainContent>
          We love our Family Helpers! They are usually <Bold>self-starters who aren’t
          afraid to take initiative and want their relationships to be
          meaningful and helpful to those who need them most.</Bold> <br /> <br />
          Other than that, this opportunity is completely customized to you. For
          example: <br />
          <Indented>
            <MainContent>
              - She might be able to double her grocery budget and pull out all
              the stops in her meal deliveries, dropping off five or six freezer
              meals in a month, or she might be able to afford one meal drop-off
              a month. <br />
              - He might work full time or be a busy stay at home dad.
              <br />- The family might love to meet for play dates or expand
              their “helping” to include what you need, or they might want to
              keep it simple, and continue with meal drop-offs exclusively.
              <br />
              - Most have considered fostering, or wish they had family support
              for fostering, but find helping a family to be the perfect outlet
              for that desire. <br />
              - They come to realize the need for friendly, neighbor-to-neighbor
              support in foster care, especially with the wide spectrum of needs
              (small to big) in the life of kids in foster care. <br />
              - They are self-aware and willing to offer a time and financial
              (grocery expenses) commitment that works for them, without
              over-committing. <br />
            </MainContent>
          </Indented>
        </MainContent>
        <Image3 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525385742778-FWVIMH270TN6KNWXQBAA/ke17ZwdGBToddI8pDm48kHk9taYkEy7sLhgS3EyD6457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFQmF03bpsbun_LAh8ZlxTmgswgaiiNAbnlkQr7g4-9D1w/FT+5.jpg?format=750w' />
      </Half>
      <MainContent>As one of our first Helpers said, <Bold> “I quickly realized that no level of help is too little. Anyone can customize the deliveries to whatever they have time and money for.”</Bold></MainContent>
      <Header>MY STRENGTHS: COMPLETE BEFORE PROCEEDING</Header>
      <MainContent>
        After reading this list, please name one or two strengths you will bring
        to the match. *
      </MainContent>
      <Input />
      <ATag href='#section3'>
        <Submit>Continue</Submit>
      </ATag>
    </Page>
  )
}
