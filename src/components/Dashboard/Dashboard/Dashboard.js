import React, { useContext, useEffect, useState } from 'react';
import StaffDashboard from './StaffDashboard/StaffDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import DoctorDashBoard from './DoctorDashboard/DoctorDashBoard';
import { UserContext } from '../../../App';
import Home from '../../Home/Home/Home';
import { useHistory } from 'react-router';

const Dashboard = () => {
    const [isStaff, setIsStaff] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDoctor, setIsDoctor] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    useEffect(() => {
        fetch(`https://hospital-management-server.herokuapp.com/isStaff?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsStaff(data))
    }, [loggedInUser.email])
    useEffect(() => {
        fetch(`https://hospital-management-server.herokuapp.com/isAdmin?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    useEffect(() => {
        fetch(`https://hospital-management-server.herokuapp.com/isDoctor?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsDoctor(data))
    }, [loggedInUser.email])
    console.log(isDoctor);
    return (
        <section>  
            {
                isDoctor && <DoctorDashBoard/> 
            }
            {
              isStaff && <StaffDashboard/> 
            }
            {
                isAdmin && <AdminDashboard/>
            } 
        </section>
    );
};

export default Dashboard;