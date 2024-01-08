import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSort} from 'react-icons/md'
import {TiArrowSortedDown} from 'react-icons/ti'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class RestrauntsList extends Component {
  state = {sortBy: sortByOptions[0].value, activePage: 1}

  componentDidMount() {
    const {activePage, sortBy} = this.state
    const offset = (activePage - 1) * 9
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${sortBy}`
    const data = this.getData(apiUrl)
    console.log(data)
  }

  getData = async apiUrl => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    return data
  }

  onChangeSortBy = e => {
    console.log(e.target.value)
    this.setState({sortBy: e.target.value})
  }

  render() {
    const {sortBy} = this.state
    return (
      <div className="restraunts-list-bg">
        <div className="top-section">
          <div className="descriptions">
            <h1 className="pop-heading">Popular Restraunts</h1>
            <p className="pop-desc">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="sort-box">
            <MdSort size={25} color="#475569" />
            <select
              className="pop-select"
              value={sortBy}
              onChange={this.onChangeSortBy}
            >
              {sortByOptions.map(each => (
                <option
                  className="select-item"
                  key={each.id}
                  value={each.value}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
            <TiArrowSortedDown size={25} color="#475569" />
          </div>
        </div>
        <hr className="hr" />
        <div>hi</div>
      </div>
    )
  }
}

export default RestrauntsList
