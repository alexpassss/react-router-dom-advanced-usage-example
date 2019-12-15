import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Home } from "./index"
import JobModuleRoutes from "../../modules/job-module"

import { MainNav } from "../../app/components"

export default function createRoutes() {
  const isLoggedIn = false
  return (
    <React.Fragment>
      <MainNav />
      {/* Example of redirect with condition */}
      {isLoggedIn ? <Redirect to="/jobs/search" /> : <Redirect to="/" />}
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        <JobModuleRoutes />
      </Switch>
    </React.Fragment>
  )
}
