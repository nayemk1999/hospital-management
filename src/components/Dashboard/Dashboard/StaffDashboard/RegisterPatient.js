import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const RegisterPatient = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const patientData = {
        name: name,
        email: email,
        phone: phone,
        date: new Date()
    }
    const send = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/register-patient', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(patientData)
        })
        .then(res => {
            if (res) {
                alert('Successfully Added Patient')
            }
        })
        setName('')
        setEmail('')
        setPhone('')
    }
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                <div className="row align-items-center" style={{ height: "100vh", padding: '10px' }}>
                    <div className="col-md-12 shadow p-5">
                        <form onSubmit={send} className="form-group">
                            <label htmlFor="name">Patient Name</label>
                            <input className='form-control' value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='Enter Patient Name' name="name" id="" />
                            <label htmlFor="email">Patient Email</label>
                            <input required className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Patient Email' name="email" id="" />
                            <label htmlFor="phone">Patient Phone</label>
                            <input required className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Enter Patient Phone' name="phone" id="" />
                            <input type="submit" class="btn btn-danger"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RegisterPatient;