import { Component } from "react";
import Cls from './childp.js';

class Path extends Component{
    render(){
    let name='Kumar'
    let obj={
        id:111,
        age:22
    }
    
    return(
        <div>
           <Cls name={name} obj={obj}/>
        </div>
    )
    }
}
export default Path