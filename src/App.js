import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
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
    <Route component={NotFound} />
  </Switch>
)

export default App
