import * as React from "react";
import "./App.css";
// import Demo from "./compoments/demoOne";
// import Pure from "./compoments/pureJs";
import Router from "./router";
class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="wrap" >
                    <Router />
                </div>
            </div>
        );
    }
}

export default App;
