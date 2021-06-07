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
import AddAdmin from './components/Dashboard/Dashboard/AdminDashboard/AddAdmin';
import DoctorDashBoard from './components/Dashboard/Dashboard/DoctorDashboard/DoctorDashBoard';
import AllPatients from './components/Dashboard/Dashboard/DoctorDashboard/AllPatients';

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
          <Route path="/register-staff">
            <RegisterStaff />
          </Route>
          <Route path="/register-doctor">
            <RegisterDoctor />
          </Route>
          <PrivateRoute path="/all-doctors">
            <AllDoctors />
          </PrivateRoute>
          <PrivateRoute path="/all-staffs">
            <AllStaffs />
          </PrivateRoute>
          <PrivateRoute path="/all-admins">
            <AllAdmins />
          </PrivateRoute>
          <Route path="/add-admin">
            <AddAdmin/>
          </Route>
          <PrivateRoute path="/all-patients">
            <StaffDashboard />
          </PrivateRoute>
          <PrivateRoute path="/registered-patients">
            <AllPatients />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
