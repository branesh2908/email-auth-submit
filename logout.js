import React from 'react'
// import { logout } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

// import { getAuth } from "firebase/auth";

function Logout() {
  const navigate = useNavigate ()
  const[logout, setLogout] = React.useState()
  React.useEffect(()=>{
    if(!localStorage.getItem('auth')) 
    navigate('/')
   },[logout]);

    const dispatch = useDispatch();

    const onFinishFailed = (e) => {
    console.log('Failed:');
    e.preventDefault()
    localStorage.removeItem('auth')
    navigate('/')

    dispatch(logout({
        user: null,
        logout: true,
    }));
    }

  return (
    <div className='logout-sec'>
      <h1>you are LoggedIn <span className='user'> </span></h1>
      <button className='logout-btn'
      onClick={(e) => onFinishFailed(e)}>Logout</button>
    </div>
  )
}
export default Logout;