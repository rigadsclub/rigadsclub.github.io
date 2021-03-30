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
import AlphaFold from "./components/elements/events/AlphaFold";
import GoogleFootball from "./components/elements/events/GoogleFootball";
import UbiOps from "./components/elements/events/UbiOps";

function App() {
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path="/events/ubiops">
                            <UbiOps />
                        </Route>
                        <Route path="/events/alphafold">
                            <AlphaFold />
                        </Route>
                        <Route path="/events/gfootball">
                            <GoogleFootball />
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
