import {Component} from 'react'
import {MdSort} from 'react-icons/md'
import {TiArrowSortedDown} from 'react-icons/ti'
import './index.css'

const sortByOptions = [
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

class RestrauntsList extends Component {
  state = {sortBy: sortByOptions[0].value}

  onChangeSortBy = e => {
    console.log('changed')
    console.log(e.target.value)
    this.setState({sortBy: e.target.value})
  }

  render() {
    const {sortBy} = this.state
    return (
      <div className="restraunts-list-bg">
        <div className="top-section">
          <div className="descriptions">
            <h1 className="pop-heading">Popular Restraunts</h1>
            <p className="pop-desc">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="sort-box">
            <MdSort size={25} color="#475569" />
            <select
              className="pop-select"
              value={sortBy}
              onChange={this.onChangeSortBy}
            >
              {sortByOptions.map(each => (
                <option key={each.id} value={each.value}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <TiArrowSortedDown size={25} color="#475569" />
          </div>
        </div>
        <hr className="hr" />
        <div></div>
      </div>
    )
  }
}

export default RestrauntsList
