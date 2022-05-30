import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

 const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    }
  },
});

export default theme;