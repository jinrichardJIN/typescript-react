import * as React from "react";
import './index.css';
import axios from 'axios';

export default class IndexEntry extends React.Component {
    public constructor(props:any) {
        super(props);
    }
    public componentDidMount(){
        axios.post('//127.0.0.1:3002/getUserInfo',{
            userId:123
        }).then((res)=>{
            console.log(res);
        }).catch((res)=>{
            console.log(res);
        })
    }
    public render() {
        return (
            <div className="Blog">
                <p className="title">RICHARD LI</p>
                <ul>
                    <li>
                        <span>AUGUST 28,2018</span>
                        <span>vue原理的简单实现</span>
                    </li>
                    <li>
                        <span>AUGUST 28,2018</span>
                        <span>koa中间件的简单实现</span>
                    </li>
                    <li>
                        <span>AUGUST 28,2018</span>
                        <span>vue</span>
                    </li>
                    <li>
                        <span>AUGUST 28,2018</span>
                        <span>vue</span>
                    </li>
                </ul>
                <pre>
                    <code>const a = 123 </code>
                </pre>
            </div>
        );
    }
}
