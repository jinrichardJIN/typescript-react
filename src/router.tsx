import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entry from "./compoments/Entry/index";
import About from "./compoments/AboutMe";
import Blog from "./compoments/Blog";
import './router.css';
const RouteIndex = (): any => {
    return (
        <div className="Router"> 
            <Router>
                <div>
                    <Route path="/" exact={true} component={Entry} />
                    <Route path="/aboutMe" component={About} />
                    <Route path="/blog" component={Blog} />
                </div>
            </Router>
        </div>
    );
};
export default RouteIndex;
