import React, { useState } from "react";
import TrainingNav from "../../TrainingNav/NavBar";
import {
  // Page,
  TitleContainer,
  BigTitle,
  LetterText,
  ContextDiv,
  Header,
  QuestionContainer,
  Submit,
  Half,
  QuestionsInput,
  Wrapper
} from "../../TrainStyles";
import { useHistory } from "react-router-dom";

function Title({ props }) {
  const { push } = useHistory();

  return (
    <TitleContainer>
      <img
        src={require("../../../../images/icons/back-arrow.svg")}
        onClick={() => {
          push("/module4");
        }}
        alt=""
      />
      <BigTitle>Foster Together Colorado's Responsibility</BigTitle>
    </TitleContainer>
  );
}

const Responsibilities = () => {
  return (
    <ContextDiv>
      <Context />
      <Context1 />
      <Context2 />
    </ContextDiv>
  );
};

const Context = () => {
  return (
    // <div>
    <LetterText>
      <LetterText>
        1. To recruit and minimally vet potential foster family helpers through
        marketing and application process.
      </LetterText>
      <LetterText>
        2. To train and support foster families and Family Helpers in the
        purpose, implementation, and safeguards of the Foster Together process.
      </LetterText>
      <LetterText>
        3. To match the helper with a foster family within 10 miles of the
        helper’s home (unless otherwise requested).
      </LetterText>
      <LetterText>
        4. As requested, to assist the foster family in obtaining County or CPA
        approval to use the family helper for babysitting, transportation, or
        respite.
      </LetterText>
      <LetterText>5. To explain general expectations to each party.</LetterText>
      <LetterText>
        6. As requested, to assist with problem-solving throughout the match.
      </LetterText>
    </LetterText>
    // </div>
  );
};

const Context1 = () => {
  return (
    <>
      <Header>Foster Parent’s Responsibility:</Header>
      <LetterText>
        1. To be responsive to Foster Together and the foster family helper,
        acknowledging receipt of any texts, emails, or voicemails within 48
        hours.
      </LetterText>
      <LetterText>
        2. To practice discretion as the matching relationship progresses, using
        reasonable parental judgment AND obtaining written approval from placing
        county and/or CPA before allowing the foster family helper to provide
        babysitting, transportation, or respite.
      </LetterText>
      <LetterText>
        3. To post Body Safety Rules poster in your home and regularly review
        body safety rules with kids.
      </LetterText>
      <LetterText>
        4. To communicate from a tone of gratitude with the helper, recognizing
        the gift of time and care that the helper desires to give.
      </LetterText>
      <LetterText>
        5. To communicate your needs with forethought, rather than urgency, to
        the family helper, recognizing that the family helper also has
        responsibilities and time commitments.
      </LetterText>
    </>
  );
};

const Context2 = () => {
  return (
    <>
      <Header>Foster Neighbor’s Responsibility:</Header>
      <LetterText>
        1. To be responsive to Foster Together and the foster parent,
        acknowledging receipt of any texts, emails, or voicemails within 48
        hours.
      </LetterText>
      <LetterText>
        2. To ensure that the foster family has obtained approval from the
        licensing county or child placement agency before babysitting, driving,
        or providing respite.
      </LetterText>
      <LetterText>
        3. To communicate with clarity your limits and logistics for helping the
        foster parent.
      </LetterText>
      <LetterText>
        4. To be dependable with your commitments to the family, and communicate
        immediately when you need to adjust plans. Dependability lessens the
        stress on a foster family.
      </LetterText>
      <LetterText>
        5. To respect and protect the privacy of the foster family and the
        children in the home. Do not ask questions about the child(ren)’s
        histories. If the need arises for you to know something, the foster
        parent can reveal information as appropriate.
      </LetterText>
      <LetterText>
        6. Not to become a primary adult in the child’s life, but to take a role
        in the background as much as possible, increasing the capacity of the
        foster parent.
      </LetterText>
    </>
  );
};

const Questions = (form, handleChange) => {
  console.log(form);
  return (
    <Wrapper>
      {/* <QuestionContainer> */}
      <Header>Understanding Responsibility: Complete before proceeding</Header>
      <LetterText>
        As the Foster Neighbor in this match, I understand and agree to my
        responsibilities outlined above.
      </LetterText>
      <QuestionsInput
        name="answer1"
        value={form.answer1}
        onChange={handleChange}
      />
      <LetterText>
        I understand that I may not babysit or provide transportation to the
        children without prior approval from the family's foster care agency
        and/or the county department.
      </LetterText>
      <QuestionsInput
        name="answer2"
        value={form.answer2}
        onChange={handleChange}
      />
      <LetterText>
        Any questions we can address before helping you find a foster family?
      </LetterText>
      <QuestionsInput
        name="answer3"
        value={form.answer3}
        onChange={handleChange}
      />
      {/* </QuestionContainer> */}
    </Wrapper>
  );
};
const Button = props => {
  const { push } = useHistory();
  return (
    <Half>
      <Submit
        onClick={() => {
          push("/userProfile");
        }}
      >
        Submit
      </Submit>
    </Half>
  );
};

const ModuleFive = props => {
  const [form, setForm] = useState({
    answer1: "",
    answer2: "",
    answer3: ""
  });
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <TrainingNav />
      <Wrapper>
        <Title />
        {/* <Page> */}
        <Responsibilities />
        <Questions handleChange={handleChange} form={form} />
        <Button />
        {/* </Page> */}
      </Wrapper>
    </section>
  );
};

export default ModuleFive;
