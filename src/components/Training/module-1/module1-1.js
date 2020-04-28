import React from "react";
import { useHistory } from "react-router-dom";
import TrainingNav from "../TrainingNav/NavBar";
import {
  Wrapper,
  BackArrow,
  Title,
  PlayerWrapper,
  VideoText,
  Header,
  LetterContainer,
  TestText,
  Submit,
  Half,
  TrainingModuleOverlay
} from "../TrainStyles";
import Player from "react-player";

import Progress from "../progressBar.js";


function TitleWrapper() {
  const { push } = useHistory();
  return (
    <Title>
      <BackArrow
        onClick={() => {
          push("/training-start");
        }}
      />
      A letter of gratitude continued...
    </Title>
  );
}

function VideoPlayer() {
  return (
    <PlayerWrapper>
      <Player
        url="https://player.vimeo.com/video/288657929"
        controls={false}
        margin="auto"
      />
      <VideoText>
        When a specific family in your area, or a family you meet at a
        Neighborhood Party, is ready for help, Foster Together will email or
        call you with a basic overview of the family. If you agree, we'll help
        you exchange info and meet up.
      </VideoText>
    </PlayerWrapper>
  );
}

const Testimonies = () => {
  return (
    <>
      <TestContext1 />
      <TestContext2 />
    </>
  );
};

const TestContext1 = () => {
  return (
    <>
      <TestText>
        I have been so grateful for the support Nicole (helper) gives us. The
        stress [of fostering as a single mom] has been really difficult to
        manage. On top of that [child’s] Grandpa, one of our main supports, just
        had shoulder surgery and had not been able to watch her. She loves
        playing with Nicole and the break for me is so important at a time when
        financial and emotional resources are thin. And on top of that, she
        makes us the BEST food! - Brooke, foster mom in Arvada (who happens to
        parent solo, run her therapy practice full time, and foster a toddler!){" "}
      </TestText>
      <TestText>
        “Doubling my dinner recipe or taking a walk to the park with my new
        little friend doesn't take much extra effort, compared to the
        satisfaction of investing in my neighbors.” - Nicole, Foster Family
        Helper in Arvada
      </TestText>
    </>
  );
};

const TestContext2 = () => {
  return (
    <>
      <TestText>
        “Anyone who has ever volunteered for anything knows that oftentimes, the
        scope of the volunteer role grows and grows and often becomes
        overwhelming. I can honestly say that I’ve been doing this for almost 6
        months and at no point have I felt overwhelmed in the least. This is a
        way to help that is super customized based on what I can do, and it’s
        manageable in real life.” - Michele, Foster Family Helper in Broomfield
      </TestText>
    </>
  );
};

const Module11 = () => {
  const { push } = useHistory();
  return (
    <>
      <TrainingNav />
     
      <Progress />
      

      <TrainingModuleOverlay />
      <Wrapper>
        <TitleWrapper />
        <VideoPlayer />
        <LetterContainer>
          <Header>Testimonials from foster parents</Header>
          <Testimonies />
        </LetterContainer>
        <Half>
          <Submit
            onClick={() => {
              push("/module1");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Start Training
          </Submit>
        </Half>
      </Wrapper>
    </>
  );
};

export default Module11;
