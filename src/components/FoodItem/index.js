import {FaStar} from 'react-icons/fa'
import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
import './index.css'

const FoodItem = props => {
  const {details} = props
  const {cost, imgUrl, name, rating, quantity} = details

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
        {quantity === 0 ? (
          <button className="button-add" type="button">
            ADD
          </button>
        ) : (
          <div className="plus-minus">
            <FiMinusSquare color="#0F172A" size={20} />{' '}
            <p className="quantity">{quantity}</p>
            <FiPlusSquare color="#0F172A" size={20} />
          </div>
        )}
      </div>
    </li>
  )
}

export default FoodItem
