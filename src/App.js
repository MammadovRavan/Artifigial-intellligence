
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// {} obyektin parcalanmasi
import { Fragment } from 'react';

//router
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Contact from './components/Contact';



function App() {
  return (
<Fragment>
  <BrowserRouter>
<Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/contact' element={<Contact/>}/>


</Routes>

</BrowserRouter>
</Fragment>
  );
}

export default App;
