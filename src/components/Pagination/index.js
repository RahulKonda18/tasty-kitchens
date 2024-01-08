import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import './index.css'

const Pagination = props => {
  const {active, decrementActivePage, incrementActivePage} = props

  const onDecrement = () => {
    decrementActivePage()
  }

  const onIncrement = () => {
    incrementActivePage()
  }

  return (
    <div className="pagination">
      <FaArrowCircleLeft size={20} onClick={onDecrement} />
      <p className="active-page">{active} of 4</p>
      <FaArrowCircleRight size={20} onClick={onIncrement} />
    </div>
  )
}

export default Pagination
