import {Redirect} from 'react-router-dom'
import none from '../Images/PaymentSuccessful.png'
import './index.css'

const PaymentSuccess = () => {
  const home = () => {
    console.log('clicked')
    return <Redirect to="/" />
  }
  return (
    <div className="not-found-container">
      <img src={none} alt="no orders" className="not-found-image" />
      <h1 className="not-found-heading">Payment Successful</h1>
      <p className="not-found-description">
        Thank you for ordering Your payment is successfully completed.
      </p>
      <button onClick={home} className="not-found-button" type="button">
        Go To Home Page
      </button>
    </div>
  )
}

export default PaymentSuccess
