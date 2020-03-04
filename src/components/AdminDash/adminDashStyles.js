import { makeStyles } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'

export const useAdminDashStyle = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    marginLeft: "10%",
    backgroundColor: 'white',
    height: 'auto',
    minHeight: '100vh',
    width: '90%',
    maxWidth: '10000px'
  },
  updates: {
    padding: '0',
    textAlign: 'center',
    position: 'relative',
    left: '0vw',
    top: '5vh',
    backgroundColor: 'lightgrey',
    height: '20vh',
    width: '75vw',
    borderRadius: '5px',
  },
  tableContain: {
    position: 'relative',
    left: '0vw',
    top: '10vh',
    height: 'auto',
    width: '80vw',
    borderRadius: '5px',
  },
  leftSelect: {
    position: 'fixed',
    left: '0',
    backgroundColor: ' white',
    height: '100vh',
    width: '14vw',
    minWidth: "80px",
    paddingTop: " 30px",
    zIndex: "2",
    color: "#FF8D86",
    fontSize: '1.2rem'
  },
  icons: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
    marginTop: "10%",
    padding: "5px",
    marginRight: "25px",
    marginLeft: "10px"
  }
}))
