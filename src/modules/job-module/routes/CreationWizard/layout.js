import React from "react"
import { Redirect, Link } from "react-router-dom"
import {
  TEMPLATE_PATH,
  EVALUATION_PRIORITIES_PATH,
  MAIN_INFORMATION_PATH,
  PROMOTION_PATH
} from "../paths"
import { Typography } from "@material-ui/core"
// import {
//   EvaluationPriorities,
//   MainInformation,
//   Promotion,
//   Template
// } from "../"
// import { Switch, Route } from "react-router-dom"

const Layout = props => {
  return (
    <React.Fragment>
      {/* Redirect example */}
      <Redirect to={TEMPLATE_PATH} />
      <Typography variant="h5">Creation wizard</Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <Link to={TEMPLATE_PATH}>Template</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link to={EVALUATION_PRIORITIES_PATH}>Evaluation priorities</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link to={MAIN_INFORMATION_PATH}>Main information</Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link to={PROMOTION_PATH}>Promotion</Link>
          </Typography>
        </li>
      </ul>
      <div>{props.children}</div>
      {/* Example of usage inside route layout */}
      {/* <div>
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
      </div> */}
    </React.Fragment>
  )
}

export default Layout
