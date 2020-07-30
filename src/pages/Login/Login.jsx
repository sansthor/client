import React, { useState } from 'react';
import './Login.css';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {userLogin} from '../../redux/actions/Registration'

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [form,setForm] = useState({
        email:'',
        password:''
    })



    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin(form, history))
    }
    
    const handleChange = (event)=>{
       setForm({...form,[event.target.name]:event.target.value})
    }
   
    return (
        <div className='container-form'>
            <section className="section">
            <div className="section-form">
                <div className="form-text">
                    <h2 className="h2">
                        Log In
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <input
                            name='email'
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            id="email"
                            required
                            onChange={handleChange}
                            value={form.email}
                        />
                        <label className="label" for="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input
                            name='password'
                            type="password"
                            className="form-input"
                            placeholder="Password"
                            id="password"
                            required
                            onChange={handleChange}
                            value={form.password}
                        />
                        <label className="label" for="password">Password</label>
                    </div>
                    <button type='submit'>Sign In</button> 
                </form>
                <div className="button-box">
                 
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login
