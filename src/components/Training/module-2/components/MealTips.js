import React, { useState } from 'react'
import {
  FormGroup,
  Label,
  CheckLabel,
  Wrapper,
  Title,
  BackArrow,
  Section,
  MediaWrapper,
  Media,
  BulletList,
  Step,
  SmallList,
  SmallStep,
  Checkbox,
  Input,
  Form,
  Continue,
  Text,
} from '../styles'
import { mealTipsImage } from '../img'

const questionOneData = [
  '2 hours a month (minimum for monthly meal drop-off)',
  '5 hours a month',
  '2 hours a week',
  '5 hours a week',
  'One weekend every two months',
  'One weekend a month',
]

const QuestionOne = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = id => {
    setSelected(id)
  }

  return (
    <FormGroup>
      <Label>
        How much time do you want to spend helping a foster family? *
        {questionOneData.map((answer, index) => (
          <CheckLabel onClick={() => handleClick(index + 1)}>
            {answer}
            <Checkbox radio checked={selected === index + 1} />
          </CheckLabel>
        ))}
      </Label>
    </FormGroup>
  )
}

const QuestionTwo = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = id => {
    setSelected(id)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that the decision to add additional meals or helping
        tasks is at the discretion of you and the foster family? *
        <CheckLabel onClick={() => handleClick(1)}>
          Yes, I understand that adding additional meal and helping tasks would
          be at the discretion of me and the foster family.
          <Checkbox radio checked={selected === 1} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(2)}>
          No.
          <Checkbox radio checked={selected === 2} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const questionThreeData = [
  'Additional meal drop-offs monthly (option to have foster parent provide a gift card for groceries)',
  'Help around the house: Cleaning the kitchen',
  'Help around the house: Laundry',
  'Help around the house: Yardwork',
  'Help around the house: Sweeping/cleaning floors',
  'Driving kids to visits with parents, therapy, or school activity (Requires foster agency/county approval. Contact Hope for help with approval.)',
  'Babysitting under six hours (May require foster agency/county approval. Contact Hope for help with approval.)',
  'Respite for more than six hours or overnight (Requires CPA/county approval. Contact Hope for help with approval.)',
  'Other (please specify below)',
]

const QuestionThree = () => {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
  })

  const handleClick = check => {
    setState({ ...state, [check]: !state.check })
  }

  return (
    <>
      <FormGroup>
        <Label>
          As you get to know them, are you open to providing practical support
          to the foster family, beyond meals?
          <CheckLabel onClick={() => setState({ ...state, one: !state.one })}>
            Additional meal drop-offs monthly (option to have foster parent
            provide a gift card for groceries)
            <Checkbox checked={state.one} />
          </CheckLabel>
          <CheckLabel onClick={() => setState({ ...state, two: !state.two })}>
            Help around the house: Cleaning the kitchen
            <Checkbox checked={state.two} />
          </CheckLabel>
          <CheckLabel
            onClick={() => setState({ ...state, three: !state.three })}
          >
            Help around the house: Laundry
            <Checkbox checked={state.three} />
          </CheckLabel>
          <CheckLabel onClick={() => setState({ ...state, four: !state.four })}>
            Help around the house: Yardwork
            <Checkbox checked={state.four} />
          </CheckLabel>
          <CheckLabel onClick={() => setState({ ...state, five: !state.five })}>
            Help around the house: Sweeping/cleaning floors
            <Checkbox checked={state.five} />
          </CheckLabel>
          <CheckLabel onClick={() => setState({ ...state, six: !state.six })}>
            Driving kids to visits with parents, therapy, or school activity
            (Requires foster agency/county approval. Contact Hope for help with
            approval.)
            <Checkbox checked={state.six} />
          </CheckLabel>
          <CheckLabel
            onClick={() => setState({ ...state, seven: !state.seven })}
          >
            Babysitting under six hours (May require foster agency/county
            approval. Contact Hope for help with approval.)
            <Checkbox checked={state.seven} />
          </CheckLabel>
          <CheckLabel
            onClick={() => setState({ ...state, eight: !state.eight })}
          >
            Respite for more than six hours or overnight (Requires CPA/county
            approval. Contact Hope for help with approval.)
            <Checkbox checked={state.eight} />
          </CheckLabel>
          <CheckLabel onClick={() => setState({ ...state, nine: !state.nine })}>
            Other (please specify below)
            <Checkbox checked={state.nine} />
          </CheckLabel>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Other ways I'd like to help (if any)
          <Input placeholder='Your answer here' />
        </Label>
      </FormGroup>
    </>
  )
}

