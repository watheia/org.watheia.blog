import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { defaultProps, TopLayout } from "./top-layout"

export const Example1 = (): JSX.Element => {
  return (
    <TopLayout {...defaultProps}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ color: "white", fontWeight: 900 }}>
            Join the world's leading companies at Watheia 2020
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about
            Watheia works for our global partners.
          </Typography>
          <Typography variant="h5" style={{ color: "white" }}>
            Want more information? Download our overview and a member of our specialist team
            will be in touch to talk about your goals for Watheia 2020.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained">Download exhibitor overview</Button>
        </Grid>
      </Grid>
    </TopLayout>
  )
}
