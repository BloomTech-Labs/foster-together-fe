import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import NeighborTable from './NeighborTable'
import { Container, Switch, Grid } from '@material-ui/core'
import { PageView } from '../../Analytics';
import { useAdminDashStyle } from './adminDashStyles'
import AdminHeader from './AdminHeader';
import LeftMenu from './LeftMenu'
import Welcome from './Welcome'

export default function Distance(props) {
  const classes = useAdminDashStyle()
  const [neighbors, setNeighbors] = useState([])
  const [families, setFamilies] = useState([])
  const [famNeighbor, setFamNeighbor] = useState(true)
  console.log(famNeighbor)

  useEffect(() => {
    PageView()
  }, [])

  useEffect(() => {
    axios
      .get('https://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/neighbors')
      .then(res => {
        console.log(res)
        setNeighbors(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('https://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/families')
      .then(res => {
        console.log(res)
        setFamilies(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {/* <AdminHeader /> */}
      <LeftMenu />
      <Container className={classes.main}>
        <Welcome />
      <Container>
          <Container
            className={classes.updates}>
            <h1 style={{ margin: '0', color: 'black' }}>Updates</h1>
            <p>FUTURE RELEASE</p>
          </Container>
        </Container>

        <Container className={classes.tableContain}>
        
        {/* Switch between families and neighbors */}
        {/* <Grid
            container
            alignItems='center'
            spacing={1}
          >
            <Grid style={{ fontSize: '22px' }} item>
              Neighbors
          </Grid>
            <Grid item>
              <Switch onChange={() => setFamNeighbor(!famNeighbor)} />
            </Grid>
            <Grid style={{ fontSize: '22px' }} item>
              Families
          </Grid>
          </Grid> */}
          {famNeighbor ? (
            <NeighborTable
              userType='Neighbors'
              Data={neighbors}
              Data2={families}
              props={props}
              />
          ) : (
              <NeighborTable userType='Families' Data={families} props={props} />
            )}
        </Container>
      </Container>
    </>
  )
}
