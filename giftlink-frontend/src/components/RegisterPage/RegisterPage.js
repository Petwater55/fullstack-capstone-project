import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Register button clicked');
        <h2>Register</h2>
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