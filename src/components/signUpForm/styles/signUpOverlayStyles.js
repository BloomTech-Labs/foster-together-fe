import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10vh auto;
  background: #fff;
  min-height: 80vh;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(180, 180, 180, 0.2),
    0 6px 20px 0 rgba(180, 180, 180, 0.19);
`

export const Sidebar = styled.div`
  background: #f9f9f9;
  width: 25%;
  padding: 25px;
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const MainContent = styled.div`
  width: 75%;
  padding: 25px 120px;
`

export const SidebarTitle = styled.h2`
  font-size: 1.8rem;
  margin: 50px 0;
`

export const Instructions = styled.ol`
  font-size: 1.4rem;
  margin: 0;
  padding: 0 25px;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const Btn = styled.button`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  height: 5.6rem;
  width: 14rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
`

export const useSignUpStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow:
      '0 4px 8px 0 rgba(180, 180, 180, 0.2), 0 6px 20px 0 rgba(180, 180, 180, 0.19)',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
  container: {
    padding: 0,
    minHeight: '80vh',
  },
  sideBar: {
    background: '#F9F9F9',
    minHeight: '80vh',
    padding: theme.spacing(4, 3),
  },
  logo: {
    marginLeft: theme.spacing(2),
  },
  list: {
    color: theme.palette.primary.main,
  },
  form: {
    padding: theme.spacing(4, 12),
  },
  tab: {
    maxWidth: 100,
  },
  tabLabel: {
    color: theme.palette.primary.light,
    textTransform: 'capitalize',
    fontSize: '1.2rem',
    lineHeight: '21px',
    maxWidth: 100,
  },
  tabLabelActive: {
    color: theme.palette.primary.main,
  },
  tabIndicator: {
    height: 5,
    maxWidth: 100,
    marginLeft: 30,
  },
  stepper: {
    padding: theme.spacing(5, 2, 5, 2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))
