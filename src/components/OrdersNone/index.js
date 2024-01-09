import {withRouter, Link} from 'react-router-dom'
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
        <img src={none} alt="empty cart" className="no-orders" />
        <h1 className="not-found-heading">No Order Yet!</h1>
        <p className="not-found-description">
          Your cart is empty. Add something from the menu.
        </p>
        <Link to="/">
          <button onClick={home} className="not-found-button" type="button">
            Order now
          </button>
        </Link>
      </div>
    </>
  )
}

export default withRouter(OrdersNone)
