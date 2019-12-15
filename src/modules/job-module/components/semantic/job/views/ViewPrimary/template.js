import React from "react"
import { Link } from "react-router-dom"
import { Box, Typography } from "@material-ui/core"

const Template = props => {
  return (
    <Box p={2} bgcolor="#efefef" mb={1}>
      <Typography variant="body1">
        <Link to={`/jobs/${props.model.id}`}>{props.model.title}</Link>
      </Typography>
    </Box>
  )
}

export default Template
