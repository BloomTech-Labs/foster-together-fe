import React, { useState, useEffect } from 'react'
import {
  Header,
  UpperSection,
  Page,
  UpperImage,
  Image,
  Centerer,
  List,
  Step,
  LittleImages,
  LittleImage,
} from './ApplicationStyles'
import AppForm from './ApplicationForm'

export default function Application() {
  const [picture, setPicture] = useState(0)
  const [currentPicture2, setCurrentPicture2] = useState('')

  const imageArray = [
    { id: 0, image: 'https://i.ibb.co/7j62RLq/Quote-1-our-applicants.png' },
    { id: 1, image: 'https://i.ibb.co/FW3VyY6/Quote-2-I-wish.png' },
    { id: 2, image: 'https://i.ibb.co/0tqfgV0/Quote-3-unlike-other.png' },
    { id: 3, image: 'https://i.ibb.co/kmH90S2/Quote-4-fostering-can.png' },
    { id: 4, image: 'https://i.ibb.co/pXdXnk9/Quote-5-we-love.png' },
    { id: 5, image: 'https://i.ibb.co/ykkN7q1/Quote-6-she-brings.png' },
    { id: 6, image: 'https://i.ibb.co/FwcJVYW/Quote-7-as-a-single.png' },
  ]

  setTimeout(function() {
    if (picture === 6) {
      setPicture(0)
    } else {
      setPicture(picture + 1)
    }
  }, 5000)

  return (
    <Centerer>
      <Page>
        <Header>Get Trained as a Foster Neighbor!</Header>
        <UpperSection>
          <LittleImages>
            {imageArray.map(image => {
              return (
                <LittleImage
                  src={image.image}
                  onClick={() => {
                    setPicture(image.id)
                  }}
                />
              )
            })}
          </LittleImages>
          <UpperImage>
            <Image src={`${imageArray[picture].image}`} />
          </UpperImage>
          <List>
            <Step>Fill out the application below.</Step>
            <Step>
              We’ll email you next steps, as well as background check
              information.
            </Step>
            <Step>Process your background check online ($20)</Step>
            <Step>
              Complete your online training here once your application has been
              approved.
            </Step>
          </List>
        </UpperSection>
      </Page>
      <AppForm />
    </Centerer>
  )
}
