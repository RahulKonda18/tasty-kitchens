/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSort} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {TiArrowSortedDown} from 'react-icons/ti'
import HomeRestrauntItem from '../HomeRestrauntItem'
import Pagination from '../Pagination'
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
  state = {
    sortBy: sortByOptions[1].value,
    activePage: 1,
    isLoading: true,
    data: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {activePage, sortBy} = this.state
    const offset = (activePage - 1) * 9
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${sortBy}`
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
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
    console.log(data)
    const finalData = data.restaurants.map(each => ({
      id: each.id,
      name: each.name,
      cuisine: each.cuisine,
      imgUrl: each.image_url,
      rating: each.user_rating.rating,
      ratingColor: each.user_rating.rating_color,
      reviews: each.user_rating.total_reviews,
    }))
    console.log(finalData)
    this.setState({data: finalData, isLoading: false})
  }

  incrementActivePage = async () => {
    const {activePage} = this.state
    let x = 0
    if (activePage === 4) {
      x = 4
      await this.setState({activePage: x})
      this.getData()
    } else {
      x = activePage + 1
      await this.setState({activePage: x})
      this.getData()
    }
  }

  decrementActivePage = async () => {
    const {activePage} = this.state
    let x = 0
    if (activePage === 1) {
      x = 1
      await this.setState({activePage: x})
      this.getData()
    } else {
      x = activePage - 1
      await this.setState({activePage: x})
      this.getData()
    }
  }

  onChangeSortBy = async e => {
    await this.setState({sortBy: e.target.value})
    this.getData()
  }

  render() {
    const {sortBy, isLoading, data, activePage} = this.state
    return (
      <div className="restraunts-list-bg">
        <div className="top-section">
          <div className="descriptions">
            <h1 className="pop-heading">Popular Restaurants</h1>
            <p className="pop-desc">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="sort-box">
            <MdSort size={25} color="#475569" />
            <p className="pop-select">Sort By </p>
            <select
              className="pop-selects"
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
        {isLoading ? (
          <div testid="restaurants-list-loader" className="loader-container">
            <Loader type="ThreeDots" color="orange" height="50" width="50" />
          </div>
        ) : (
          <>
            <ul className="results-list">
              {data.map(each => (
                <HomeRestrauntItem key={each.id} data={each} />
              ))}
            </ul>
            <Pagination
              decrementActivePage={this.decrementActivePage}
              incrementActivePage={this.incrementActivePage}
              active={activePage}
            />
          </>
        )}
      </div>
    )
  }
}

export default RestrauntsList
