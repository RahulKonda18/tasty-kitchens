/* eslint-disable react/no-unknown-property */
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
      <FaArrowCircleLeft
        size={20}
        onClick={onDecrement}
        type="button"
        test-id="pagination-left-button"
      />
      <p className="active-page">
        <span test-id="active-page-number">{active}</span> of 4
      </p>
      <FaArrowCircleRight
        size={20}
        onClick={onIncrement}
        type="button"
        test-id="pagination-right-button"
      />
    </div>
  )
}

export default Pagination
