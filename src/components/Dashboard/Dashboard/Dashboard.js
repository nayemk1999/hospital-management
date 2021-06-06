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
        fetch(`http://localhost:3002/isStaff?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsStaff(data))
    }, [loggedInUser.email])
    useEffect(() => {
        fetch(`http://localhost:3002/isAdmin?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    useEffect(() => {
        fetch(`http://localhost:3002/isDoctor?email=`+ loggedInUser.email)
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