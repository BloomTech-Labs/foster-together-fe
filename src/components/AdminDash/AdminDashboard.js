import React, { useEffect } from "react";
import MemberTable from "./Table/MemberTable";
import Navigation from "./Navigation/Navigation";
import Welcome from "./Welcome";
import TaskBar from "./TaskBar/TaskBar";
import { DashContainer, TableContain } from "./adminDashStyles";
import { useSelector, useDispatch } from "react-redux";
import { getMembers } from "../../redux/thunks/memThunks";
import SearchBar from "./AdminSearch/search";

export default function Distance() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);
  const { membersArray } = useSelector(state => state.mem);

  // Functions to display taskbar //

  const numApplications = membersArray.filter(
    people => people.application === 1
  );

  const numVolunteers = membersArray.filter(
    people => people.type === "neighbors"
  );

  const familiesToMatch = membersArray.filter(
    people => people.type === "families"
  );

  return (
    <>
      <Navigation />
      <DashContainer>
        <Welcome />
        <TaskBar
          members={membersArray}
          numApplications={numApplications}
          numVolunteers={numVolunteers}
          familiesToMatch={familiesToMatch}
        />
        <SearchBar members={membersArray} />
        <TableContain>
          <MemberTable members={membersArray} />
        </TableContain>
      </DashContainer>
    </>
  );
}
