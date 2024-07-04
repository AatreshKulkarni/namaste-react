import { Component } from "react";
import User from "./User";

class About extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <User name="First" location="Bengaluru" />
            </div>
        )
    }
}

export default About;