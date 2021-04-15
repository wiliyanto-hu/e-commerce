import { withStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";

const styles = {
  CartItem: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between  ",

    "& img": {
      width: "100px",
      height: "100px",
      padding: "1rem",
    },
  },
  imgText: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    margin: "0 1rem",
  },
  text: {
    marginLeft: "2rem",
  },
  trash: {
    position: "absolute",
    bottom: "10px",
    right: "5px",
    "&:hover": {
      color: "red",
    },
  },
};

const CartItem = ({ classes, item, deleteItem }) => {
  return (
    <>
      <div className={classes.CartItem}>
        <div className={classes.imgText}>
          <img src={`${item.image}`} />
          <Typography variant="subtitle" className={classes.text}>
            {item.title} x{item.quantity}
          </Typography>
        </div>
        <Typography variant="body1">${item.price * item.quantity}</Typography>
        <i
          className={`fas fa-trash ${classes.trash}`}
          onClick={() => deleteItem(item.id)}
        ></i>
      </div>
      <Divider variant="fullWidth" />
    </>
  );
};

export default withStyles(styles)(CartItem);
