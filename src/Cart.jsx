import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CartItem from "./CartItem";

const styles = {
  Cart: {
    width: "80%",
    margin: "0 auto",
  },
  totalPrice: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
};

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
              {cart.reduce((a, { price, quantity }) => a + price * quantity, 0)}
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
