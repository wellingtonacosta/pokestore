import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  optionsRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh",
    backgroundColor: theme.palette.grey[300]
  },
  Typographypadding:{
     padding: '16px'
  }
}))

export default useStyles