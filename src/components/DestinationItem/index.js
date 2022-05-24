import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <div className="destination-item">
      <img src={imgUrl} alt="destination" className="destination-image" />
      <p className="destination-name">{name}</p>
    </div>
  )
}

export default DestinationItem
