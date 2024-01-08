import {withRouter} from 'react-router-dom'
import none from '../Images/NoOrders.png'
import './index.css'

const OrdersNone = props => {
  const home = () => {
    const {history} = props
    history.push('/')
  }
  return (
    <>
      <div className="not-found-container">
        <img src={none} alt="no orders" className="not-found-image" />
        <h1 className="not-found-heading">No Orders Yet!</h1>
        <p className="not-found-description">
          Your cart is empty. Add something from the menu.
        </p>
        <button onClick={home} className="not-found-button" type="button">
          Order Now
        </button>
      </div>
    </>
  )
}

export default withRouter(OrdersNone)