const QuestionFour = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = id => {
    setSelected(id)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that you may need a background check in order to
        provide assistance beyond meal drop-off? *
        <CheckLabel onClick={() => handleClick(1)}>
          Yes, I understand that may need a background check in order to provide
          assistance beyond meal meal drop-off.
          <Checkbox radio checked={selected === 1} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(2)}>
          No.
          <Checkbox radio checked={selected === 2} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

const QuestionFive = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = id => {
    setSelected(id)
  }

  return (
    <FormGroup>
      <Label>
        Do you understand that Foster Together and the foster parents are here
        to help facilitate any needed background checks with the family's foster
        care agency or county, and that this process can take one to four weeks,
        depending on the requirements of the specific county or agency? *
        <CheckLabel onClick={() => handleClick(1)}>
          Yes
          <Checkbox radio checked={selected === 1} />
        </CheckLabel>
        <CheckLabel onClick={() => handleClick(2)}>
          No
          <Checkbox radio checked={selected === 2} />
        </CheckLabel>
      </Label>
    </FormGroup>
  )
}

export const Survey = ({ handleNext }) => {
  return (
    <Form>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
      <FormGroup>
        <Label>
          From what you’ve learned so far how can we improve the modules you’ve
          completed? What would you add, shorten, or eliminate? This program is
          always looking for ways to be better, so your feedback is definitely
          helpful!
          <Input placeholder='Your answer here' />
        </Label>
      </FormGroup>
      <Continue onClick={handleNext}>Complete Module 2</Continue>
    </Form>
  )
}

