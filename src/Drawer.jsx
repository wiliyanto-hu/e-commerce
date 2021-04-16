import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ state, toggleDrawer, setCategory }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["All Products", "Men Clothing", "Women Clothing", "Electronics"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => setCategory(text.toLowerCase())}
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer
          anchor={"left"}
          open={state ? state["left"] : false}
          onClose={toggleDrawer("left", false)}
          className={classes.Drawer}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
