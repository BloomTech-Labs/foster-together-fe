import { makeStyles } from '@material-ui/core'

export const useSignUpStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '70%',
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
  form: {
    padding: theme.spacing(4, 12),
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
