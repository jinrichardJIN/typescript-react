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
            <div className="Entry">
                <h1>Blog</h1>
            </div>
        );
    }
}
