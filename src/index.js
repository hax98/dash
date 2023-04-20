import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "views/Dashboard.js";
import Erogazione from "components/Erogazione";
import Sidebar from "components/Sidebar";
import Main from "components/Main";
import ElencoApi from "components/ElencoApi";
import DettaglioApi from "components/DettaglioApi";

ReactDOM.render(
  <BrowserRouter>
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path ="/Elenco-Api" component={ElencoApi}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/Erogazione" component={Erogazione} />
      <Route path="/api/:id" component={DettaglioApi} />  
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
