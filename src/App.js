import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import OurProducts from './components/OurProducts';
import Contactus from './components/Contactus';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/products' element={<OurProducts/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
