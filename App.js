import './App.css';

import React from 'react'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/login';
import Logout from './components/logout';


const App = () => {

    //Checking if we are logged in or not
    const user = useSelector(selectUser);

    return (
        <div>
            {/*If user is logged in show logout component. Else: Show login*/}
            {user ? <Logout/> : <Login />}
        </div>
    )
}

export default App;
