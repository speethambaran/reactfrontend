import React, { Component} from "react";
import "./Register.css"


class  LoginScreen extends Component {
    constructor() {
        super()
        this.state = ({ username: '', password: '' })

    }

    usernamechange = event => {
        this.setState({
            username: event.target.value
        })
    }
    passwordchange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {

        alert(`${this.state.username}`);


    }

    render() {


        return <body>

            <div className="container">

                <form action="" onSubmit={this.handleSubmit} >
                    <div className="cover">
                        <h1>Signin</h1>
                       
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.usernamechange} required /><br />
                        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.passwordchange} required /><br />
                        <button className="signup-btn" type="submit">
                            Login
                        </button>

                        <p>Not a User?<a href="/register">Register</a></p>
                    </div>
                </form>

            </div>

        </body >
    }
}
export default  LoginScreen

// import React from 'react'

// function() {
//   return (
//     <div>
//       <h1>LoginScreen</h1>
//     </div>
//   );
// }

// export default LoginScreen