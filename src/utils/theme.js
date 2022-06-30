import { createTheme } from '@material-ui/core/styles'

const primaryColor = '#6F6F6F'
const secondaryColor = '#ec7e81'

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Poppins']
      }
    }
  },
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    }
  }
})
