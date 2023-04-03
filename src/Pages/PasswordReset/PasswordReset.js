import "./PasswordReset.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const PasswordReset = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async () => {
    return await axios
      .post("http://localhost:4000/api/sendpasswordlink", { email: email })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1> Entrer your Email</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>

            <button type="button" className="btn" onClick={sendLink}>
              Send
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default PasswordReset;
