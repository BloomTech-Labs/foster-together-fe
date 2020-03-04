import React, {useState} from 'react'


export const columns = [
  { Header: "Full Name", accessor: "name" },
  { Header: "Member Type", accessor: "type", Cell: props => <img src={props.data[props.row.id].type} height={60} width={60}/>},
  { Header: "Match", accessor: "match" },
  { Header: "City", accessor: "city" }
];
