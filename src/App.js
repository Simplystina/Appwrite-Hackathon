import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Dashboard, LandingPage, Register} from './Pages/index'
import './index.css'
import UserProvider from './context/user/userContext';
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route exact={true} path='/' element={<UserProvider><LandingPage/></UserProvider>}></Route>
        <Route exact={true} path='/login' element={<Register/>}></Route>
        <Route exact={true} path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
