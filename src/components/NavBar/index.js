import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMdMenu, IoIosCloseCircle} from 'react-icons/io'
import Cookies from 'js-cookie'
import logo from '../Images/logo.png'
import './index.css'

class NavBar extends Component {
  state = {displayItems: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.push('/')
  }

  change = () => {
    const {displayItems} = this.state
    this.setState({displayItems: !displayItems})
  }

  render() {
    const {displayItems} = this.state
    let {active} = this.props
    if (active === undefined) {
      active = true
    }
    return (
      <>
        <nav className="nav">
          <Link to="/" style={{'text-decoration': 'none'}}>
            <div className="row">
              <img className="navbar-logo" src={logo} alt="website logo" />
              <h1 className="navbar-text">Tasty Kitchens</h1>
            </div>
          </Link>
          <ul className="nav-list-lg">
            <li className={active ? 'active' : 'not-active'}>Home</li>
            <li className={!active ? 'active' : 'not-active'}>Cart</li>
            <li>
              <button
                type="button"
                className="logout-button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
          <IoMdMenu size={25} onClick={this.change} className="ham" />
        </nav>
        <nav className={displayItems ? 'nav-row' : 'nav-items-2'}>
          <ul className="nav-list-lg2">
            <li className={active ? 'active' : 'not-active'}>Home</li>
            <li className={!active ? 'active' : 'not-active'}>Cart</li>
            <li>
              <button
                type="button"
                className="logout-button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
          <IoIosCloseCircle size={25} className="ham" onClick={this.change} />
        </nav>
      </>
    )
  }
}

export default withRouter(NavBar)
