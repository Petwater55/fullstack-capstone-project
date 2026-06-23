import React, { useState } from 'react';
import './RegisterPage.css';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();

    const handleRegister = async () => {
        try{
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }),
            });
            const json = await response.json();
            console.log('json data', json);
            console.log('er', json.error);
             if (json.authtoken) {
              sessionStorage.setItem('auth-token', json.authtoken);
              sessionStorage.setItem('name', firstName);
              sessionStorage.setItem('email', json.email);
              setIsLoggedIn(true);
              navigate('/app');
       }
         if (json.error) {
            setShowerr(json.error);
       }
        } catch (error) {
            console.log("Error fetching details: " + error.message);
        }
    };
    
    return (
        <div classname="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                        <label>
                          First Name:
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </label>
                        <br />
                        <label>
                          Last Name:
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </label>
                        <br />
                        <label>
                          Email:
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="text-danger">{showerr}</div>
                        </label>
                        <br />
                        <label>
                          Password:
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </label>
                        <br />
                        <button onClick={handleRegister}>Register</button>

                        <p className="mt-4 text-center">
                          Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            );
}
    export default RegisterPage;