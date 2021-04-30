import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Card = (props) => {
  return (
    <Grid item key={props.id} xs={5} sm={4} md={3} lg={2}>
      <Paper key={props.id} id={props.id} onClick={props.onClick}>
        {props.src} <p>{props.text}</p>
      </Paper>
    </Grid>
  );
};

export default Card;
