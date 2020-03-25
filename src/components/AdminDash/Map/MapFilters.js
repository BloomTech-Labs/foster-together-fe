import React, { useState, useEffect } from 'react'
import {
  FilterDiv,
  ButtonHolder,
  Header,
  Image,
  HeaderHolder,
  Input,
  ButtonContain,
  Label,
} from './MapStyles'
import { locations } from './Locations'
import { Buttons } from './MapStyles'

export default function Filter(props) {
  const [typeSelected, setTypeSelected] = useState('All')
  const [matchSelected, setMatchSelected] = useState('All')
  const [points, setPoints] = useState(locations)
  const [completed, setCompleted] = useState('All')
  const [search, setSearch] = useState('')
  const [zipSearch, setZipSearch] = useState('')
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const handleZipChange = e => {
    setZipSearch(e.target.value)
  }
  const neighbors = locations.filter(people => people.type === 'neighbor')
  const families = locations.filter(people => people.type === 'family')
  const matchedNeighbors = locations.filter(
    people => people.type === 'neighbor' && people.match === true
  )
  const unmatchedNeighbors = locations.filter(
    people => people.type === 'neighbor' && people.match === false
  )
  const matchedFamilies = locations.filter(
    people => people.type === 'family' && people.match === true
  )
  const unmatchedFamilies = locations.filter(
    people => people.type === 'family' && people.match === false
  )
  const allMatched = locations.filter(people => people.match === true)
  const allUnmatched = locations.filter(people => people.match === false)
  const allCompleted = locations.filter(people => people.application === true)
  const allUncompleted = locations.filter(
    people => people.application === false
  )
  const uncompletedFamilies = families.filter(
    people => people.application === false
  )
  const completeFamilies = families.filter(
    people => people.application === true
  )
  const completeNeighbors = neighbors.filter(
    people => people.application === true
  )

  const uncompleteNeighbors = neighbors.filter(
    people => people.application === false
  )

  function handleAll() {
    setTypeSelected('All')
    if (matchSelected === 'All') {
      if (completed === 'All') {
        setPoints(locations)
      }
      if (completed === true) {
        setPoints(allCompleted)
      }
      if (completed === false) {
        setPoints(allUncompleted)
      }
    }
    if (matchSelected === true) {
      setPoints(allMatched)
    }
    if (matchSelected === false) {
      setPoints(allUnmatched)
    }
  }
  function handleFamily() {
    setTypeSelected('family')
    if (matchSelected === 'All') {
      if (completed === false) {
        setPoints(uncompletedFamilies)
      }
      if (completed === true) {
        setPoints(completeFamilies)
      }
      if (completed === 'All') {
        setPoints(families)
      }
    }
    if (matchSelected === true) {
      setPoints(matchedFamilies)
    }
    if (matchSelected === false) {
      if (completed === 'All') {
        setPoints(unmatchedFamilies)
      }
      if (completed === true) {
        setPoints(completeFamilies)
      }
      if (completed === false) {
        setPoints(uncompletedFamilies)
      }
    }
  }
  function handleNeighbor() {
    setTypeSelected('neighbor')
    if (matchSelected === 'All') {
      if (completed === false) {
        setPoints(uncompleteNeighbors)
      }
      if (completed === true) {
        setPoints(completeNeighbors)
      }
      if (completed === 'All') {
        setPoints(neighbors)
      }
    }
    if (matchSelected === true) {
      setPoints(matchedNeighbors)
    }
    if (matchSelected === false) {
      if (completed === 'All') {
        setPoints(unmatchedNeighbors)
      }
      if (completed === true) {
        setPoints(completeNeighbors)
      }
      if (completed === false) {
        setPoints(uncompleteNeighbors)
      }
    }
  }
  function handleAllMatch() {
    setMatchSelected('All')
    if (typeSelected === 'All') {
      if (completed === 'All') {
        setPoints(locations)
      }
      if (completed === true) {
        setPoints(allCompleted)
      }
      if (completed === false) {
        setPoints(allUncompleted)
      }
    }
    if (typeSelected === 'neighbor') {
      if (completed === 'All') {
        setPoints(neighbors)
      }
      if (completed === true) {
        setPoints(completeNeighbors)
      }
      if (completed === false) {
        setPoints(uncompleteNeighbors)
      }
    }
    if (typeSelected === 'family') {
      if (completed === 'All') {
        setPoints(families)
      }
      if (completed === true) {
        setPoints(completeFamilies)
      }
      if (completed === false) {
        setPoints(uncompletedFamilies)
      }
    }
  }
  function handleMatched() {
    setMatchSelected(true)
    if (typeSelected === 'All') {
      setPoints(allMatched)
    }
    if (typeSelected === 'neighbor') {
      setPoints(matchedNeighbors)
    }
    if (typeSelected === 'family') {
      setPoints(matchedFamilies)
    }
  }
  function handleUnmatched() {
    setMatchSelected(false)
    if (typeSelected === 'All') {
      if (completed === 'All') {
        setPoints(allUnmatched)
      }
      if (completed === true) {
        setPoints(allCompleted)
      }
      if (completed === false) {
        setPoints(allUncompleted)
      }
    }
    if (typeSelected === 'neighbor') {
      if (completed === 'All') {
        setPoints(unmatchedNeighbors)
      }
      if (completed === true) {
        setPoints(unmatchedNeighbors)
      }
      if (completed === false) {
        setPoints(uncompleteNeighbors)
      }
    }
    if (typeSelected === 'family') {
      if (completed === 'All') {
        setPoints(unmatchedFamilies)
      }
      if (completed === true) {
        setPoints(unmatchedFamilies)
      }
      if (completed === false) {
        setPoints(uncompletedFamilies)
      }
    }
  }
  function handleAllCompleted() {
    setCompleted('All')
    if (typeSelected === 'All') {
      if (matchSelected === 'All') {
        setPoints(locations)
      }
      if (matchSelected === true) {
        setPoints(allMatched)
      }
      if (matchSelected === false) {
        setPoints(allUnmatched)
      }
    }
    if (typeSelected === 'neighbor') {
      if (matchSelected === 'All') {
        setPoints(neighbors)
      }
      if (matchSelected === true) {
        setPoints(matchedNeighbors)
      }
      if (matchSelected === false) {
        setPoints(unmatchedNeighbors)
      }
    }
    if (typeSelected === 'family') {
      if (matchSelected === 'All') {
        setPoints(families)
      }
      if (matchSelected === true) {
        setPoints(matchedFamilies)
      }
      if (matchSelected === false) {
        setPoints(unmatchedFamilies)
      }
    }
  }
  function handleCompleted() {
    setCompleted(true)
    if (matchSelected === 'All') {
      if (typeSelected === 'All') {
        setPoints(allCompleted)
      }
      if (typeSelected === 'neighbor') {
        setPoints(completeNeighbors)
      }
      if (typeSelected === 'family') {
        setPoints(completeFamilies)
      }
    }
    if (matchSelected === true) {
      if (typeSelected === 'All') {
        setPoints(allMatched)
      }
      if (typeSelected === 'neighbor') {
        setPoints(matchedNeighbors)
      }
      if (typeSelected === 'family') {
        setPoints(matchedFamilies)
      }
    }
    if (matchSelected === false) {
      if (typeSelected === 'All') {
        setPoints(allUnmatched)
      }
      if (typeSelected === 'neighbor') {
        setPoints(unmatchedNeighbors)
      }
      if (typeSelected === 'family') {
        setPoints(unmatchedFamilies)
      }
    }
  }
  function handleUncompleted() {
    setCompleted(false)
    if (typeSelected === 'All') {
      setPoints(allUncompleted)
    }
    if (typeSelected === 'neighbor') {
      setPoints(uncompleteNeighbors)
    }
    if (typeSelected === 'family') {
      setPoints(uncompletedFamilies)
    }
  }
  useEffect(() => {
    props.filter(points)
  }, [points])

  useEffect(() => {
    setPoints(
      locations.filter(people => people.name.toLowerCase().includes(search))
    )
  }, [search])

  useEffect(() => {
    if (zipSearch.length === 5) {
      setPoints(
        locations.filter(people => people.zip.toString().includes(zipSearch))
      )
    }
  }, [zipSearch || matchSelected || typeSelected])

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
      <ButtonHolder>
        <HeaderHolder>
          <Image src={require('./mapicons/Vector.png')} />
          <Header>Member Type</Header>
        </HeaderHolder>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current='All'
            onClick={() => {
              handleAll()
            }}
          >X</Buttons>
          <Label>All</Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current='family'
            onClick={() => {
              handleFamily()
            }}
          >X</Buttons>
          <Label> Family </Label>
        </ButtonContain>
        <ButtonContain>
          <Buttons
            selected={typeSelected}
            current='neighbor'
            onClick={() => {
              handleNeighbor()
            }}
          > X </Buttons>
          <Label>neighbor</Label>
        </ButtonContain>
      </ButtonHolder>

      <ButtonHolder>
        <HeaderHolder>
          <Image src={'https://static.thenounproject.com/png/355154-200.png'} />
          <Header>Match Status</Header>
        </HeaderHolder>
        <ButtonContain>
        <Buttons
          selected={matchSelected}
          current='All'
          onClick={() => {
            handleAllMatch()
          }}
        >
          X
        </Buttons>
        <Label>All</Label>
        </ButtonContain>
        <ButtonContain>
        <Buttons
          selected={matchSelected}
          current={true}
          onClick={() => {
            handleMatched()
          }}
        >
          X
        </Buttons>
        <Label>Matched</Label>
        </ButtonContain>
        <ButtonContain>
        <Buttons
          selected={matchSelected}
          current={false}
          onClick={() => {
            handleUnmatched()
          }}
        >
          X
        </Buttons>
        <Label> Unmatched</Label>
        </ButtonContain>
      </ButtonHolder>

      <ButtonHolder>
        <HeaderHolder>
          <Image src={'https://cdn.onlinewebfonts.com/svg/img_349207.png'} />
          <Header>App Status</Header>
        </HeaderHolder>
        <ButtonContain>
        <Buttons
          selected={completed}
          current='All'
          onClick={() => {
            handleAllCompleted()
          }}
        >
          X
        </Buttons>
        <Label> All</Label>
        </ButtonContain>
        <ButtonContain>
        <Buttons
          selected={completed}
          current={true}
          onClick={() => {
            handleCompleted()
          }}
        >
          X
        </Buttons>
        <Label>completed</Label>
        </ButtonContain>
        <ButtonContain>
        <Buttons
          selected={completed}
          current={false}
          onClick={() => {
            handleUncompleted()
          }}
        >
          X
        </Buttons>
        <Label>Incomplete</Label>
        </ButtonContain>
      </ButtonHolder>
    </FilterDiv>
  )
}
