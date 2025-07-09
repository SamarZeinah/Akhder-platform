import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./MyComponents/Layout";
import Home from "./MyComponents/Home";
import ServiceDetails from "./Pages/ServiceDetails"; 
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
       <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
