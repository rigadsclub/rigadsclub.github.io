import React from 'react'
import { ThemeProvider as Provider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        background: {
            default: '#eeeeee',
        },
        secondary: {
            main: '#FFFFFF',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#000000',
        },
    },
});

export default function ThemeProvider({ children }) {
    return <Provider theme={theme}>{children}</Provider>
}
