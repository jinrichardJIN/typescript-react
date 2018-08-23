import * as React from "react";
import './index.css';

export default class IndexEntry extends React.Component {
    public constructor(props:any) {
        super(props);
    }
    public render() {
        return (
            <div className="Entry">
                <h1>ABOUT ME</h1>
            </div>
        );
    }
}
