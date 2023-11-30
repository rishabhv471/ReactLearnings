import React, { Component } from 'react'
import Greeting from './ConditionalRendering';
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Admin Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Admin Logout
        </button>
    );
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn123: false };//default value
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({ isLoggedIn123: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn123: false });
    }
    render() {
        const isLoggedIn_1 = this.state.isLoggedIn123;
        let button123;
        if (isLoggedIn_1) {
            console.log("True:: ", isLoggedIn_1);
            button123 = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            console.log("False:: ", isLoggedIn_1);
            button123 = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn_1} />
                Button::  {button123}
            </div>
        );
    }
}
export default LoginControl;