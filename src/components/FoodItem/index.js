import {FaStar} from 'react-icons/fa'
import './index.css'

const FoodItem = props => {
  const {details} = props
  const {cost, imgUrl, name, rating} = details

  return (
    <li className="food-item">
      <img className="food-image" src={imgUrl} alt="img" />
      <div className="food-desc">
        <h1 className="food-name">{name}</h1>
        <p className="food-cost">₹{cost}</p>
        <h2 className="food-names">
          <FaStar color="#ffa412" />
          {rating}
        </h2>
        <button className="button-add" type="button">
          ADD
        </button>
      </div>
    </li>
  )
}

export default FoodItem
