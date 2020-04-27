import React from 'react'
import { Video, Card, Page, Image, Header, ImageContain, Name } from './ThankyouStyle'

export default function ThankYou() {
  return (
    <>
      <Video src={'https://i.gifer.com/bfT.mp4'} loop autoPlay />
      <Header> Thank you! From All of us at Lambda</Header>
      <ImageContain>
        <Page>
          <Card>
            <Image src={require('./bianca.jpg')} />
            <Name> Bianca</Name>
          </Card>
          <Card>
            <Image src={require('./frantz.png')} />
            <Name>Frantz</Name>
          </Card>
          <Card>
            <Image src={require('./jarrod.jpg')} />
            <Name>Jarrod</Name>
          </Card>
          <Card>
            <Image src={require('./marc.jpg')} />
            <Name>Marc</Name>
          </Card>
          <Card>
            <Image src={require('./michelangelo.jpg')} />
            <Name>Michelangelo</Name>
          </Card>
          <Card>
            <Image src={require('./stacy.jpg')} />
            <Name>Stacy</Name>
          </Card>
          <Card>
            <Image src={require('./steve.png')} />
            <Name>Steve</Name>
          </Card>
        </Page>
      </ImageContain>
    </>
  )
}
