import React, { Component } from 'react'
import API from "../utils/API"

class Signup extends Component {

    state = {
        username: "",
        password: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        API.userSignup(newUser)
        //API.createUser(newUser) goes here
        this.setState({
            username: "",
            password: ""
        })
    }
    render() {
        return (
            <div>
                <form>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input name="username" value={this.state.title} type="text" className="validate" onChange={this.handleInputChange}/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input name="password" value={this.state.password} type="password" className="validate" onChange={this.handleInputChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Submit<i className="material-icons right"></i>
                </button>
                </form>
            </div>
        );
    }

}


export default Signup;