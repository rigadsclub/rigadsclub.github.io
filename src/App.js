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

function App() {
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
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
