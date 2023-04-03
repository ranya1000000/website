import { Container, Welcom } from "./Components/index";
import { Header, Footer } from "./Sections/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Partenaire,
  PasswordReset,
  Dashboard,
} from "./Pages/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/partenaire" element={<Partenaire />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/Welcom" element={<Welcom />} />
          </Routes>
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
