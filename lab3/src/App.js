import './Styles/App.css';
import { useState } from 'react'; //importowanie z biblioteki reacta useState.
import Home from './Pages/home';
import Student from './Objects/Student';
import StudentOffers from './Objects/StudentOffers';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import NewOffer from './Pages/new';
import SendEmail from './Pages/SendEmail';

function App() {
  const [offers, setNewOffers] = useState([
    new StudentOffers("Poszukuje kogos kto rozumie REACTA", ["HTML","REACT","CSS"],"PIW", new Student("Karol", "mojimail@gmai.com")),
    new StudentOffers("Dalej nie rozumiem REACTA, help",["Terapia","Psychoterapia","HTML"],"Problem",new Student("Kacper","yyy@gmail.com"))
  ]);

  return (
    <div className="App">
      <BrowserRouter>
      <div className='RouteList'>
      <nav>
        <NavLink to="/" className="navi">Home</NavLink>
        <NavLink to="/new" className="navi">Dodaj Nowego Studenta</NavLink>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home offers={offers}/>}/>
        <Route path="/new" element={<NewOffer setNewOffers={setNewOffers} offers={offers}></NewOffer>}/>
        <Route path="/SendEmail" element={<SendEmail></SendEmail>}/>
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