export const MealTips = ({ handleBack }) => {
  return (
    <Wrapper>
      <Title>
        <BackArrow onClick={handleBack} />
        Meal Delivery Tips (From Michele, a Current Family Helper)
      </Title>
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
                  <span>Less logistical coordination is better.</span> I told
                  the foster mom, “Leave a cooler on your porch, and I’ll fill
                  it up on Monday mornings.” (This may change over time--keep
                  reading!)
                </p>
              </Step>
              <Step>
                <p>
                  <span>Use containers you don't need back.</span> The last
                  thing I want to do is add to her burden, so if she's not able
                  to clean them, she is welcome to recycle or toss.
                </p>
              </Step>
              <Step>
                <p>
                  If something should be refrigerated quickly (i.e., raw cookie
                  dough, potato salad, etc.) I over-communicate (sending an
                  extra text after drop-off) to make sure the foster mom
                  remembers to grab it from the cooler.
                </p>
              </Step>
            </BulletList>
          </div>
          <Media>
            <img src={mealTipsImage} />
          </Media>
        </MediaWrapper>
        <BulletList>
          <Step>
            <p>
              I am flexible on the day of the week I drop off, and so is she!
              With the first kids she fostered, there was one day a week in
              which she spent most of the day in meetings with the kids'
              families, so she didn't have much time to cook. So while she had
              those kids, I made a point of dropping off the same day each week.
              Now with a new set of siblings, she doesn't have the same
              restriction on her schedule, so I drop off when it works for me.
            </p>
          </Step>
          <Step>
            <p>
              If I don't have time to cook something elaborate, I put in all the
              components for an easy & kid-friendly dinner. Last week, for
              example, I gave her the ingredients for naan bread pizzas, along
              with a salad and several other items.
            </p>
          </Step>
          <Step>
            <p>
              Consider what mealtime would be most helpful for the family.
              Dinner is always the first thought, but would breakfast be more
              helpful, as the foster parent is rushing to get kids to school on
              time?
            </p>
          </Step>
          <Step>
            <p>
              <span>
                I try to take good care of all the kids in the house--kids born
                to the foster family, and kids in foster care--so no one feels
                left out.
              </span>{' '}
              It just so happens that she has nine year old twins, and I have an
              11 year old daughter and a 10 year old son: perfect ages to pass
              along my kids' clothes & books.
            </p>
          </Step>
          <Step>
            <p>
              If I drop off clothes or supplies,{' '}
              <span>I organize by size and gender,</span> and only drop off what
              the foster parent can use. Extra can go to the thrift store or one
              of Foster Together's clothing partners.
            </p>
          </Step>
          <Step>
            <p>
              I keep track of the foods I drop off to avoid too much repetition
              and make notes if there's something in particular that a certain
              kid or parent likes/dislikes.
            </p>
          </Step>
          <Step>
            <p>
              Find out the best method of communication for the foster parent
              (phone, text, email, IM, etc.). I think for the first few weeks,
              she and I were emailing until we both realized that neither of us
              check our email regularly, then we switched to text for most of
              it.
            </p>
          </Step>
          <Step>
            <p>
              While a well-rounded, delicious, and kid-friendly meal is the most
              requested support, you are free to get creative! Foster Family
              Helpers sometimes include a treat like fresh-baked cookies, the
              kids’ favorite fruit or veggies already sliced for snack time
              throughout the week, a loaf of fresh bread, breakfast burritos, or
              a bar of chocolate or tub of gelato as a post-bedtime treat for
              mom or dad.{' '}
              <span>
                Have fun thinking of ways to make the family feel special and
                supported.
              </span>
            </p>
          </Step>
          <Step>
            <p>
              Friendly gestures are always a bonus. Some Family Helpers write
              short notes of gratitude and solidarity to the foster parents.
              Others text an encouraging message every few weeks. When many
              foster parents feel isolated, being thoughtful goes a long way.
            </p>
          </Step>
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
          <Step>
            <p>
              Consider the family’s desires and needs, then find the best option
              to fit your schedule.
            </p>
          </Step>
          <Step>
            <p>
              Offer specific drop-off times to choose from (“Tuesday at 6,
              Thursday at 4, or Sunday at noon?”). This is better than an
              open-ended question, (“Is there a good day for me to bring a
              meal?”) which can lead to a slower process.
            </p>
          </Step>
          <Step>
            <p>
              When foster parents go on to adopt, they can use support through
              that process, too.
            </p>
          </Step>
        </BulletList>
      </Section>
      <Title>Tips for Those Who Want to Go Beyond the Meal</Title>
      <Section>
        <Text>
          If you're the type who wants to customize the match to the foster
          parent's most-needed tasks, here's how you do that:
        </Text>
        <SmallList>
          <SmallStep>
            <p>
              If you and the foster parent decide to make arrangements for you
              providing babysitting or transportation, the{' '}
              <span>
                foster parent’s agency or county may require a background check,
                which can take up to three weeks.
              </span>{' '}
              We are here to help with that process. Email
              connect@fostertogether.co to get started.
            </p>
          </SmallStep>
          <SmallStep>
            <p>
              After a few meal deliveries, consider asking the family if they’d
              like to meet for a playdate, or would like help with a specific
              chore.
            </p>
          </SmallStep>
          <SmallStep>
            <p>
              When your foster family receives a new placement of a child,
              consider asking if the child needs any additional supplies or
              clothes. You’re welcome to collect items from friends or family.
              For example, after her foster family welcomed two little ones in
              November, who did not have their own coats, one Helper posted a
              request for winter gear with the children’s sizes--explaining they
              are in foster care and giving no additional identifying
              information--on a local buy-sell-trade group. The next week, she
              dropped off five bags full of clothes, toys, coats, and boots
              along with the family’s weekly meal.
            </p>
          </SmallStep>
          <SmallStep>
            <p>
              Foster Together also collaborates with three foster parent-owned
              nonprofits to provide additional resources, physical supplies, and
              support to foster families. If a need arises, please let us know
              so that our group can partner with you find and deliver the items.
              Connect@fostertogether.co.
            </p>
          </SmallStep>
        </SmallList>
      </Section>
      <Title>Capacity Survey: Complete Before Proceeding</Title>
      <Survey />
    </Wrapper>
  )
}
