import React, { Component } from 'react'

class Signup extends Component {

    state = {

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input value="I am not editable" type="text" className="validate"/>
                            <label for="username">Disabled</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <div><input id="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Signup;