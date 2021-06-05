import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import StaffSidebar from './StaffSideBar';

const StaffDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [patients, setAllPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/all-patients')
            .then(res => res.json())
            .then(data => {
                setAllPatients(data)
                setLoading(true)
            })
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-2">
                    <StaffSidebar/>
                </div>
                <div className="col-md-8 col-sm-12 col-10">
                <h2 className="fw-bold mt-5 text-center" style={{ color: 'crimson' }}>All Patients Details:</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Entry Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { loading && patients.length > 0 ?
                            patients.map(patient =>
                                <tr class="table-success">
                                    <td>{patient.name}</td>
                                    <td>{(new Date(patient.date).toDateString('dd/MM/yyyy'))}</td>
                                </tr>
                            ) 
                            :
                            <div className="text-center">
                            {loading ?
                                <h4 className="mt-1 text-danger">You haven't added yet. Please add and come to this page.</h4> 
                                : 
                                <div class="spinner-border text-danger" style={{ width: '2rem', height: '2rem', marginTop: '10%', marginLeft: '90%' }} role="status">
                                </div>
                            }
                        </div>  
                        }
                    </tbody>
                </table>
                <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Your Staff : <span className='text-danger'>{patients.length}</span></h2>
                </div>
            </div>
        </section>
    );
};

export default StaffDashboard;