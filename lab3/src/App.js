import './Styles/App.css';
import { useState } from 'react'; //importowanie z biblioteki reacta useState.
import Home from './Pages/home';
import Student from './Objects/Student';
import StudentOffers from './Objects/StudentOffers';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import NewOffer from './Pages/new';
import SendEmail from './Pages/SendEmail';
import Login from './Login';
import { logout } from './Firebase/users';
import { auth } from "./Firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [offers, setNewOffers] = useState([
    new StudentOffers("Poszukuje kogos kto rozumie REACTA", ["HTML","REACT","CSS"],"PIW", new Student("Karol", "mojimail@gmai.com")),
    new StudentOffers("Dalej nie rozumiem REACTA, help",["Terapia","Psychoterapia","HTML"],"Problem",new Student("Kacper","yyy@gmail.com"))
  ]);

  const [user] = useAuthState(auth);
  

  return (
    <div className="App">
      <BrowserRouter>
      <div className='RouteList'>
      <nav>
        <NavLink to="/" className="navi">Home</NavLink>
        <NavLink to="/new" className="navi">Dodaj Nowego Studenta</NavLink>
        <NavLink to="/login" className="navi">Zaloguj</NavLink>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home offers={offers}/>}/>
        <Route path="/new" element={<NewOffer setNewOffers={setNewOffers} offers={offers}></NewOffer>}/>
        <Route path="/SendEmail" element={<SendEmail></SendEmail>}/>
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
        
      </BrowserRouter>
      <div className='logout'>
      <button
      onClick={() => logout()}
      >wyloguj</button>
      </div>
      {!user ?
      <div className='dataBad'>
        Nie zalogowano 
      </div> 
      :
      <div className='dataGood'>
        {user.displayName} 
      </div> 
      }
    </div>

  );
}

export default App;
