import React, { useState } from 'react'
import useStyles from './styling/LoginStyling'
import { Paper, Grid, Tabs, Tab } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'

const LoginComponents = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const handleToggle = (e, newValue) => setValue(newValue)
  const { push } = useHistory()
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={0}>
        <Grid
          container
          direction='row'
          alignItems='stretch'
          className={classes.container}
        >
          <Grid item direction='column' xs={3} className={classes.sideBar}>
            <img
              src='https://via.placeholder.com/200x85'
              alt='Foster Together logo'
            />
          </Grid>
          <Grid item direction='column' xs={9} className={classes.form}>
            <Tabs
              value={value}
              onChange={handleToggle}
              indicatorColor='primary'
              textColor='primary'
              centered
            >
              <Tab label='Log In' />
              <Tab label='Register' onClick={() => push('/signup')} />
            </Tabs>
            <LoginForm />
          </Grid>
        </Grid>
      </Paper>
    </main>
  )
}

export default LoginComponents
