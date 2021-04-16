import React from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyle";

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
            <i class="fas fa-shopping-cart"></i>
          </Link>
          <span className={classes.cartItems}>{cart.length}</span>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);
