import {withRouter} from 'react-router-dom'
import none from '../Images/PaymentSuccessful.png'
import NavBar from '../NavBar'
import './index.css'

const PaymentSuccessful = props => {
  const home = () => {
    const {history} = props
    history.push('./')
  }
  return (
    <>
      <NavBar />
      <div className="not-found-container">
        <img src={none} alt="no orders" className="no-orders" />
        <h1 className="not-found-heading">Payment Successful</h1>
        <p className="not-found-description">
          Thank you for ordering Your payment is successfully completed.
        </p>
        <button onClick={home} className="not-found-button" type="button">
          Go To Home Page
        </button>
      </div>
    </>
  )
}

export default withRouter(PaymentSuccessful)
