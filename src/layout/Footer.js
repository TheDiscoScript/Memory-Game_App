import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    bottom: "0px",
    width: "100%",
    alignContent: "center",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Typography variant="h6" color="inherit">
        By Willdooo
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          href="https://github.com/Willdooo"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Typography>
    </AppBar>
  );
};

export default Footer;
