import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "User",
    }
  }

  handleLogin() {
    this.props.setLogin(true);
    this.props.setUsername(this.state.username);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  render() {
    return (
      <div className="login-window">
        <div className="login-box">
          <p className="login-greeting">Hello! Please Login Below:</p>
          <input className="login-input" type="text" placeholder="Username" 
            onChange={this.handleChange}
          />
          <input className="login-input" type="password" placeholder="Password"/>
          <input className="login-button" type="submit" value="Login"
            onClick={this.handleLogin}
          />
        </div>
      </div>

    );
  }
}

export default Login;