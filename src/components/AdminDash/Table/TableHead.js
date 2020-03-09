import React from 'react'
import { Circle } from '../AdminDashPics/icons'

export const columns = [
  { Header: 'FULL NAME', accessor: 'name' },
  {
    Header: 'MEMBER TYPE',
    accessor: 'type',
    Cell: props => (
      <img src={props.data[props.row.id].type} height={45} width={45} alt="either an f for family or n for neighbor" />
    ),
  },
  { Header: 'MATCH', accessor: 'match' },
  { Header: 'CITY', accessor: 'city' },
  {
    Header: 'APP',
    accessor: 'application',
    Cell: props => <Circle color={'green'} />,
  },
  {
    Header: 'BGC',
    accessor: 'background',
    Cell: props =>
      props.data[props.row.id].background ? (
        <Circle color={'green'} />
      ) : (
        <Circle color={'red'} />
      ),
  },
  {
    Header: 'TRN',
    accessor: 'training',
    Cell: props =>
      props.data[props.row.id].training ? (
        <Circle color={'green'} />
      ) : (
        <Circle color={'red'} />
      ),
  },
  {
    Header: 'EMAIL',
    accessor: 'email',
  },
  {
    Header: 'PHONE',
    accessor: 'phone',
  },
]
