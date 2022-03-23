import { Route, Routes } from 'react-router';
import './App.css';
import NavbAr from './NavbAr';
import UsersList from './UsersList';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <NavbAr/>
      <Routes >
        <Route path='/' element ={<UsersList/>}/>
        <Route path='/userprofile/:id' element ={<Profile/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
