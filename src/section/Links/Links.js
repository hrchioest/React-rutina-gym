import React from "react";
import { Link , useLocation } from "react-router-dom";
import "./Links.scss";

const links = [
  {
    path: '/dayMonday',
    name: 'Monday', 
  },
  {
    path: '/dayTuesday',
    name: 'Tuesday', 
  },
  {
    path: '/dayWednesday',
    name: 'Wednesday', 
  },
  {
    path: '/dayThurday',
    name: 'Thursday', 
  },
  {
    path: '/dayFriday',
    name: 'Friday', 
  },
 
]

const Links = () => {

  let location = useLocation();

  return (
    <div className='wrapper'>
      <nav className='nav'>
        { links.map( link => (
          <Link 
          to={link.path} 
          className={ location.pathname === link.path ? 'active' : ''  } >
            {link.name}
          </Link>
        )) }
      </nav>
    </div>
  );
};

export default Links;
