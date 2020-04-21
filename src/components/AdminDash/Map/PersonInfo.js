import React, { useState, useEffect } from "react";
import {
  InfoDiv,
  UserName,
  Icon,
  IconContain,
  SmallIcon,
  InfoText
} from "./MapStyles";
import { useHistory } from "react-router-dom";

export default function Filter(props) {
  const history = useHistory();
  const [selected, setSelected] = useState("v");
  useEffect(() => {
    setSelected(props.selected);
  }, [props]);
  return (
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
        <h3>{selected.type}</h3>
      </IconContain>
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
    </InfoDiv>
  );
}
