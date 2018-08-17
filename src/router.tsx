import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./compoments/demoOne";
import About from "./compoments/pureJs";
const RouteIndex = (): any => {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/topics">Topics</Link>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        </div>
    );
};
export default RouteIndex;
