import React, { useState, useEffect } from "react";
import {
  InfoContainer,
  InfoDiv,
  UserName,
  Icon,
  IconContain,
  SmallIcon,
  SubInfoContainer,
  InfoText,
  InfoType,
} from "./MapStyles";
import { useHistory } from "react-router-dom";

export default function Filter(props) {
  const history = useHistory();
  const [selected, setSelected] = useState("v");
  useEffect(() => {
    setSelected(props.selected);
  }, [props]);
  return (
    <InfoContainer>
      <InfoDiv>
        <UserName>
          {selected.first_name} {selected.last_name}{" "}
          {selected.name !== undefined ? (
            <SmallIcon
              onClick={() => history.push(`/${selected.type}/${selected.id}`)}
              src={require("./mapicons/redirect.png")}
            />
          ) : null}{" "}
        </UserName>
        <IconContain>
          <InfoType>{selected.type}</InfoType>
        </IconContain>
        <SubInfoContainer>
          <IconContain>
            <Icon src={require("./mapicons/Address.svg")} />
            <InfoText>{selected.address}</InfoText>
          </IconContain>
          <IconContain>
            <Icon src={require("./mapicons/Email.svg")} />
            <InfoText>{selected.email}</InfoText>
          </IconContain>
          <IconContain>
            <Icon src={require("./mapicons/Phone.svg")} />
            <InfoText>{selected.phone}</InfoText>
          </IconContain>
        </SubInfoContainer>
      </InfoDiv>
    </InfoContainer>
  );
}
