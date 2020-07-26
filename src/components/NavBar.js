import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <NavLink to={routes.people} className="nav-link">
          People
        </NavLink>
        <NavLink to={routes.planets} className="nav-link">
          Planets
        </NavLink>
        <NavLink to={routes.films} className="nav-link">
          Films
        </NavLink>
        <NavLink to={routes.species} className="nav-link">
          Species
        </NavLink>
        <NavLink to={routes.starships} className="nav-link">
          Starships
        </NavLink>
        <NavLink to={routes.vehicles} className="nav-link">
          Vehicles
        </NavLink>
      </nav>
    </div>
  );
}

export { NavBar };
