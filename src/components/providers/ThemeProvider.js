import React from 'react'
import { ThemeProvider as Provider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: '1200',
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: '1200',
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: '900',
            marginBlockStart: '0',
            marginBlockEnd: '0.23em',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: '400',
            marginBlockStart: '0.1rem',
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: '400',
        },
    },
    palette: {
        background: {
            default: '#eeeeee',
        },
        primary: {
            main: '#363636',
            contrastText: '#EEEEEE',
        },
        secondary: {
            main: '#363636',
        },
        text: {
            primary: '#363636',
            secondary: '#EEEEEE',
        },
    },
});

export default function ThemeProvider({ children }) {
    return <Provider theme={theme}>{children}</Provider>
}
