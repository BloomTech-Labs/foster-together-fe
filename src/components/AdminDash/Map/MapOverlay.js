import React, { useState } from 'react'
import Map from './Map'
import PersonInfo from './PersonInfo'
import MapFilters from './MapFilters'
import { PageContain } from './MapStyles'
import {locations} from './Locations'
import NavBar from '../Navigation/Navigation'

export default function MapThing() {
  const [points, setPoints] = useState(locations)
  const [selected, setSelected] = useState({})
  
  return (
    <>
    <NavBar />
    <PageContain>
      <MapFilters filter={setPoints} />
      <Map locations={points} selected={selected} setSelected={setSelected} />
      <PersonInfo selected={selected}/>
    </PageContain>
    </>
  )
}
