/* eslint-disable react/no-unknown-property */
// import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
import './index.css'

const CartItem = props => {
  const {details, increment, decrement} = props
  const {name, quantity, cost, imageUrl, id} = details
  console.log(imageUrl)

  const onIncrement = () => {
    increment(id)
  }

  const onDecrement = () => {
    decrement(id)
  }

  return (
    <div test-id="cartItem">
      <li className="carts">
        <img src={imageUrl} alt="img" className="cart-image" />
        <div className="det">
          <h1 className="heads">{name}</h1>
          <div className="plus-minus">
            <button
              className="pm"
              type="button"
              onClick={onDecrement}
              test-id="increment-quantity"
            >
              -
            </button>
            <p className="quantity">{quantity}</p>
            <button
              className="pm"
              type="button"
              onClick={onIncrement}
              test-id="increment-quantity"
            >
              +
            </button>
          </div>
          <p className="yellow">₹{cost}</p>
        </div>
      </li>
    </div>
  )
}

export default CartItem
