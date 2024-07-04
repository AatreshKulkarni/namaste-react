import React from "react";

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: ""
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AatreshKulkarni")
        const user = await data.json();
        this.setState({
            userInfo: user
        })
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (<div className="user">
            <img className="user-logo" src={avatar_url} alt="dp" />
            <div>Name: {name}</div>
            <div>LOcation: {location}</div>
        </div>)
    }
}

export default User;