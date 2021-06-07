import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import AdminSidebar from './AdminSideBar';

const AddAdmin = () => {
    const [adminEmail, setAdmin] = useState('')
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const newAdmin = {
            email: adminEmail,
            addDate: new Date()
        }
        fetch('https://hospital-management-server.herokuapp.com/add-admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
            .then(res => {
                if (res) {
                    alert('SuccessFully Added Admin')
                    history.push('/all-admins')
                }
            })
            setAdmin('');
    };
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-2">
                    <AdminSidebar />
                </div>
                <div className="col-md-8 col-sm-12 col-10">
                    <form className=" pt-4 pl-1 row">
                        <div className="col-md-12">
                            <label>Email: </label>
                            <input onChange={(e) => setAdmin(e.target.value)} className="form-control" name="email" placeholder="Enter Email" required/> <br />
                            <input onClick={onSubmit} style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2 ml-auto" value='Add Admin' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};
export default AddAdmin;