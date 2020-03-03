import { makeStyles } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'

export const useAdminDashStyle = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    marginLeft: "10%",
    backgroundColor: 'white',
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
    height: '50vh',
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
    position: 'absolute',
    left: '0',
    backgroundColor: ' #848484',
    height: '100vh',
    width: '14vw',
    minWidth: "80px",
    paddingTop: " 30px",
    zIndex: "2",
    color: "#9B9B9B"
  },
  icons: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
    marginTop: "10%",
    backgroundColor: '#DBEEF8',
    padding: "10px",
    marginRight: "25px",
    marginLeft: "10px"
  }
}))
