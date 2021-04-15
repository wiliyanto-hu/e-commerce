import React from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "2rem",
  },
  title: {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
    display: "block",
  },
  AppBar: {
    backgroundColor: "black",
  },
  CartBtn: {
    marginLeft: "auto",
  },
};

const Navbar = ({ classes, setState, toggleDrawer }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={toggleDrawer("left", true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" exact>
            <Typography variant="h6" className={classes.title}>
              E-Store
            </Typography>
          </Link>

          <Button color="inherit" className={classes.CartBtn}>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);