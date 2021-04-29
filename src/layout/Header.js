import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    position: "static",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          href="https://linkedin.com/in/daniel-wollmann"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>

        <Typography variant="h4" className={classes.title}>
          Memory Game
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
