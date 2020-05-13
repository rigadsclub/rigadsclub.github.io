import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.svg';
import Home from "./views/Home";
import About from "./views/About";

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '10px 20px',
    },
    contents: {
        padding: '20px 100px',
        textAlign: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        paddingRight: 10,
    },
    navigation: {
    },
}));
const theme = createMuiTheme();

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppBar position="static" className={classes.header}>
                    <IconButton>
                        <img className={classes.logo} src={logo} alt="logo" />
                    </IconButton>
                    <h2>Riga Data Science Club</h2>
                </AppBar>
                <div className={classes.contents}>
                    {/*
                                        <div className={classes.navigation}>
                        <Button color="inherit" component={Link}
                                to={"/"} >Home</Button>
                        <Button color="inherit" component={Link}
                                to={"/about"} >About</Button>
                    </div>
                    */
                    }

                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );

}

export default App;
