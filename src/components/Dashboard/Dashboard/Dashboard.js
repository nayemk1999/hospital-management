import React, { useContext, useEffect, useState } from 'react';
import StaffDashboard from './StaffDashboard/StaffDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import DoctorDashBoard from './DoctorDashboard/DoctorDashBoard';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [isStaff, setIsStaff] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);
    const [isDoctor, setIsDoctor] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(() => {
        fetch(`http://localhost:3002/isStaff?email=`+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setIsStaff(data))
    })
    return (
        <section>
            
            {
                isDoctor.length || isAdmin.length ? <DoctorDashBoard/> || <AdminDashboard/>
                :
                <StaffDashboard/>
            }
            
            
            
        </section>
    );
};

export default Dashboard;