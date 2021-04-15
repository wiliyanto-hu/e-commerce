import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

function App() {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="App">
      <Navbar setState={setState} toggleDrawer={toggleDrawer} />
      <Drawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg" style={{ margin: "1.5rem auto" }}>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/:id" exact component={ProductDetails} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
