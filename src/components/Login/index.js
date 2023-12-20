import {Component} from 'react'
import Cookies from 'js-cookie'
import img from '../Images/Large-Login.jpeg'
import logo from '../Images/logo.png'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', msg: ''}

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  successLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  failedLogin = errorMsg => {
    this.setState({msg: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const apiLoginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiLoginUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.successLogin(data.jwt_token)
    } else {
      this.failedLogin(data.error_msg)
    }
  }

  render() {
    const {username, password, msg} = this.state
    console.log(username, password, msg)
    return (
      <div className="login-background">
        <div className="left-part">
          <form className="login-card" onSubmit={this.onSubmitForm}>
            <img src={logo} alt="logo" className="login-logo" />
            <h1 className="logo-name">Tasty Kitchens</h1>
            <p className="login-text">Login</p>
            <div className="left-align">
              <label htmlFor="username" className="labels">
                USERNAME
              </label>
              <input
                type="text"
                onChange={this.onChangeUsername}
                className="input"
                id="username"
                value={username}
              />
            </div>
            <div className="left-align">
              <label className="labels" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                onChange={this.onChangePassword}
                className="input"
                id="password"
                value={password}
              />
            </div>
            <div className="error">
              <p className="error-msg">{msg}</p>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <img src={img} alt="login" className="image-login" />
        <div className="mobile-container">
          <div className="top-bg">
            <p className="login-text-mobile">Login</p>
          </div>
          <form className="login-card-mobile" onSubmit={this.onSubmitForm}>
            <div className="left-align">
              <label htmlFor="username" className="labels">
                USERNAME
              </label>
              <input
                type="text"
                onChange={this.onChangeUsername}
                className="input"
                id="username"
                value={username}
              />
            </div>
            <div className="left-align">
              <label className="labels" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                onChange={this.onChangePassword}
                className="input"
                id="password"
                value={password}
              />
            </div>
            <div className="error">
              <p className="error-msg">{msg}</p>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
