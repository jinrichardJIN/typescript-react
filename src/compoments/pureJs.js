import * as React from "react";
import axios from 'axios';
export default class JsPure extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        axios.post('//127.0.0.1:3001/getUserInfo',{

        }).then((res)=>{
            // document.write(res);
        }).catch((res)=>{
            // document.write(res);
        })
    }

    render() {
        return <div>我是纯js</div>;
    }
}
