import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import UserSignup from './components/UserSignup';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import BusList from './components/BusList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookTicket from './components/BookTicket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/usersignup' element={<UserSignup/>}/>
      <Route path='/addbus' element={<AddBus/>}/>
      <Route path='/searchbus' element={<SearchBus/>}/>
      <Route path='/buslist' element={<BusList/>}/>
      <Route path='/bookticket' element={<BookTicket/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;