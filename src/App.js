import Cookies from 'js-cookie'
import {Switch, Route} from 'react-router-dom'
import RestrauntsList from './components/RestrauntsList'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  Cookies.set('jwt_token', '15316546897486451564')
  return (
    <Switch>
      <Route exact path="/" component={RestrauntsList} />
      <Route exact path="/not-found" component={NotFound} />
    </Switch>
  )
}
export default App
