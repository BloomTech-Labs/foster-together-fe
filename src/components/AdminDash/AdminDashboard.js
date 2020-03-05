import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NeighborTable from "./Table/NeighborTable";
import { PageView } from "../../Analytics";
import AdminHeader from "./AdminHeader";
import LeftMenu from "./LeftMenu";
import Welcome from "./Welcome";
import TaskBar from "./TaskBar/TaskBar";
import { DashContainer, Updates, TableContain } from "./adminDashStyles";

export default function Distance(props) {
  const [neighbors, setNeighbors] = useState([]);
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/neighbors"
      )
      .then(res => {
        setNeighbors(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        "http://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/families"
      )
      .then(res => {
        setFamilies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <AdminHeader /> */}
      <LeftMenu routing = {props}/>
      <DashContainer>
        <Welcome />
        <TaskBar />
        <TableContain>
            <NeighborTable
              userType="Neighbors"
              Data={neighbors}
              Data2={families}
              props={props}
            />
        </TableContain>
      </DashContainer>
    </>
  );
}
