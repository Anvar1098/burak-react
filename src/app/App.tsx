import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch } from "react-router-dom";
import { Users } from "./screens/Users";
import { About } from "./screens/About";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}



export default App;
