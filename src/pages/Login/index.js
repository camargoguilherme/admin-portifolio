// Login.js
import React, { Component } from 'react';
import UserApi from '../../services/user';
import { login } from '../../services/auth';
import './styles.css';
import { path } from '../../const/path';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
      loadning: false
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({ loadning: true })
    const res = await UserApi.login(user);
    if (res.token) {
      console.log(res)
      login(res.token)
      window.location = `${path}/admin`
    } else {
      this.setState({ message: res.message, loadning: false })
    }
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:  </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          {this.state.message &&
            <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
          }
          <div className="form-group">
            <button className="btn btn-primary" type="submit" disabled={this.state.loadning}>
              <span className={this.state.loadning && "spinner-grow spinner-grow-sm"} role="status" aria-hidden="true"></span>
              {this.state.loadning && "Loading..." || "Logar"}
            </button>
          </div>
        </form>
      </div>
    )
  }
}