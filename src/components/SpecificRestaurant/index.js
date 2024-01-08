import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import Footer from '../Footer'

class SpecificRestaurant extends Component {
  state = {isLoading: true, data: [], cart: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const restaurantId = id.slice(1)
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${restaurantId}`
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
  }

  render() {
    const {isLoading, cart, data} = this.state
    console.log(isLoading, cart, data)
    return (
      <>
        <NavBar active />
        {isLoading ? (
          <div
            data-testid="restaurants-list-loader"
            className="loader-container"
          >
            <Loader type="ThreeDots" color="orange" height="50" width="50" />
          </div>
        ) : (
          <p>Hii</p>
        )}
        <Footer />
      </>
    )
  }
}

export default SpecificRestaurant
