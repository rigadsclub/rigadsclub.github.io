import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.svg';
import Home from "./views/Home";
import About from "./views/About";
import ConfigProvider from "./components/providers/ConfigProvider";
import ThemeProvider from "./components/providers/ThemeProvider";
import Header from "./views/Header";
import Footer from "./views/Footer";

const useStyles = makeStyles(() => ({
    container: {
        margin: '0 auto',
        padding: '20px 20px',
        maxWidth: '1470px',
        textAlign: 'center',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router>
                    <div className={classes.container}>
                        <Header />
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </ConfigProvider>
        </ThemeProvider>
    );

}

export default App;
