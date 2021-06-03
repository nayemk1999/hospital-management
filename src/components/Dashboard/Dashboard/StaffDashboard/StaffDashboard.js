import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../../App';
import AppointmentsByDate from '../../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../../Sidebar/Sidebar';

const StaffDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://salty-plateau-71286.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <h1>Content</h1>
                </div>
            </div>
        </section>
    );
};

export default StaffDashboard;