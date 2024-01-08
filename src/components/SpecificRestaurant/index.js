import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaStar, FaRupeeSign} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import Footer from '../Footer'
import FoodItem from '../FoodItem'
import './index.css'

class SpecificRestaurant extends Component {
  state = {isLoading: true, header: [], foodItems: []}

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
    const header = {
      costOfTwo: data.cost_for_two,
      cuisine: data.cuisine,
      rating: data.rating,
      reviews: data.reviews_count,
      name: data.name,
      imgUrl: data.image_url,
      location: data.location,
    }
    const foodItems = data.food_items.map(each => {
      let p = 0
      const v = JSON.parse(localStorage.getItem('cart')).find(
        e => e.id === each.id,
      )
      if (v !== undefined) {
        p = v.quantity
      }
      return {
        cost: each.cost,
        id: each.id,
        imgUrl: each.image_url,
        name: each.name,
        rating: each.rating,
        quantity: p,
      }
    })

    this.setState({isLoading: false, header, foodItems})
  }

  onIncrement = id => {
    const car = localStorage.getItem('cart')
    const cart = JSON.parse(car)
    const {foodItems} = this.state
    const x = foodItems.find(each => each.id === id)
    x.quantity += 1
    const y = cart.find(each => each.id === id)
    if (y === undefined) {
      cart.push({
        cost: x.cost,
        id,
        quantity: x.quantity,
        imageUrl: x.imgUrl,
        name: x.name,
      })
    } else {
      y.quantity += 1
    }
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
    this.setState({foodItems: [...foodItems]})
  }

  onDecrement = id => {
    const car = localStorage.getItem('cart')
    let cart = JSON.parse(car)
    const {foodItems} = this.state
    const x = foodItems.find(each => each.id === id)
    x.quantity -= 1
    const y = cart.find(each => each.id === id)
    y.quantity -= 1
    if (y.quantity === 0) {
      cart = cart.filter(each => each.id !== id)
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    this.setState({foodItems: [...foodItems]})
  }

  render() {
    const {isLoading, header, foodItems} = this.state
    const {costOfTwo, cuisine, rating, reviews, name, imgUrl, location} = header
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
          <>
            <div className="headers">
              <img className="restaurant-img" src={imgUrl} alt="restaurant" />
              <div className="restaurant-details">
                <h1 className="rest-heading">{name}</h1>
                <p className="rests-cuisine">{cuisine}</p>
                <p className="rests-cuisine">{location}</p>
                <div className="rating-and-two">
                  <div className="for-twos">
                    <h1 className="rest-star">
                      <FaStar /> {rating}
                    </h1>
                    <p className="rests-cuisine">{reviews}+ Ratings</p>
                  </div>
                  <div className="for-two">
                    <h1 className="rest-star">
                      <FaRupeeSign /> {costOfTwo}
                    </h1>
                    <p className="rests-cuisine">Cost for two</p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="food-list">
              {foodItems.map(each => (
                <FoodItem
                  key={each.id}
                  details={each}
                  increment={this.onIncrement}
                  decrement={this.onDecrement}
                />
              ))}
            </ul>
          </>
        )}
        <Footer />
      </>
    )
  }
}

export default SpecificRestaurant
