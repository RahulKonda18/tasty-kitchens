import Cookies from 'js-cookie'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
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

const App = () => {
  Cookies.set('jwt_token', '15316546897486451564')
  return (
    <Switch>
      <Route exact path="/" component={NavBar} />
      <Route exact path="/not-found" component={NotFound} />
    </Switch>
  )
}
export default App
