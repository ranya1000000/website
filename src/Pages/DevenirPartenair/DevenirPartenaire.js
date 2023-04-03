import './DevenirPartenaire.css'
import { useState } from "react";
import  axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";

const Partenaire = () => {
  const history = useNavigate();
  const [inputs, setInputs ] = useState({
    name:"",
    email:"",
    phoneNumber:""
    
  }) ;



  const sendRequest =async () =>{
    const res = await axios.post ("http://localhost:4000/api/partenaire",{

      name: inputs.name,
      email: inputs.email,
      phoneNumber: inputs.phoneNumber
    

    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;

  }

  
  const handleChange = (e) =>{
    setInputs(prev =>({
        ...prev,
        [e.target.name]: e.target.value 
      }))
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // sending request http
      sendRequest().then(() => history("/Confirm")) 
    }; 




  return (
    <>
      <section>
          <div className="form_data">
              <div className="form_heading">
                  <h1>Prepose Login</h1>
                  <p>As a Partenaire  Please login.</p>
              </div>
              <form>
                  <div className="form_input">
                      <label htmlFor="email">Name</label>
                      <input type="text" value={inputs.name} onChange={handleChange} name="name" id="name" placeholder='Enter Your Name Address' />
                  </div>
                  <div className="form_input">
                      <label htmlFor="email">Email</label>
                      <input type="email" value={inputs.email} onChange={handleChange} name="email" id="email" placeholder='Enter Your Email ' />
                  </div>
                  <div className="form_input">
                      <label htmlFor="email">Phone Number</label>
                      <input type="Number" value={inputs.phoneNumber} onChange={handleChange} name="phoneNumber" id="phoneNumber" placeholder='Enter Your phoneNumber ' />
                  </div>
                  <div className="form_input">
                  <button className='btn' onClick={handleSubmit}> Send </button>
                      <div className="two">
                          <p style={{color:"black",fontWeight:"bold"}}> Back To Home <NavLink to="/home">Click Here</NavLink> </p>
                      </div>
                  </div>
                <p>Please wait for your code send to your email </p>
            </form>
            <ToastContainer />
        </div>
      </section>
    </>
  )
}

export default Partenaire
