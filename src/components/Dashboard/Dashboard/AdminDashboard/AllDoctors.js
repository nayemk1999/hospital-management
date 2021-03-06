import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import AdminSidebar from './AdminSideBar';

const AllDoctors = () => {
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [doctors, setAllDoctors] = useState([]);

    useEffect(() => {
        fetch('https://hospital-management-server.herokuapp.com/all-doctors')
            .then(res => res.json())
            .then(data => {
                setAllDoctors(data)
                setLoading(true)
            })
    }, [])

    const deletedDoctor = (id) => {
        const url = `https://hospital-management-server.herokuapp.com/doctor-delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Delete Doctor from Database.')
                }
            })
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-2">
                    <AdminSidebar />
                </div>
                <div className="col-md-8 col-sm-12 col-10">
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'crimson' }}>Doctors Details:</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Entry Date</th>
                                <th scope="col">Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && doctors.length > 0 ?
                                doctors.map(doctor =>
                                    <tr class="table-success">
                                        <td>{doctor.name}</td>
                                        <td>{(new Date(doctor.date).toDateString('dd/MM/yyyy'))}</td>
                                        <td>
                                            <Link to='/register-doctor'><button type="button" class="mr-2 btn btn-danger">Add</button></Link>
                                            <button onClick={() => deletedDoctor(doctor._id)} type="button" class="mr-2 btn btn-danger">Delete</button>
                                            <button type="button" class="mr-2 btn btn-danger">Update</button>
                                        </td>
                                    </tr>
                                )
                                :
                                <div className="text-center">
                                    {loading ?
                                        <h4 className="mt-1 text-danger">You haven't added any Doctor yet. Please add and come to this page.</h4>
                                        :
                                        <div class="spinner-border text-danger" style={{ width: '2rem', height: '2rem', marginTop: '10%', marginLeft: '90%' }} role="status">
                                        </div>
                                    }
                                </div>
                            }
                        </tbody>
                    </table>
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Added Doctor : <span className='text-danger'>{doctors.length}</span></h2>
                </div>
            </div>
        </section>
    );
};

export default AllDoctors;