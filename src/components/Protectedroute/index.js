import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const {path} = props
  const x = Cookies.get('jwt_token')
  if (x === undefined) <Redirect to="/login" />
  else <Redirect to={path} />
}

export default ProtectedRoute
