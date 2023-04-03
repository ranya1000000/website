import './CardStyle.css'


const Card = (props) => {
  return (
    
      <div className="features-item">
        <div className="card-wrapper">
          <img className="features-item-image" src={props.image} alt=""/>
          <div className="features-item-content">
              <h4 className='features-item-title'>{props.title}</h4>
              <span className="features-item-text"> {props.text}</span>
          </div>
        </div>
      </div>
  
  )
}

export default Card
