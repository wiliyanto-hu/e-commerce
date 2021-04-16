import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CartItem from "./CartItem";
import styles from "./styles/CartStyle";

const Cart = ({ cart, classes, deleteItem }) => {
  return (
    <>
      {cart.length ? (
        <Paper>
          <div>
            {cart.map((item) => (
              <CartItem item={item} deleteItem={deleteItem} />
            ))}
          </div>
          <div className={classes.totalPrice}>
            <Typography>Total Price:</Typography>
            <Typography>
              $
              {cart
                .reduce((a, { price, quantity }) => a + price * quantity, 0)
                .toFixed(2)}
            </Typography>
          </div>
        </Paper>
      ) : (
        <h2>Cart is Empty</h2>
      )}
    </>
  );
};

export default withStyles(styles)(Cart);
