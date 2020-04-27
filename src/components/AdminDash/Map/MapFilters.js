import React, { useState, useEffect } from "react";
import {
  FilterDiv,
  ButtonHolder,
  Header,
  Image,
  HeaderHolder,
  Input,
  ButtonContain,
  Label,
  FilterInput,
  InputFilter,
  ArrowIcon,
  Dot,
  FilterDropdown
} from "./MapStyles";
import { Buttons, TopSecButton } from "./MapStyles";
import { FaLocationArrow } from "react-icons/fa";

/* Function Below */
export default function Filter(props) {
  const locations = props.locations;
  const [typeSelected, setTypeSelected] = useState(null);
  const [matchSelected, setMatchSelected] = useState("All");
  const [points, setPoints] = useState(locations);
  const [completed, setCompleted] = useState("All");
  const [search, setSearch] = useState("");
  const [zipSearch, setZipSearch] = useState("");

  // Handles search functionality
  const handleChange = e => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const handleZipChange = e => {
    setZipSearch(e.target.value);
  };

  useEffect(() => {
    setTimeout(function() {
      props.filter([]);
    }, 1000);
  }, []);

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
          people.last_name.toLowerCase().includes(search) ||
          people.address.toLowerCase().includes(search) ||
          people.email.toLowerCase().includes(search) ||
          people.phone.toLowerCase().includes(search)
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
      <FilterInput
        onChange={handleChange}
        id="id"
        type="text"
        name="filter"
        placeholder="Search"
      />

      <ButtonHolder>
        <HeaderHolder>
          <Header>Application</Header>
        </HeaderHolder>

        <ButtonContain>
          <TopSecButton
            selected={completed}
            current={true}
            onClick={() => {
              handleCompleted();
            }}
          ></TopSecButton>
          <Label>Approved</Label>
          <Dot src={require("./mapicons/GreenDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton
            selected={completed}
            current={false}
            onClick={() => {
              handleUncompleted();
            }}
          ></TopSecButton>
          <Label>Completed</Label>
          <Dot src={require("./mapicons/GreenDot.svg")} />
        </ButtonContain>

        <ButtonContain>
          <TopSecButton
            selected={completed}
            current="All"
            onClick={() => {
              handleAllCompleted();
            }}
          ></TopSecButton>
          <Label>All</Label>
        </ButtonContain>
      </ButtonHolder>

      <ButtonHolder>
        <HeaderHolder>
          <Header>Background Check</Header>
        </HeaderHolder>

        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>Completed</Label>
          <Dot src={require("./mapicons/GreenDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>In Progress</Label>
          <Dot src={require("./mapicons/YellowDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>Not Started</Label>
          <Dot src={require("./mapicons/RedDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>All</Label>
        </ButtonContain>
      </ButtonHolder>

      <ButtonHolder>
        <HeaderHolder>
          <Header>Training Module</Header>
        </HeaderHolder>

        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>Completed</Label>
          <Dot src={require("./mapicons/GreenDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>In Progress</Label>
          <Dot src={require("./mapicons/YellowDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>Not Started</Label>
          <Dot src={require("./mapicons/RedDot.svg")} />
        </ButtonContain>
        <ButtonContain>
          <TopSecButton></TopSecButton>
          <Label>All</Label>
        </ButtonContain>
      </ButtonHolder>
      <ArrowIcon>
        <FaLocationArrow />
      </ArrowIcon>
      <InputFilter
        onChange={handleChange}
        id="id"
        type="text"
        name="filter"
        placeholder="Search"
      />

      <FilterDropdown id="miles">
        <option value="2miles">within 2 miles</option>
        <option value="5miles">within 5 miles</option>
        <option value="8miles">within 8 miles</option>
        <option value="10miles">within 10 miles</option>
      </FilterDropdown>

      <ButtonHolder>
        <HeaderHolder>
          <Image src={require("./mapicons/Member.svg")} />
          <Header>Member Type</Header>
        </HeaderHolder>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current="families"
            onClick={() => {
              handleFamilies();
            }}
          ></Buttons>
          <Label>Families</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current="neighbors"
            onClick={() => {
              handleNeighbors();
            }}
          ></Buttons>
          <Label>Neighbor</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current="All"
            onClick={() => {
              handleAll();
            }}
            checked="checked"
          ></Buttons>
          <Label>Both</Label>
        </ButtonContain>
      </ButtonHolder>

      <ButtonHolder>
        <HeaderHolder>
          <Header>Match Status</Header>
        </HeaderHolder>
        <ButtonContain>
          <Buttons
            selected={matchSelected}
            current={true}
            onClick={() => {
              handleMatched();
            }}
          ></Buttons>
          <Label>Matched</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={matchSelected}
            current={false}
            onClick={() => {
              handleUnmatched();
            }}
          ></Buttons>
          <Label>Not Matched</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={matchSelected}
            current="All"
            onClick={() => {
              handleAllMatch();
            }}
          ></Buttons>
          <Label>Both</Label>
        </ButtonContain>
      </ButtonHolder>
    </FilterDiv>
  );
}

/* 
  <ButtonHolder>
      <Header> Search by Name</Header>
      <Input value={search} onChange={handleChange} />
  </ButtonHolder>
  <ButtonHolder>
      <Header> Search by Zip</Header>
      <Input value={zipSearch} onChange={handleZipChange} />
  </ButtonHolder> 
*/

/* 
<ButtonHolder>
        <HeaderHolder>
          <Header>App Status</Header>
        </HeaderHolder>
        <ButtonContain>
          <Buttons
            selected={completed}
            current="All"
            onClick={() => {
              handleAllCompleted();
            }}
          ></Buttons>
          <Label>All</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={completed}
            current={true}
            onClick={() => {
              handleCompleted();
            }}
          ></Buttons>
          <Label>Completed</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={completed}
            current={false}
            onClick={() => {
              handleUncompleted();
            }}
          ></Buttons>
          <Label>Incomplete</Label>
        </ButtonContain>
      </ButtonHolder>
*/
