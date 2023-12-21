import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'

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
    <Route component={Footer} />
  </Switch>
)

export default App
