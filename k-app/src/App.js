// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Service from './Service';
import Contact from './Contact';
import Help from './Help';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/about' element = {<About />}/>
    <Route path='/product' element = {<Product />}/>
    <Route path='/service' element = {<Service />}/>
    <Route path='/contact' element = {<Contact />}/>
    <Route path='/help' element = {<Help />}/>


   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
