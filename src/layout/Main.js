import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    border: "solid black 1px",
  },
  sidebar: {
    marginTop: "1rem",
    textAlign: "center",
    border: "solid black 1px",
  },
}));

const Main = () => {
  const classes = useStyles();
  const dataTest = [
    {
      src: <AcUnitIcon style={{ fontSize: 100 }} />,
      text: "TestingPicture",
      id: 1,
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={10} lg={10} className={classes.paper}>
          <div>
            {dataTest[0].src} {dataTest[0].text}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className={classes.sidebar}>
          <Typography variant="subtitle1" gutterBottom>
            Max score:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            High score:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Current score:
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
