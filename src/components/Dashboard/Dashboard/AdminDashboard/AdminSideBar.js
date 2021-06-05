import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Sidebar/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../../App';

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isStaff, setIsStaff] = useState(false);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-staffs" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>All Staffs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-doctors" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>All Doctors</span>
                    </Link>
                </li>
                <li>
                    <Link to="/all-admins" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>All Admins</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;