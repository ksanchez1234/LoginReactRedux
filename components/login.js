import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import "./login.css";

const Login = () => {

    //Variable name to hold user name. setName is the hook in order to change name
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Adding DISPATCH
    const dispatch = useDispatch();

    //Handling user Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };

    //OnSubmit to form we will get event (e). Handle submit and pass event. Arrow function accepts
    return (
        <div className="login">
            <form className="login_form" onSubmit ={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                {/* Setting type, placeholder, and value to name */}
                {/*Also as user changes input we want to get the txt user is typing and set it equal to name, email, password*/}
                <input 
                type="name" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => 
                setName(e.target.value)}/>
                
                <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => 
                setEmail(e.target.value)}/>
                
                <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => 
                setPassword(e.target.value)}/>

                {/* Button for Submit */}
                <button type="submit" className="submit_btn"> Submit </button>
            </form>
            
        </div>
    )
}

export default Login