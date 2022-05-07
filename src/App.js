import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { LandingPage, Register, Dashboard, Applications, Feeds, AccountProfile} from './Pages/index'
import './index.css'
import UserProvider from './context/user/userContext';
function App() {
  return (
    <> 
    <Router>
      
          <Routes>
            <Route exact={true} path='/' element={<UserProvider><LandingPage/></UserProvider>}></Route>
            <Route exact={true} path='/login' element={<Register/>}></Route>
            <Route exact={true} path='/dashboard/overview' element={<Dashboard/>}></Route>
            <Route exact={true} path='/dashboard/applications' element={<Applications/>}></Route>
            <Route exact={true} path='/dashboard/feeds' element={<Feeds/>}></Route>
            <Route exact={true} path='/dashboard/account' element={<AccountProfile/>}></Route>
          </Routes>

    </Router>
    </>
  );
}

export default App;
