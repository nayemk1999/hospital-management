import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import RegisterPatient from './components/Dashboard/Dashboard/StaffDashboard/RegisterPatient';
import LoginPage from './components/Login/Login/LoginPage';
import RegisterStaff from './components/RegisterPage/RegisterStaff';
import RegisterDoctor from './components/RegisterPage/RegisterDoctor';
import AllDoctors from './components/Dashboard/Dashboard/AdminDashboard/AllDoctors';
import AllStaffs from './components/Dashboard/Dashboard/AdminDashboard/AllStaff';
import AllAdmins from './components/Dashboard/Dashboard/AdminDashboard/AllAdmins';
import StaffDashboard from './components/Dashboard/Dashboard/StaffDashboard/StaffDashboard';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/register-patient">
            <RegisterPatient />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/register-staff">
            <RegisterStaff />
          </PrivateRoute>
          <PrivateRoute path="/register-doctor">
            <RegisterDoctor />
          </PrivateRoute>
          <PrivateRoute path="/all-doctors">
            <AllDoctors />
          </PrivateRoute>
          <PrivateRoute path="/all-staffs">
            <AllStaffs />
          </PrivateRoute>
          <PrivateRoute path="/all-admins">
            <AllAdmins />
          </PrivateRoute>
          <PrivateRoute path="/all-patients">
            <StaffDashboard patients={'patients'} />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
