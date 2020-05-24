import React from 'react'
import { ThemeProvider as Provider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

let theme = createMuiTheme({
    palette: {
        background: {
            default: '#eeeeee',
        },
        secondary: {
            main: '#FFFFFF',
        },
        text: {
            primary: '#000000',
            secondary: '#808080',
        },
    },
});

export default function ThemeProvider({ children }) {
    return <Provider theme={theme}>{children}</Provider>
}
