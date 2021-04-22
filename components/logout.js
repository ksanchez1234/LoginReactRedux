import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./logout.css";

const Logout = () => {
    //Using userName instead of my own name on h1
    const user = useSelector(selectUser);

    //Handling Logout Dispatch
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault(); //Prevent website from reloading

        dispatch(logout());
    };


    return (
        <div className="logout">
            <h1>
                Welcome <span className="user_name">{user.name}</span>
            </h1> {" "}
            <button className="logout_btn" onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    )
}

export default Logout