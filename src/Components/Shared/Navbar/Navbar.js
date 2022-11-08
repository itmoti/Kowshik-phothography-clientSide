import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const Navbar = () => {
  const {user ,signOutMail} = useContext(UserContext)
  const signout =() => {
    signOutMail()
  }
  console.log(user.email)
    return (
        <div className="navbar bg-base-100 mb-11">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Kowsik Photographing</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">

          {user.email ? <><li><Link>My Reviews</Link></li> <li><Link>Add service</Link></li> <li ><Link onClick={() => signout()}>Logout</Link></li></> :   <li><Link to={'/login'}>Login</Link></li>   }

          
           
              
           
          
          </ul>
        </div>
      </div>
    );
};

export default Navbar;