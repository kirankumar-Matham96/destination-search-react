import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {laterDestinationsList: ''}

  //   {InitialDestinationsList} = this.props // Giving error

  filteredList = null

  onSearchInputChange = event => {
    const searchItem = event.target.value
    this.filteredList = this.props.InitialDestinationsList.filter(
      // Giving error here also ^^^
      eachDestination => eachDestination.name.includes(searchItem),
    )
    this.setState({laterDestinationsList: this.filteredList})
  }

  render() {
    const {laterDestinationsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            value=""
            placeholder="Search"
            onChange={this.onSearchInputChange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon-image"
          />
        </div>
        <div className="destination-items-container">
          {laterDestinationsList.map(eachLocation => (
            <DestinationItem
              key={eachLocation.id}
              imgUrl={eachLocation.imgUrl}
              name={eachLocation.name}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
