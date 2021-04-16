import React from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
    "&:hover": {
      opacity: 0.7,
    },
  },
  AppBar: {
    backgroundColor: "black",
  },
  Cart: {
    marginLeft: "auto",
    color: "white",
    display: "block",
    textTransform: "uppercase",
    fontWeight: "500",
    "&:hover": {
      opacity: 0.7,
    },
  },
  cartItems: {
    backgroundColor: "rgb(235,119,52)",
    padding: "1px 5.5px",
    color: "white",
    borderRadius: "50%",
  },
};

const Navbar = ({ classes, toggleDrawer, cart }) => {
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
          <Link to="/cart" exact className={classes.Cart}>
            Cart <span className={classes.cartItems}>{cart.length}</span>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);
