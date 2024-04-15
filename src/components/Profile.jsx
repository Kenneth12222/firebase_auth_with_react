import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Profile.css'
import { auth } from './firebase'; // Assuming you have initialized Firebase Authentication

export default function Profile() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (!loading && !user) {
            // User is not logged in, redirect to login page
            navigate('/login');
        }
    }, [user, loading, navigate]);

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <div className="profile-container">
                    <div className="navbar">
                        <div className="logo">
                            <img src="logo.png" alt="Logo" />
                        </div>
                        <ul>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>Profile</a></li>
                            <li><a href='#contact'><Link to='/create'>Create</Link></a></li>
                        </ul>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </div>
                </div>
            ) : (
                <p>No user signed in</p>
            )}
            {error && <p>Error: {error.message}</p>}
        </>
    );
}