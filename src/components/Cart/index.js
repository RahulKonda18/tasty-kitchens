import {Component} from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import OrdersNone from '../OrdersNone'
import CartItem from '../CartItem'
import './index.css'

class Cart extends Component {
  state = {foodItems: [], total: 0}

  componentDidMount() {
    const a = localStorage.getItem('cart')
    const b = JSON.parse(a)
    let price = 0
    const j = b.forEach(each => {
      price += each.cost * each.quantity
    })
    console.log(j)
    this.setState({foodItems: b, total: price})
  }

  onIncrement = id => {
    const {foodItems} = this.state
    console.log(foodItems)
    const x = foodItems.find(each => each.id === id)
    console.log(x)
    x.quantity += 1
    localStorage.setItem('cart', JSON.stringify(foodItems))
    let price = 0
    const j = foodItems.map(each => {
      price += each.cost * each.quantity
      return 1
    })
    console.log(j)
    this.setState({foodItems: [...foodItems], total: price})
  }

  onDecrement = id => {
    const {foodItems} = this.state
    const x = foodItems.find(each => each.id === id)
    x.quantity -= 1
    let o = foodItems

    if (x.quantity === 0) {
      o = foodItems.filter(each => each.id !== id)
    }
    let price = 0
    const j = foodItems.map(each => {
      price += each.cost * each.quantity
      return 1
    })
    console.log(j)
    localStorage.setItem('cart', JSON.stringify(o))
    this.setState({foodItems: [...o], total: price})
  }

  render() {
    const {foodItems, total} = this.state
    console.log(foodItems)
    return (
      <>
        <NavBar active={false} />
        {foodItems.length === 0 ? (
          <OrdersNone />
        ) : (
          <>
            <div className="small-cart">
              <ul className="lk">
                {foodItems.map(each => (
                  <CartItem
                    increment={this.onIncrement}
                    decrement={this.onDecrement}
                    key={each.id}
                    details={each}
                  />
                ))}
              </ul>
              <hr className="dashed" />
            </div>
            <div className="tot">
              <p className="t">Order Total</p>
              <p className="t">₹{total}</p>
            </div>
            <div className="end">
              <button type="button" className="logout-button">
                Place Order
              </button>
            </div>
          </>
        )}
        <Footer />
      </>
    )
  }
}

export default Cart
