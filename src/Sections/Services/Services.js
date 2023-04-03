import './Services.css'
import {CardsComponents} from '../../Components/index'
const Services = () => {
  return (
    <>
      <div className="services-wrapper">
          <div className="services-header">
            <h4 className="services-title"> Our Products </h4>
            <span className="services-para">These are the products that we provide our services for, if your products <br /> aren't available in the list, contact us for a custom quote!</span>
          </div>
          <div className="services-CardsComponentss">
            <CardsComponents />
            <CardsComponents />
            <CardsComponents />
          
          </div>
      
      
      </div>
    
    
    
    
    </>
  )
}

export default Services
