import React, { useState } from 'react'
import './RegisUser.css'
import { useDispatch } from 'react-redux'
import {register} from '../../redux/actions/registration'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const RegisUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    address: "",
  });
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(form.password.length < 6){
            Swal.fire({
                title: 'Password must longer than six characters',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        else{
            await dispatch(register(form, history))
            history.push('/user/login')
        }
       
    }

    const handleChange = (event) =>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    return (
        <div>
              <section className="section">
            <div className="section-form">
                <div className="form-text">
                    <h2 className="h2">
                        Sign Up Now
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            placeholder="Full Name"
                            id="fullname"
                            name='fullname'
                            required
                            value={form.fullname}
                        />
                        <label className="label" htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="form-group">
                        <input
                        onChange={handleChange}
                            type="text"
                            className="form-input"
                            placeholder="Username"
                            id="username"
                            name='username'
                            required
                            value={form.username}
                        />
                        <label className="label" htmlFor="username">Username</label>
                    </div>
                    <div className="form-group">
                        <input
                        onChange={handleChange}
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            id="email"
                            name='email'
                            required
                            value={form.email}
                        />
                        <label className="label" htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input
                        onChange={handleChange}
                            type="password"
                            className="form-input"
                            placeholder="Password"
                            id="password"
                            name='password'
                            required
                            value={form.password}
                        />
                         <label className="label" htmlFor="password">Passowrd</label>
                    </div>
                    <div className="form-group">
                        <input
                        onChange={handleChange}
                            type="text"
                            className="form-input"
                            placeholder="Address"
                            id="address"
                            name='address'
                            required
                            value={form.address}
                        />
                        <label className="label" htmlFor="address">Address</label>
                    </div>
                    <button className='new-button' type="submit">Register</button>
                </form>
        </div>
      </section>
    </div>
  );
};

export default RegisUser;
