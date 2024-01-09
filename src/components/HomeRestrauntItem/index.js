/* eslint-disable react/no-unknown-property */
import {withRouter} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './index.css'

const HomeRestrauntItem = props => {
  const {data} = props
  const {id, name, cuisine, imgUrl, rating, ratingColor, reviews} = data

  const loadRestraunt = () => {
    const {history} = props
    history.push(`./restaurant/:${id}`)
  }

  return (
    <li
      onClick={loadRestraunt}
      className="restraunt-item-row"
      test-id="restaurant-item"
    >
      <div className="image-c">
        <img src={imgUrl} alt="restaurant" className="rest-image" />
      </div>
      <div className="rest-details">
        <h1 className="rest-name">{name}</h1>
        <p className="rest-cuisine">{cuisine}</p>
        <p className="rest-cuisine">
          <FaStar size={20} color={ratingColor} />
          <span className="rest-rating">{rating}</span>({reviews} ratings)
        </p>
      </div>
    </li>
  )
}

export default withRouter(HomeRestrauntItem)
