import './ContactUs.css'
import React , { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const ContactUs = () => {

  const history = useNavigate(); 
  const [file, setFile] = useState("");
  const [inputs, setInputs ] = useState({
    name:"",
    email:"",
    telephone:"",
    job:"",

    }) ;

    const sendRequest=async () =>{
      const res = await axios.post ("http://localhost:4000/#",{
        name:inputs.name,
        email: inputs.email,
        telephone: inputs.telephone,
  
      }).catch((err) => console.log(err));
      const data = await res.data;
      return data;
      
  
    }

    const handleSubmit =  (e) => {
      e.preventDefault();
      // sending request http
      sendRequest().then(() => history("/Welcom"))

      const formData = new FormData();
      formData.append("file", file);
  };  
  const handleChange = (e) =>{
    setInputs(prev =>({
      ...prev,
      [e.target.name]: e.target.value 
    }))
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };




  return (
    <>
  
  
    <div className="form_data">
              <div className="form_contact">
                  <h1>Contact Us </h1>
              
              </div>
              <form>
                  <div className="form_name">
                      <label htmlFor="email">Your Name </label>
                      <input type="name" value={inputs.name} onChange={handleChange} name="name" id="email" placeholder='Write your Name' />
                  </div>
                  <div className="form_email">
                      <label htmlFor="email">Your Email </label>
                      <input type="email" value={inputs.email} onChange={handleChange} name="email" id="email" placeholder='sample@gmail.com' />
                  </div>
                  <div>
                  <div className="form_telephone">
                      <label htmlFor="telephone ">Telephone: </label>
                      <input type="number " value={inputs.telephone } onChange={handleChange} name="telephone " id="telephone" placeholder='+216- ' />
                  </div>
                  <div className="form_job">
                      <label htmlFor="job ">Name of your job: </label>
                      <input type="job" value={inputs.job } onChange={handleChange} name="job" id="job" placeholder='Name of your job' />
                  </div>
                  </div>
                  <div className='form-radio'>
                    <h4 className='text'>I am a:{selectedOption}</h4>


                    <div>
                      <ul className='liste'>
                        <li>
                          <label>
                              <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleOptionChange}
                              />
                              Supplier
                          </label>
                        </li>
                        <li>
                        <label>
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                          />
                          Transporter
                        </label>
                        </li>
                        <li>
                        <label>
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                          />
                          Client
                        </label>
                        </li>
                        </ul>
                      </div>

                        
                  </div>
                    <div className="form_input">
                        <p>Do you have any files?</p>
                        <input type="file" onChange={handleFileChange} />   
                    </div>

                    <div>
                      <p>Message</p>
                      <textarea className='form_input' type="text" name="message" id="message"   placeholder='Write here ....'/>
                    </div>

                    <button type="button" className='btn' onSubmit={handleSubmit}>Send</button>


                  </form>

  </div>

  
    </>
  )
}

export default ContactUs