import {Redirect} from 'react-router-dom'
import notFound from '../Images/NotFound.png'
import './index.css'

const NotFound = () => {
  const home = () => {
    console.log('clicked')
    return <Redirect to="/" />
  }
  return (
    <div className="not-found-container">
      <img src={notFound} alt="not found" className="not-found-image" />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found. Please go back
        to the homepage
      </p>
      <button onClick={home} className="not-found-button" type="button">
        Home Page
      </button>
    </div>
  )
}

export default NotFound