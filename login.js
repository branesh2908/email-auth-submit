
import { useNavigate  } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import { Button, Checkbox, Form, Input } from 'antd';
import db from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
         onAuthStateChanged } from "firebase/auth";
import Logout from './logout';


function Login() { 
 
  const auth = getAuth(db);
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const dispatch = useDispatch();

  const navigate = useNavigate ()
  React.useEffect(()=>{
    if(localStorage.getItem('auth')) navigate('/logout')
  },[])
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
   const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential);
        localStorage.setItem('auth', true)
    navigate('/logout')
        // alert("User Has Successfully Signed In")
        // ...
        dispatch(login({
          user: email,
          loggedIn: true,
      })
      );        
    })
    .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
    });
    
    
    
    
   }
  
   const signUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("successfully created an account")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(errorCode)
      });

      localStorage.setItem('auth', true)
      navigate.push('./logout')
   }    
   
return(
  <div className="login-sec">
    <h1>Firebase Login</h1>
    <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          type={"email"}
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={signIn}>
            sign In
          </Button>
          <div className="signUp-btn">
          <Button type="primary" htmlType="submit" onClick={signUp}>
            sign up
          </Button>            
          </div>     
        </Form.Item>
      </Form>
    </div>
    );
}
export default Login;