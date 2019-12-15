import React from "react"
import { Box, Typography } from "@material-ui/core"
import { JobViewPrimary } from "../../components"

const jobs = [
  { id: 1, title: "ReactJS developer" },
  { id: 2, title: "EmberJS developer" },
  { id: 3, title: "Full-stack Java developer" }
]

const Layout = () => {
  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography variant="h5">Search jobs</Typography>
      </Box>
      {jobs.map(job => (
        <JobViewPrimary model={job} />
      ))}
    </React.Fragment>
  )
}

export default Layout
