import React, { useState, useEffect } from "react";
import {
  FilterDiv,
  ButtonHolder,
  Header,
  Image,
  HeaderHolder,
  Input,
  ButtonContain,
  Label
} from "./MapStyles";
import { Buttons } from "./MapStyles";

// Materiaul UI Style

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Filter(props) {
  const locations = props.locations;
  const [typeSelected, setTypeSelected] = useState(null);
  const [matchSelected, setMatchSelected] = useState("All");
  const [points, setPoints] = useState(locations);
  const [completed, setCompleted] = useState("All");
  const [search, setSearch] = useState("");
  const [zipSearch, setZipSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleZipChange = e => {
    setZipSearch(e.target.value);
  };

  useEffect(() => {
    setTimeout(function() {
      props.filter([]);
    }, 1000);
  }, []);

  // Materiaul UI Radio BUtton

  const [value, setValue] = useState("");

  const handleRadioChange = event => {
    setValue(event.target.value);
  };

  // const styles = theme => ({
  //   radio: {
  //     '&$checked': {
  //       color: '#4B8DF8'
  //     }
  //   },
  //   checked: {}
  // })

  const neighborss = locations.filter(people => people.type === "neighbors");
  const families = locations.filter(people => people.type === "families");
  const matchedNeighborss = locations.filter(
    people => people.type === "neighbors" && people.match === true
  );
  const unmatchedNeighborss = locations.filter(
    people => people.type === "neighbors" && people.match === false
  );
  const matchedFamilies = locations.filter(
    people => people.type === "families" && people.match === true
  );
  const unmatchedFamilies = locations.filter(
    people => people.type === "families" && people.match === false
  );
  const allMatched = locations.filter(people => people.match === true);
  const allUnmatched = locations.filter(people => people.match === false);
  const allCompleted = locations.filter(people => people.application === true);
  const allUncompleted = locations.filter(
    people => people.application === false
  );
  const uncompletedFamilies = families.filter(
    people => people.application === false
  );
  const completeFamilies = families.filter(
    people => people.application === true
  );
  const completeNeighborss = neighborss.filter(
    people => people.application === true
  );

  const uncompleteNeighborss = neighborss.filter(
    people => people.application === false
  );

  function handleAll() {
    setTypeSelected("All");
    if (matchSelected === "All") {
      if (completed === "All") {
        setPoints(locations);
      }
      if (completed === true) {
        setPoints(allCompleted);
      }
      if (completed === false) {
        setPoints(allUncompleted);
      }
    }
    if (matchSelected === true) {
      setPoints(allMatched);
    }
    if (matchSelected === false) {
      setPoints(allUnmatched);
    }
  }
  function handleFamilies() {
    setTypeSelected("families");
    if (matchSelected === "All") {
      if (completed === false) {
        setPoints(uncompletedFamilies);
      }
      if (completed === true) {
        setPoints(completeFamilies);
      }
      if (completed === "All") {
        setPoints(families);
      }
    }
    if (matchSelected === true) {
      setPoints(matchedFamilies);
    }
    if (matchSelected === false) {
      if (completed === "All") {
        setPoints(unmatchedFamilies);
      }
      if (completed === true) {
        setPoints(completeFamilies);
      }
      if (completed === false) {
        setPoints(uncompletedFamilies);
      }
    }
  }
  function handleNeighbors() {
    setTypeSelected("neighbors");
    if (matchSelected === "All") {
      if (completed === false) {
        setPoints(uncompleteNeighborss);
      }
      if (completed === true) {
        setPoints(completeNeighborss);
      }
      if (completed === "All") {
        setPoints(neighborss);
      }
    }
    if (matchSelected === true) {
      setPoints(matchedNeighborss);
    }
    if (matchSelected === false) {
      if (completed === "All") {
        setPoints(unmatchedNeighborss);
      }
      if (completed === true) {
        setPoints(completeNeighborss);
      }
      if (completed === false) {
        setPoints(uncompleteNeighborss);
      }
    }
  }
  function handleAllMatch() {
    setMatchSelected("All");
    if (typeSelected === "All") {
      if (completed === "All") {
        setPoints(locations);
      }
      if (completed === true) {
        setPoints(allCompleted);
      }
      if (completed === false) {
        setPoints(allUncompleted);
      }
    }
    if (typeSelected === "neighbors") {
      if (completed === "All") {
        setPoints(neighborss);
      }
      if (completed === true) {
        setPoints(completeNeighborss);
      }
      if (completed === false) {
        setPoints(uncompleteNeighborss);
      }
    }
    if (typeSelected === "families") {
      if (completed === "All") {
        setPoints(families);
      }
      if (completed === true) {
        setPoints(completeFamilies);
      }
      if (completed === false) {
        setPoints(uncompletedFamilies);
      }
    }
  }
  function handleMatched() {
    setMatchSelected(true);
    if (typeSelected === "All") {
      setPoints(allMatched);
    }
    if (typeSelected === "neighbors") {
      setPoints(matchedNeighborss);
    }
    if (typeSelected === "families") {
      setPoints(matchedFamilies);
    }
  }
  function handleUnmatched() {
    setMatchSelected(false);
    if (typeSelected === "All") {
      if (completed === "All") {
        setPoints(allUnmatched);
      }
      if (completed === true) {
        setPoints(allCompleted);
      }
      if (completed === false) {
        setPoints(allUncompleted);
      }
    }
    if (typeSelected === "neighbors") {
      if (completed === "All") {
        setPoints(unmatchedNeighborss);
      }
      if (completed === true) {
        setPoints(unmatchedNeighborss);
      }
      if (completed === false) {
        setPoints(uncompleteNeighborss);
      }
    }
    if (typeSelected === "families") {
      if (completed === "All") {
        setPoints(unmatchedFamilies);
      }
      if (completed === true) {
        setPoints(unmatchedFamilies);
      }
      if (completed === false) {
        setPoints(uncompletedFamilies);
      }
    }
  }
  function handleAllCompleted() {
    setCompleted("All");
    if (typeSelected === "All") {
      if (matchSelected === "All") {
        setPoints(locations);
      }
      if (matchSelected === true) {
        setPoints(allMatched);
      }
      if (matchSelected === false) {
        setPoints(allUnmatched);
      }
    }
    if (typeSelected === "neighbors") {
      if (matchSelected === "All") {
        setPoints(neighborss);
      }
      if (matchSelected === true) {
        setPoints(matchedNeighborss);
      }
      if (matchSelected === false) {
        setPoints(unmatchedNeighborss);
      }
    }
    if (typeSelected === "families") {
      if (matchSelected === "All") {
        setPoints(families);
      }
      if (matchSelected === true) {
        setPoints(matchedFamilies);
      }
      if (matchSelected === false) {
        setPoints(unmatchedFamilies);
      }
    }
  }
  function handleCompleted() {
    setCompleted(true);
    if (matchSelected === "All") {
      if (typeSelected === "All") {
        setPoints(allCompleted);
      }
      if (typeSelected === "neighbors") {
        setPoints(completeNeighborss);
      }
      if (typeSelected === "families") {
        setPoints(completeFamilies);
      }
    }
    if (matchSelected === true) {
      if (typeSelected === "All") {
        setPoints(allMatched);
      }
      if (typeSelected === "neighbors") {
        setPoints(matchedNeighborss);
      }
      if (typeSelected === "families") {
        setPoints(matchedFamilies);
      }
    }
    if (matchSelected === false) {
      if (typeSelected === "All") {
        setPoints(allUnmatched);
      }
      if (typeSelected === "neighbors") {
        setPoints(unmatchedNeighborss);
      }
      if (typeSelected === "families") {
        setPoints(unmatchedFamilies);
      }
    }
  }
  function handleUncompleted() {
    setCompleted(false);
    if (typeSelected === "All") {
      setPoints(allUncompleted);
    }
    if (typeSelected === "neighbors") {
      setPoints(uncompleteNeighborss);
    }
    if (typeSelected === "families") {
      setPoints(uncompletedFamilies);
    }
  }
  useEffect(() => {
    props.filter(points);
  }, [points]);

  useEffect(() => {
    setPoints(
      locations.filter(
        people =>
          people.first_name.toLowerCase().includes(search) ||
          people.last_name.toLowerCase().includes(search)
      )
    );
  }, [search]);

  useEffect(() => {
    if (zipSearch.length === 5) {
      setPoints(
        locations.filter(people => people.zip.toString().includes(zipSearch))
      );
    }
  }, [zipSearch || matchSelected || typeSelected]);

  return (
    <FilterDiv>
      <ButtonHolder>
        <Header> Search by Name</Header>
        <Input value={search} onChange={handleChange} />
      </ButtonHolder>
      <ButtonHolder>
        <Header> Search by Zip</Header>
        <Input value={zipSearch} onChange={handleZipChange} />
      </ButtonHolder>
      <HeaderHolder>
        <Image src={require("./mapicons/Member.svg")} />
        <Header>Member Type</Header>
      </HeaderHolder>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="member"
          name="membertype"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            selected={typeSelected}
            current="All"
            onClick={() => {
              handleAll();
            }}
            value="all"
            control={<Radio />}
            label="All"
          />
          <FormControlLabel
            selected={typeSelected}
            current="families"
            onClick={() => {
              handleFamilies();
            }}
            value="family"
            control={<Radio />}
            label="Families"
          />
          <FormControlLabel
            selected={typeSelected}
            current="neighbors"
            onClick={() => {
              handleNeighbors();
            }}
            value="neighbor"
            control={<Radio />}
            label="Neighbor"
          />
        </RadioGroup>
      </FormControl>

      <FormLabel component="legend" color="primary">
        Background Check
      </FormLabel>
      <RadioGroup
        aria-label="backcheck"
        name="backcheck"
        value={value}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          selected={completed}
          current="All"
          onClick={() => {
            handleAllCompleted();
          }}
          value="allapp"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          selected={completed}
          current={true}
          onClick={() => {
            handleCompleted();
          }}
          value="completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel
          selected={completed}
          current={false}
          onClick={() => {
            handleUncompleted();
          }}
          value="incomplete"
          control={<Radio />}
          label="Incomplete"
        />
      </RadioGroup>

      <FormLabel component="legend" color="primary">
        Match Status
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          selected={matchSelected}
          current="All"
          onClick={() => {
            handleAllMatch();
          }}
          value="allmatch"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          selected={matchSelected}
          current={true}
          onClick={() => {
            handleMatched();
          }}
          value="matched"
          control={<Radio />}
          label="Matched"
        />
        <FormControlLabel
          selected={matchSelected}
          current={false}
          onClick={() => {
            handleUnmatched();
          }}
          value="unmatched"
          control={<Radio />}
          label="Unmatched"
        />{" "}
      </RadioGroup>

      <FormLabel component="legend" color="primary" font-size="14px">
        App Status
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          selected={completed}
          current="All"
          onClick={() => {
            handleAllCompleted();
          }}
          value="allapp"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          selected={completed}
          current={true}
          onClick={() => {
            handleCompleted();
          }}
          value="completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel
          selected={completed}
          current={false}
          onClick={() => {
            handleUncompleted();
          }}
          value="incomplete"
          control={<Radio />}
          label="Incomplete"
        />{" "}
      </RadioGroup>
    </FilterDiv>
  );
}
