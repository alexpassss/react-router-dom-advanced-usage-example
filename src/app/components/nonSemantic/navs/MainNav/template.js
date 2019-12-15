import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import {
  CREATE_PATH,
  SEARCH_PATH,
  CREATION_WIZARD_PATH
} from "modules/job-module/routes/paths"

const Template = () => {
  return (
    <nav>
      <Button component={Link} to={CREATE_PATH}>
        Create job
      </Button>
      <Button component={Link} to={CREATION_WIZARD_PATH}>
        Creation wizard
      </Button>
      <Button component={Link} to={SEARCH_PATH}>
        Search
      </Button>
    </nav>
  )
}

export default Template
