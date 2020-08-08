import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Links.scss";

const links = [
  {
    path: "/monday",
    name: "Monday",
  },
  {
    path: "/tuesday",
    name: "Tuesday",
  },
  {
    path: "/wednesday",
    name: "Wednesday",
  },
  {
    path: "/thursday",
    name: "Thursday",
  },
  {
    path: "/friday",
    name: "Friday",
  },
];

const Links = () => {
  let location = useLocation();

  return (
    <div className="wrapper">
      <nav className="nav">
        {links.map((link, key) => (
          <Link
            key={key}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Links;
