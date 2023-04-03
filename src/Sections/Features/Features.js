import './Features.css'
import {Card} from '../../Components/index'
import image3 from '../../assets/img03.jpeg'
import image4 from '../../assets/img04.jpeg'
import image5 from '../../assets/img02.jpeg'

const Features = () => {
  return (
    <>
      <div className="section-wrapper">
          <div className="section-header">
            <h4> Features </h4>
          </div>
          <div className="features-items">  
              <Card 
              image={image3} 
              title="INTERNATIONAL AND LOCAL IMPORT AND EXPORT"
              text="Perspective provides international and local import and export to Tunisian products and international products"
              />  

              <Card 
              image={image5} 
              title="DISTRIBUTION"
              text="Our distribution services are top notch, they arrive on time and provide you with lots of flexibility and high quality services."
              />  

              <Card 
              image={image4} 
              title="TRANSPORT AND SHIPPING OF PARCELS"
              text="We provide transport and shipping of parcels from point A to point B easily and without hustle!"
              />  
          </div>
      </div>

    </>
  )
}

export default Features

