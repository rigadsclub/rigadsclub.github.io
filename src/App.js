import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Home from "./views/Home";
import About from "./views/About";
import ConfigProvider from "./components/providers/ConfigProvider";
import ThemeProvider from "./components/providers/ThemeProvider";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Members from "./components/Members";
import RigaRealEstateProject from "./views/realestate/RigaRealEstateProject";

const useStyles = makeStyles(theme => ({
    root: {
        /*background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`,*/
    },
    container: {
        margin: '0 auto',
        padding: '20px 20px',
        maxWidth: '1470px',
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    footer: {

    },
    background: {
        backgroundColor: "#363636",
        /*background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`,*/
    },
    homeSection: {
        paddingBottom: '20px',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router>
                    <div className={classes.root}>
                        <div className={classes.background}>
                            <div className={classes.container}>
                                <Header />
                                <Switch>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                    <Route path="/riga">
                                        <RigaRealEstateProject />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <div className={classes.container}>
                            <section className={classes.homeSection}>
                                <h2>Members</h2>
                                <Members />
                            </section>
                        </div>
                        <div className={classes.container}>
                            <Footer />
                        </div>
                    </div>
                </Router>
            </ConfigProvider>
        </ThemeProvider>
    );

}

export default App;
