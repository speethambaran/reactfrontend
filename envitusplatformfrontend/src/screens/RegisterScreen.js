import React, { Component } from "react";
import "./Register.css"


class RegisterScreen extends Component {
    constructor() {
        super()
        this.state = ({ name: '', email: '', contact: '', username: '', password: '' })
        
    }
    namechange = event => {
        this.setState({
            name: event.target.value
        })
    }
    emailchange = event => {
        this.setState({
            email: event.target.value
        })
    }
    contactchange = event => {
        this.setState({
            contact: event.target.value
        })
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
    
        alert(`${this.state.name} ${this.state.email}`);


    }
render() {


        return <body>

<div className="container">

            <form action="" onSubmit={this.handleSubmit} >
                <div className="cover">
                    <h1>Register</h1>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.namechange} required /><br />
                    <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.emailchange} required /><br />
                    <input type="text" placeholder="contact" name="contact" value={this.state.contact} onChange={this.contactchange} required /><br />
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.usernamechange} required /><br />
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.passwordchange} required /><br />
                    <button className="signup-btn" type="submit">
                        Register
                    </button>

                    <p>Already Registered?<a  href="/login">Login</a></p>
                </div>
            </form>

            </div>

        </body >
    }
}
export default RegisterScreen

// import React from 'react'

// function RegisterScreen() {
//   return (
//     <div>
//       <h1>RegisterScreen</h1>
//     </div>
//   );
// }

// export default RegisterScreen