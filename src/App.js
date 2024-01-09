import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificRestaurant from './components/SpecificRestaurant'
import PaymentsSuccessful from './components/PaymentsSuccessful'
import Cart from './components/Cart'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute
      exact
      path="/restaurant/:id"
      component={SpecificRestaurant}
    />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <ProtectedRoute exact path="/paid" component={PaymentsSuccessful} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
