import { withStyles } from "@material-ui/styles";
import { Typography, Divider } from "@material-ui/core";
import styles from "./styles/CartItemStyle";

const CartItem = ({ classes, item, deleteItem }) => {
  return (
    <>
      <div className={classes.CartItem}>
        <div className={classes.imgText}>
          <img src={`${item.image}`} alt={item.title} />
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
