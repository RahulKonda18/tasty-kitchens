import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
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
    <li className="carts">
      <img src={imageUrl} alt="img" className="cart-image" />
      <div className="det">
        <h1 className="heads">{name}</h1>
        <div className="plus-minus">
          <FiMinusSquare color="#0F172A" size={20} onClick={onDecrement} />{' '}
          <p className="quantity">{quantity}</p>
          <FiPlusSquare color="#0F172A" size={20} onClick={onIncrement} />
        </div>
        <h2 className="yellow">₹{cost}</h2>
      </div>
    </li>
  )
}

export default CartItem
