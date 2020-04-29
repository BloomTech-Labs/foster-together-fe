import React, { useState, useEffect } from "react";
import Map from "./Map/Map";
import PersonInfo from "./PersonInfo/PersonInfo";
import MapFilters from "./MapFilters/MapFilters";
import { PageContain } from "./MapStyles";
import NavBar from "../Navigation/Navigation";
import { getMembers } from "../../../redux/thunks/memThunks";
import { useSelector, useDispatch } from "react-redux";

export default function MapThing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const locations = useSelector(state => state.mem);

  const [points, setPoints] = useState(locations.membersArray);
  const [selected, setSelected] = useState({});

  return (
    <>
      <NavBar />
      <PageContain>
        <MapFilters filter={setPoints} locations={locations.membersArray} />
        <Map locations={points} selected={selected} setSelected={setSelected} />
        <PersonInfo selected={selected} />
      </PageContain>
    </>
  );
}
