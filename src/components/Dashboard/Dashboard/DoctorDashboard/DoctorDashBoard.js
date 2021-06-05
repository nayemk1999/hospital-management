import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import DoctorsSidebar from './DoctorsSideBar';
import PatientsChart from './PatientsChart';


const DoctorDashBoard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <DoctorsSidebar/>
                </div>
                <div className="col-md-5 col-sm-12 col-12 p-5 m-3">
                    <PatientsChart/>
                </div>
            </div>
        </section>
    );
};
export default DoctorDashBoard;