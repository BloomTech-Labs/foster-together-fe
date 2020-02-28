import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import NeighborTable from './NeighborTable'
import { Container, Switch, Grid } from '@material-ui/core'
import { PageView } from '../../Analytics'

export default function Distance(props) {
  const [neighbors, setNeighbors] = useState([])
  const [families, setFamilies] = useState([])
  const [famNeighbor, setFamNeighbor] = useState(true)
  console.log(famNeighbor)

  useEffect(() => {
    PageView()
  }, [])

  useEffect(() => {
    axios
      .get('https://foster-together-back.herokuapp.com/api/neighbors')
      .then(res => {
        console.log(res)
        setNeighbors(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('https://foster-together-back.herokuapp.com/api/families')
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
      <Container
        style={{
          position: 'fixed',
          left: '0',
          backgroundColor: '#cfe8fc',
          height: '100vh',
          width: '20vw',
          minWidth: '250px',
        }}
      >
        <Grid
          container
          style={{ paddingTop: '50px' }}
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
        </Grid>
      </Container>
      <Container
        alignItems='center'
        style={{
          position: 'fixed',
          left: '20vw',
          backgroundColor: 'blue',
          height: 'auto',
          minHeight: '100vh',
          width: '80vw',
        }}
      >
        <Container
          style={{
            padding: '0',
            textAlign: 'center',
            position: 'fixed',
            left: '22.5vw',
            top: '5vh',
            backgroundColor: 'white',
            height: '50vh',
            width: '75vw',
            borderRadius: '5px',
          }}
        >
          <Container
            style={{
              padding: '0',
              width: '100%',
              backgroundColor: 'black',
              borderRadius: '5px',
            }}
          >
            <h1 style={{ margin: '0', color: 'white' }}>Updates</h1>
          </Container>
          <p>FUTURE RELEASE</p>
        </Container>

        <Container
          style={{
            position: 'fixed',
            left: '20vw',
            top: '60vh',
            height: 'auto',
            width: '80vw',
            borderRadius: '5px',
          }}
        >
          {famNeighbor ? (
            <NeighborTable
              userType='Neighbors'
              Data={neighbors}
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
