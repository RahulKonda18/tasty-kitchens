import NavBar from '../NavBar'
import Footer from '../Footer'
import OrdersNone from '../OrdersNone'
import './index.css'

const Cart = () => {
  const car = localStorage.getItem('cart')
  const cart = JSON.parse(car)
  return (
    <>
      <NavBar active={false} />
      {cart.length === 0 ? (
        <OrdersNone />
      ) : (
        <>
          <div className="large-cart">
            <hr className="dashed" />
          </div>
          <div className="small-cart">
            <hr className="dashed" />
          </div>
        </>
      )}
      <Footer />
    </>
  )
}

export default Cart
