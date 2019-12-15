import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import worktubeMaterialTheme from "material-ui-override/core"

const theme = createMuiTheme(worktubeMaterialTheme)

function App({ routes }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>{routes}</Router>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  routes: PropTypes.object.isRequired
}

export default App
