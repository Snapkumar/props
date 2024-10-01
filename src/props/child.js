import { Component } from "react";

class Fun extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.obj.id}</h2>
                <h2>{this.props.obj.age}</h2>
            </div>
        )
    }
}
export default Fun