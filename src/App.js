import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/Home";
import ConfigProvider from "./components/providers/ConfigProvider";
import ThemeProvider from "./components/providers/ThemeProvider";
import RigaRealEstateProject from "./views/realestate/RigaRealEstateProject";

function App() {
    return (
        <ThemeProvider>
            <ConfigProvider>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/riga">
                            <RigaRealEstateProject />
                        </Route>
                    </Switch>
                </Router>
            </ConfigProvider>
        </ThemeProvider>
    );

}

export default App;
