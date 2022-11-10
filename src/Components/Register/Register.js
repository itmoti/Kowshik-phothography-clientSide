import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import UseTitle from '../CustomHooks/UseTitle';
import Spinner from '../Spinner';

const Register = () => {
  UseTitle('Register')
  const [spinner , setSpinner] = useState(false)
    const {emailSignUp , updatingProfile , GoogleSignIn} = useContext(UserContext);
const handleSignUpBtn =(event) => {
    event.preventDefault()
    setSpinner(true)
        const form = event.target;
      
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.photourl.value
        const info = {
          displayName : name ,
          photoURl : url
        }
        
        emailSignUp(email,password)
        .then(result => {
          setSpinner(false)
          updatingProfile(info)
          .then(result => {console.log(result)
          setSpinner(false)})
          .catch(err => console.error(err))})
        .then(err => console.error(err))
        console.log('afte sex')
       
}
    const handleGoogleLogin =() => {
      setSpinner(true)
      GoogleSignIn()
      .then(result => {console.log(result)
      setSpinner(false)
      })
      .catch(err => {console.error(err)
        setSpinner(false)
      
      })
    }
    return (
        <form onSubmit={handleSignUpBtn} className="hero min-h-screen bg-base-200 w-3/4 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Login to experience our website fully . You can do many things </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input  name ='name' type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input  name ='photourl' type="text" placeholder="Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  name ='email' type="text" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Register</button>
                {spinner && <Spinner></Spinner>}
                <p type='submit' className="">Already Registered? <Link to = {'/login'}className='text-fuchsia-500'>Log in </Link></p>
              </div>
              <button onClick={handleGoogleLogin} className='btn btn-secondary'>Google Login</button>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Register;