import React, { Component } from 'react'

class Login extends Component {

    state = {

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input value="I am not editable" type="text" className="validate"/>
                            <label htmlFor="username">Disabled</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Login;