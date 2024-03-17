import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  palette: {
    // Blue Color variation
    primary: {
      lighter: '#DEE4FF',
      light: '#E9ECFF',
      main: '#2F4CDD',
      contrastText: '#fff',
    },
    // Black color Variaion 
    secondary: {
      light: '#969BA0',
      main: '#3E4954',
      dark: '#000000',
      contrastText: '#fff',
    },
    // Red and orange color
    danger: {
      lighter: '#FFEBE7',
      light: '#F7A16E',
      main: '#FF6D4C',
      dark: '#FF6D4D',
      contrastText: '#fff',
    },
    // Green color
    sucess: {
      light: '#E9FFEF',
      main: '#2BC155',
      dark: '#FF6D4D',
      contrastText: '#000',

    },
    purple: {
      main: '#B519EC'
    }
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
