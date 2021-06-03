import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const AdminDashboard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className=" col-md-5 col-sm-12 col-12">
                    <div className='d-flex justify-content-between p-5'>
                        <Link to='/register-staff'><button type="button" class="btn btn-danger">Create Branch</button></Link>
                        <Link to='/register-doctor'><button type="button" class="btn btn-danger">Create Doctors</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;