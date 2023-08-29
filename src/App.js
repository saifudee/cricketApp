import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Event from "./components/Event";
import News from "./components/News";
import Gallerys from "./components/Gallerys";
import logo4 from "./components/images/image5.jpg";
import logo5 from "./components/skysports.jpeg";
import logo6 from "./components/images/img4.jpg";
function App() {
  const images = [
    logo4,
    logo5,
    logo6,
    logo4,
    logo5,
    logo6,
    logo4,
    logo5,
    logo6,
    // Add more image URLs here
  ];
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {/* <Route exact path="/Home" element={<Home text="Welcome to SKR Sports Association" />}></Route> */}
        <Route exact path="/home" element={<Home text="Welcome to SKR Sports Association"/>} />
        <Route exact path="/about" element={<Aboutus/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/event" element={<Event/>} />
        <Route exact path="/news" element={<News/>} />
        <Route exact path="/gallerys" element={<Gallerys images={images} intervalTime={2000}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
