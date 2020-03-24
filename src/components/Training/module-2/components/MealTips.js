import React from 'react'
import {
  Wrapper,
  Title,
  BackArrow,
  MediaWrapper,
  Media,
} from '../../TrainStyles'
import {
  Section,
  BulletList,
  Step,
  SmallList,
  SmallStep,
  Text,
} from '../styles'
import { SimpleStep } from './index'
import { mealTipsImage } from '../img'
import Survey from './Survey'

const mealTipsData = [
  `I am flexible on the day of the week I drop off, and so is she! With the first kids she fostered, there was one day a week in which she spent most of the day in meetings with the kids' families, so she didn't have much time to cook. So while she had those kids, I made a point of dropping off the same day each week. Now with a new set of siblings, she doesn't have the same restriction on her schedule, so I drop off when it works for me.`,
  `If I don't have time to cook something elaborate, I put in all the components for an easy & kid-friendly dinner. Last week, for example, I gave her the ingredients for naan bread pizzas, along with a salad and several other items.`,
  'Consider what mealtime would be most helpful for the family. Dinner is always the first thought, but would breakfast be more helpful, as the foster parent is rushing to get kids to school on time?',
  `I keep track of the foods I drop off to avoid too much repetition and make notes if there's something in particular that a certain kid or parent likes/dislikes.`,
  'Find out the best method of communication for the foster parent (phone, text, email, IM, etc.). I think for the first few weeks, she and I were emailing until we both realized that neither of us check our email regularly, then we switched to text for most of it.',
  'Friendly gestures are always a bonus. Some Family Helpers write short notes of gratitude and solidarity to the foster parents. Others text an encouraging message every few weeks. When many foster parents feel isolated, being thoughtful goes a long way.',
  `Consider the family’s desires and needs, then find the best option to fit your schedule.`,
  'Offer specific drop-off times to choose from (“Tuesday at 6, Thursday at 4, or Sunday at noon?”). This is better than an open-ended question, (“Is there a good day for me to bring a meal?”) which can lead to a slower process.',
  'When foster parents go on to adopt, they can use support through that process, too.',
]

const MealTipsWrapper = () => {
  return (
    <Section>
      <MediaWrapper>
        <div>
          <BulletList>
            <Step>
              <p>Buy foil baking pans on sale to keep on hand.</p>
            </Step>
            <Step>
              <p>Enclose baking/cooking instructions (if needed).</p>
            </Step>
            <Step>
              <p>
                <span>Less logistical coordination is better.</span> I told the
                foster mom, “Leave a cooler on your porch, and I’ll fill it up
                on Monday mornings.” (This may change over time--keep reading!)
              </p>
            </Step>
            <Step>
              <p>
                <span>Use containers you don't need back.</span> The last thing
                I want to do is add to her burden, so if she's not able to clean
                them, she is welcome to recycle or toss.
              </p>
            </Step>
            <Step>
              <p>
                If something should be refrigerated quickly (i.e., raw cookie
                dough, potato salad, etc.) I over-communicate (sending an extra
                text after drop-off) to make sure the foster mom remembers to
                grab it from the cooler.
              </p>
            </Step>
          </BulletList>
        </div>
        <Media>
          <img src={mealTipsImage} alt='' />
        </Media>
      </MediaWrapper>
      <BulletList>
        {mealTipsData.map((step, index) => (
          <div key={index}>
            <SimpleStep text={step} />
            {index === 2 ? (
              <>
                <Step>
                  <p>
                    <span>
                      I try to take good care of all the kids in the house--kids
                      born to the foster family, and kids in foster care--so no
                      one feels left out.
                    </span>{' '}
                    It just so happens that she has nine year old twins, and I
                    have an 11 year old daughter and a 10 year old son: perfect
                    ages to pass along my kids' clothes & books.
                  </p>
                </Step>
                <Step>
                  <p>
                    If I drop off clothes or supplies,{' '}
                    <span>I organize by size and gender,</span> and only drop
                    off what the foster parent can use. Extra can go to the
                    thrift store or one of Foster Together's clothing partners.
                  </p>
                </Step>
              </>
            ) : index === 4 ? (
              <Step>
                <p>
                  While a well-rounded, delicious, and kid-friendly meal is the
                  most requested support, you are free to get creative! Foster
                  Family Helpers sometimes include a treat like fresh-baked
                  cookies, the kids’ favorite fruit or veggies already sliced
                  for snack time throughout the week, a loaf of fresh bread,
                  breakfast burritos, or a bar of chocolate or tub of gelato as
                  a post-bedtime treat for mom or dad.{' '}
                  <span>
                    Have fun thinking of ways to make the family feel special
                    and supported.
                  </span>
                </p>
              </Step>
            ) : index === 5 ? (
              <Step>
                <p>
                  <span>
                    Some Family Helpers prefer picking up takeout over cooking,
                  </span>{' '}
                  and some families think takeout is a treat! One Helper simply
                  doubles her own recipe for her family’s dinner every Thursday.
                  Another Family Helpers picks up{' '}
                  <span>
                    fried chicken and sides at the grocery store, or lasagna at
                    Costco.
                  </span>{' '}
                  Listening to what the family wants and needs will make this an
                  extremely effective gift.
                </p>
              </Step>
            ) : null}
          </div>
        ))}
      </BulletList>
    </Section>
  )
}

const beyondTheMealData = [
  `After a few meal deliveries, consider asking the family if they’d like to meet for a playdate, or would like help with a specific chore.`,
  `When your foster family receives a new placement of a child, consider asking if the child needs any additional supplies or clothes. You’re welcome to collect items from friends or family. For example, after her foster family welcomed two little ones in November, who did not have their own coats, one Helper posted a request for winter gear with the children’s sizes--explaining they are in foster care and giving no additional identifying information--on a local buy-sell-trade group. The next week, she dropped off five bags full of clothes, toys, coats, and boots along with the family’s weekly meal.`,
  'Foster Together also collaborates with three foster parent-owned nonprofits to provide additional resources, physical supplies, and support to foster families. If a need arises, please let us know so that our group can partner with you find and deliver the items. Connect@fostertogether.co.',
]

const BeyondTheMeal = () => {
  return (
    <Section>
      <Text>
        If you're the type who wants to customize the match to the foster
        parent's most-needed tasks, here's how you do that:
      </Text>
      <SmallList>
        {beyondTheMealData.map((step, index) => (
          <div key={index}>
            {index === 0 && (
              <SmallStep>
                <p>
                  If you and the foster parent decide to make arrangements for
                  you providing babysitting or transportation, the{' '}
                  <span>
                    foster parent’s agency or county may require a background
                    check, which can take up to three weeks.
                  </span>{' '}
                  We are here to help with that process. Email
                  connect@fostertogether.co to get started.
                </p>
              </SmallStep>
            )}
            <SmallStep>
              <p>{step}</p>
            </SmallStep>
          </div>
        ))}
      </SmallList>
    </Section>
  )
}

export const MealTips = ({ handleBack, ...props }) => {
  return (
    <Wrapper>
      <Title>
        <BackArrow onClick={handleBack} />
        Meal Delivery Tips (From Michele, a Current Family Helper)
      </Title>
      <MealTipsWrapper />
      <Title>Tips for Those Who Want to Go Beyond the Meal</Title>
      <BeyondTheMeal />
      <Title>Capacity Survey: Complete Before Proceeding</Title>
      <Survey {...props} />
    </Wrapper>
  )
}
