import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';

const Login = () => {
  UseTitle('Login')
    const {emailSignIn,GoogleSignIn} = useContext(UserContext)
       
    const handleGoogleLogin = () => {
        GoogleSignIn()
        .then(result => {
            console.log(result)
        })
        .catch(err => console.error(err))
    } 
   
    const handleLoginBtn =(event) => {
        event.preventDefault()
        const form = event.target;
        console.log(form.email.value)
        const email = form.email.value;
        const password = form.password.value;
        emailSignIn(email,password)
        .then(result => {console.log(result)
          const user = result.user;
          const currentUser= {
            email : user.email
          }
        
          fetch('http://localhost:5000/jwt' , {
                 method : 'POST' ,
                 headers : {
                 'content-type' : 'application/json'
                 } ,
                 body : JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data.token)
            localStorage.setItem('token' , data.token)
          })
         
        })
        .then(err => console.error(err))
    }
    return (
        <form onSubmit={handleLoginBtn} className="hero min-h-screen bg-base-200 w-3/4 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login to experience our website fully . You can do many things </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  name ='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
          <p type='submit' className="">New here? <Link to = {'/register'}className='text-fuchsia-500'>Sign Up </Link></p>
        </div>
        <button onClick={handleGoogleLogin} className='btn btn-secondary'>Google Login</button>
        
      </div>
    </div>
  </div>
</form>
    );
};

export default Login;