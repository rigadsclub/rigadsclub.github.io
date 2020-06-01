import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/Home";
import ConfigProvider from "./components/providers/ConfigProvider";
import ThemeProvider from "./components/providers/ThemeProvider";
import RigaRealEstate from "./views/RigaRealEstate";
import JoinUs from "./views/JoinUs";
import TrafficSignRecognition from "./views/TrafficSignRecognition";

function App() {
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router>
                    <Switch>
                        <Route path="/projects/traffic-sign-recognition">
                            <TrafficSignRecognition />
                        </Route>
                        <Route path="/projects/riga-real-estate">
                            <RigaRealEstate />
                        </Route>
                        <Route path="/join-us">
                            <JoinUs />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </ConfigProvider>
        </ThemeProvider>
    );

}

export default App;
