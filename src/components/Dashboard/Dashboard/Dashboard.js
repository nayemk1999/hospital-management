import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import StaffDashboard from './StaffDashboard/StaffDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const Dashboard = () => {
    return (
        <section>
            {/* <StaffDashboard></StaffDashboard> */}
            <AdminDashboard/>
        </section>
    );
};

export default Dashboard;