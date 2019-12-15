import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import "./app/styles/styles.css"
import "./app/styles/bootstrap-grid-override.css"

const routes = require("./app/routes/createRoutes").default()

const rootElement = document.getElementById("root")
ReactDOM.render(<App routes={routes} />, rootElement)
