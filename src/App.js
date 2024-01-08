import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificRestaurant from './components/SpecificRestaurant'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  localStorage.setItem('cart', JSON.stringify([]))
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/restaurant/:id"
        component={SpecificRestaurant}
      />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
