import React from "react";
import Card from "./Cards";
import { Paper, Grid } from "@material-ui/core";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Paper style={{ margin: "80px", padding: "24px" }}>
          <Grid container style={{ justifyContent: "space-around" }}>
            <Card />
            <Card />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default HomePage;
