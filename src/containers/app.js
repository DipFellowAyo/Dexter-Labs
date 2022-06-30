import React, { Suspense } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

import Loading from '../components/loading'
import Routes from './routes'
import { theme } from '../utils/theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
