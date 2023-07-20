import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'

import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>

          <BrowserRouter>
            <App />
          </BrowserRouter>
          <CssBaseline />

        </ThemeProvider>
      </QueryClientProvider>

    </Provider>
  </React.StrictMode>,
)
