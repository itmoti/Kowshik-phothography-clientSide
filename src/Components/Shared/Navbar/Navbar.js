import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const Navbar = () => {
  const {user ,signOutMail} = useContext(UserContext)
  const signout =() => {
    signOutMail()
    .then(result => console.log(result))
    .catch(err => console.error(err))
  }
    return (
        <div className="navbar bg-base-100 mb-11">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Kowsik Photographing</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
          <li><Link to={'/blogs'}>Blogs</Link></li>
          {user?.email ? <><li><Link to={'/reviews'}>My Reviews</Link></li> <li><Link to={'/addservice'}>Add service</Link></li> <li ><Link onClick={() => signout()}>Logout</Link></li></> :   <li><Link to={'/login'}>Login</Link></li>   }

          
           
              
           
          
          </ul>
        </div>
      </div>
    );
};

export default Navbar;