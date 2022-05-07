import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { LandingPage, Register, Dashboard, Applications, Feeds, AccountProfile} from './Pages/index'
import './index.css'
import UserProvider from './context/user/userContext';
import { Overview } from './components/Index';
function App() {
  return (
    <>
    <Router>
     
          <Routes>
            <Route path='/' element={ <UserProvider><LandingPage/></UserProvider>}/>
            <Route path='/login' element={<Register/>}/>
            <Route  path='/dashboard' element={<UserProvider><Dashboard/></UserProvider>}>
              <Route index element={<Overview/>}/>
              <Route  path='applications' element={<Applications/>}/>
              <Route  path='feeds' element={<Feeds/>}/>
              <Route  path='account' element={<AccountProfile/>} />
            </Route>
          </Routes>
    </Router>
  
    </>
  );
}

export default App;
