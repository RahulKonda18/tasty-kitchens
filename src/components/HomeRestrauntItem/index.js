/* eslint-disable react/no-unknown-property */
import {withRouter, Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './index.css'

const HomeRestrauntItem = props => {
  const {data} = props
  const {id, name, cuisine, imgUrl, rating, ratingColor, reviews} = data
  const path = `/restaurant/:${id}`
  const loadRestraunt = () => {
    const {history} = props
    history.push(`./restaurant/:${id}`)
  }

  return (
    <>
      <Link to={path} style={{'text-decoration': 'none'}}>
        <li
          onClick={loadRestraunt}
          className="restraunt-item-row"
          testid="restaurant-item"
        >
          <div className="image-c">
            <img src={imgUrl} alt="restaurant" className="rest-image" />
          </div>
          <div className="rest-details">
            <h1 className="rest-name">{name}</h1>
            <p className="rest-cuisine">{cuisine}</p>
            <div className="rest-cuisine">
              <FaStar size={20} color={ratingColor} />
              <p className="rest-rating">{rating}</p>
              <h1>({reviews} ratings)</h1>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default withRouter(HomeRestrauntItem)
