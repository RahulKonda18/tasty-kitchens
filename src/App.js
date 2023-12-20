import {Switch, Route} from 'react-router-dom'
import PaymentSuccess from './components/PaymentSuccess'
import Login from './components/Login'
import Home from './components/Home'

import './App.css'

/**     const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]
    * */

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/d" component={Home} />
    <Route component={PaymentSuccess} />
  </Switch>
)

export default App
