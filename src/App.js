
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// {} obyektin parcalanmasi
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import PartnerContainer from './components/PartnerContainer';
import PartnerCompany from './components/PartnerCompany';
import Apply from './components/Apply';
import AwardsContainer from './components/AwardsContainer';
import Awesome from './components/Awesome';
import Footer from './components/Footer';



function App() {
  return (
<Fragment>
  <Navbar/>
  <Introduction/>
<PartnerContainer/>
<PartnerCompany/>
<Apply/>
<AwardsContainer/>
<Awesome/>
<Footer/>
</Fragment>
  );
}

export default App;
