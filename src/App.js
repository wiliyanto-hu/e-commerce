import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import {
  Container,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Route, Switch } from "react-router-dom";

function App() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("Success");
  const [category, setCategory] = React.useState("all products");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClose = () => setOpen(false);

  const addItem = (item) => {
    setOpen(false);
    setLoading(true);
    const newCart = [...cart];
    setTimeout(() => {
      const productIdx = newCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (productIdx >= 0) {
        newCart[productIdx].quantity += 1;
      } else {
        newCart.push({ ...item, quantity: 1 });
      }
      setCart(newCart);
      setLoading(false);
      setMessage("Item successfully added to cart");
      setOpen(true);
    }, 1000);
  };
  const deleteItem = (id) => {
    setOpen(false);
    setLoading(true);
    setTimeout(() => {
      const newCart = cart.filter((i) => i.id !== id);
      setCart(newCart);
      setLoading(false);
      setMessage("Item deleted from cart");
      setOpen(true);
    }, 1000);
  };

  return (
    <div className="App">
      <Navbar setState={setState} toggleDrawer={toggleDrawer} />
      <Drawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
        setCategory={setCategory}
      />
      <Container maxWidth="lg" style={{ margin: "1.5rem auto" }}>
        <Switch>
          <Route
            path="/cart"
            exact
            render={() => <Cart cart={cart} deleteItem={deleteItem} />}
          />
          <Route
            path="/:id"
            exact
            render={() => <ProductDetails addItem={addItem} />}
          />
          <Route
            path="/"
            exact
            render={() => <ProductList addItem={addItem} category={category} />}
          />
        </Switch>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        </Snackbar>
        <Backdrop open={loading} style={{ zIndex: 2 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </div>
  );
}

export default App;
