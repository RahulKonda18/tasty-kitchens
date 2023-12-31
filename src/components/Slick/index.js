/* eslint-disable react/no-unknown-property */
// https://apis.ccbp.in/restaurants-list/offers
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cookies from 'js-cookie'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  infinite: true,
  dotsClass: 'slick-dots',
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
}

class Slick extends Component {
  state = {isLoading: true, data: []}

  componentDidMount() {
    this.getImages()
  }

  getImages = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
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
    const results = data.offers.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
    }))
    this.setState({isLoading: false, data: results})
  }

  render() {
    const {isLoading, data} = this.state
    return !isLoading ? (
      <div className="slider-item">
        <Slider {...settings}>
          {data.map(each => (
            <img
              key={each.id}
              className="item"
              src={each.imageUrl}
              alt="offer"
            />
          ))}
        </Slider>
      </div>
    ) : (
      <div testid="restaurants-offers-loader" className="loader-container">
        <Loader type="ThreeDots" color="orange" height="50" width="50" />
      </div>
    )
  }
}

export default Slick
