import React from "react"
import { Box, Typography } from "@material-ui/core"
import { useParams, Link } from "react-router-dom"

const Layout = () => {
  let { id } = useParams()
  return (
    <Box>
      <Typography variant="h5">Job with id: {id}</Typography>
      <Link to={`/jobs/${id}/edit`}>Edit</Link>
    </Box>
  )
}

export default Layout
