import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import AdminSidebar from './AdminSideBar';

const AllAdmins = () => {
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAllAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/all-admins')
            .then(res => res.json())
            .then(data => {
                setAllAdmins(data)
                setLoading(true)
            })
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-2">
                    <AdminSidebar />
                </div>
                <div className="col-md-8 col-sm-12 col-10">
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'crimson' }}>Admins Details:</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Entry Date</th>
                                <th scope="col">Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && admins.length > 0 ?
                                admins.map(admin =>
                                    <tr class="table-success">
                                        <td>{admin.name}</td>
                                        <td>{(new Date(admin.date).toDateString('dd/MM/yyyy'))}</td>
                                        <td>
                                            <Link to='/register-doctor'><button type="button" class="mr-2 btn btn-danger">Add</button></Link>
                                            <button type="button" class="mr-2 btn btn-danger">Update</button>
                                            <button type="button" class="mr-2 btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                                :
                                <div className="text-center">
                                    {loading ?
                                        <h4 className="mt-2 text-danger text-center">You haven't added any Admin yet. Please add and come to this page.</h4>
                                        :
                                        <div class="spinner-border text-danger" style={{ width: '2rem', height: '2rem', marginTop: '10%', marginLeft: '90%' }} role="status">
                                        </div>
                                    }
                                </div>
                            }
                        </tbody>
                    </table>
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Added Admin : <span className='text-danger'>{admins.length}</span></h2>
                </div>
            </div>
        </section>
    );
};

export default AllAdmins;