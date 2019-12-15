import React from "react"
import { Switch, Route } from "react-router-dom"
import {
  Create,
  CreationWizard,
  Dashboard,
  Edit,
  Emails,
  EvaluationPriorities,
  MainInformation,
  Promotion,
  Search,
  Show,
  ShowApplicant,
  Template
} from "./routes"

const MODULE_ROUTES = () => {
  return (
    <Switch>
      <Route exact path={Create.path} component={Create.component} />
      <Route path={CreationWizard.path}>
        <CreationWizard.component>
          <Switch>
            <Route exact path={Template.path} component={Template.component} />
            <Route
              exact
              path={EvaluationPriorities.path}
              component={EvaluationPriorities.component}
            />
            <Route
              exact
              path={MainInformation.path}
              component={MainInformation.component}
            />
            <Route
              exact
              path={Promotion.path}
              component={Promotion.component}
            />
          </Switch>
        </CreationWizard.component>
      </Route>
      <Route exact path={Dashboard.path} component={Dashboard.component} />
      <Route exact path={Edit.path} component={Edit.component} />
      <Route exact path={Emails.path} component={Emails.component} />
      <Route exact path={Search.path} component={Search.component} />
      <Route exact path={Show.path} component={Show.component} />
      <Route
        exact
        path={ShowApplicant.path}
        component={ShowApplicant.component}
      />
    </Switch>
  )
}

export default MODULE_ROUTES
