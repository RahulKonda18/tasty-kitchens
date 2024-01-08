import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSort} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {TiArrowSortedDown} from 'react-icons/ti'
import HomeRestrauntItem from '../HomeRestrauntItem'
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
    sortBy: sortByOptions[0].value,
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

  onChangeSortBy = e => {
    this.setState({sortBy: e.target.value})
  }

  render() {
    const {sortBy, isLoading, data} = this.state
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
        {isLoading ? (
          <div
            data-testid="restaurants-list-loader"
            className="loader-container"
          >
            <Loader type="ThreeDots" color="orange" height="50" width="50" />
          </div>
        ) : (
          <ul className="results-list">
            {data.map(each => (
              <HomeRestrauntItem key={each.id} data={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default RestrauntsList
