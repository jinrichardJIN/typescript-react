import * as React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class IndexEntry extends React.Component {
    public constructor(props:any) {
        super(props);
    }
    public render() {
        return (
            <div className="Entry">
                <h1>RICHARD LI </h1>
                <h4>read more , get more</h4>
                <Link to="/blog">blog</Link>
                <Link to="/aboutMe">aboutMe</Link>
                <Link to="/spareTime">spareTime</Link>
            </div>
        );
    }
}
