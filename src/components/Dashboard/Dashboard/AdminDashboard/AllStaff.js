import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import AdminSidebar from './AdminSideBar';

const AllStaffs = () => {
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [staffs, setAllStaffs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/all-doctors')
            .then(res => res.json())
            .then(data => {
                setAllStaffs(data)
                setLoading(true)
            })
    }, [])

    const deletedStaff = (id) => {
        const url = `http://localhost:3002/staff-delete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Delete Staff from Database.')
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
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'crimson' }}>Staffs Details:</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Staff Name</th>
                                <th scope="col">Entry Date</th>
                                <th scope="col">Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && staffs.length > 0 ?
                                staffs.map(staff =>
                                    <tr class="table-success">
                                        <td>{staff.name}</td>
                                        <td>{(new Date(staff.date).toDateString('dd/MM/yyyy'))}</td>
                                        <td>
                                            <Link to='/register-staff'><button type="button" class="mr-2 btn btn-danger">Add</button></Link>
                                            <button onClick={() => deletedStaff(staff._id)} type="button" class="mr-2 btn btn-danger">Delete</button>
                                            <button type="button" class="mr-2 btn btn-danger">Update</button>
                                        </td>
                                    </tr>
                                )
                                :
                                <div className="text-center">
                                    {loading ?
                                        <h4 className="mt-1 text-danger">You haven't added any Staff yet. Please add and come to this page.</h4>
                                        :
                                        <div class="spinner-border text-danger" style={{ width: '2rem', height: '2rem', marginTop: '10%', marginLeft: '90%' }} role="status">
                                        </div>
                                    }
                                </div>
                            }
                        </tbody>
                    </table>
                    <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Added Staffs : <span className='text-danger'>{staffs.length}</span></h2>
                </div>
            </div>
        </section>
    );
};

export default AllStaffs;