import React, { useEffect } from 'react'
import NeighborTable from './Table/NeighborTable'
import Navigation from './Navigation/Navigation'
import Welcome from './Welcome'
import TaskBar from './TaskBar/TaskBar'
import { DashContainer, TableContain } from './adminDashStyles'
import { useSelector, useDispatch } from 'react-redux'
import { getNeighbors } from '../../redux/thunks/neighThunks'
import { getFamilies } from '../../redux/thunks/famThunks'

export default function Distance(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFamilies())
    dispatch(getNeighbors())
  }, [dispatch])
  const { neighborsArray } = useSelector(state => state.neigh)
  const { familiesArray } = useSelector(state => state.fam)
  return (
    <>
      <Navigation routing={props} />
      <DashContainer>
        <Welcome />
        <TaskBar />
        <TableContain>
          <NeighborTable
            userType='Neighbors'
            Neighbors={neighborsArray}
            Families={familiesArray}
            props={props}
          />
        </TableContain>
      </DashContainer>
    </>
  )
}
