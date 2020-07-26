import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import { Films } from "./views/Films";
import { People } from "./views/People";
import { Planets } from "./views/Planets";
import { Species } from "./views/Species";
import { Starships } from "./views/Starships";
import { Vehicles } from "./views/Vehicles";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route path={routes.people} component={People} />
          <Route path={routes.planets} component={Planets} />
          <Route path={routes.films} component={Films} />
          <Route path={routes.species} component={Species} />
          <Route path={routes.starships} component={Starships} />
          <Route path={routes.vehicles} component={Vehicles} />
        </Switch>
      </div>
    </>
  );
}

export default App;
