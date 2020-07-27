import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}

        };

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

    const userData = {
        email: this.state.email,
        password: this.state.password
    };
    console.log(userData);
};

render() {
    const { errors } = this.state;

return (
    <div className="container">
        <div style={{ marginTop: "3rem" }} className="row">
            <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat">Home</Link>
                <div className="col s12" style={{ paddingLeft: "11px" }}>
                    <h3>Login</h3>
                    <p className="black-text text-darken-1">
                        Dont have an account? <Link to="/register">Register Now</Link>
                    </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            />
                            <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="passowrd"
                            />
                            <label htmlFor="password">Password</label>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11px" }}>
                        <button
                            style={{
                                width: "130px",
                                borderRadius: "2px",
                                letterSpacing: "2px",
                                marginTop: "2rem"
                            }}
                            type="submit"
                            className="btn btn-large">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
}

export default Login;