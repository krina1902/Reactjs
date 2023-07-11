import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Help from './Help';

function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/help' element={<Help />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
