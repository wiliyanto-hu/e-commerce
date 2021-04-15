import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CartItem from "./CartItem";

const styles = {
  Cart: {
    width: "80%",
    margin: "0 auto",
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
        </Paper>
      ) : (
        <h2>Cart is Empty</h2>
      )}
    </>
  );
};

export default withStyles(styles)(Cart);
