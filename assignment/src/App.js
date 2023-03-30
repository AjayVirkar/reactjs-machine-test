import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";
import RegistrationPage from "./Components/RegistrationPage";
import Footers from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import Welcome from './Components/Welcome';
function App() {
  return (
    <div className="App">


      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
          <Footers />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
