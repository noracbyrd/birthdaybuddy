import React, { Component } from 'react'

class Login extends Component {

    state = {
        username: '',
        password: '',
        redirectTo: ''
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value, })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input name="username" value={this.state.username} type="text" className="validate" onChange={this.handleInputChange}/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input name="password" id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Log In<i className="material-icons right"></i>
                </button>
                </form>
            </div>
        );
    }

}


export default Login;