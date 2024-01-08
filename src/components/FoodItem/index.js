import {FaStar} from 'react-icons/fa'
import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
import './index.css'

const FoodItem = props => {
  const {details, increment, decrement} = props
  const {cost, id, imgUrl, name, rating, quantity} = details

  const onIncrement = () => {
    increment(id)
  }

  const onDecrement = () => {
    decrement(id)
  }

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
          <button className="button-add" type="button" onClick={onIncrement}>
            ADD
          </button>
        ) : (
          <div className="plus-minus">
            <FiMinusSquare color="#0F172A" size={20} onClick={onDecrement} />{' '}
            <p className="quantity">{quantity}</p>
            <FiPlusSquare color="#0F172A" size={20} onClick={onIncrement} />
          </div>
        )}
      </div>
    </li>
  )
}

export default FoodItem
