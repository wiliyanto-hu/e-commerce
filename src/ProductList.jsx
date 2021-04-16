import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import Spinner from "./Spinner";

const ProductList = ({ addItem, category }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      const { data } = response;
      setProducts(data);
    }
    fetchData();
  }, []);

  const allProducts = () => {
    if (category === "all products" || !category) {
      return products.map((p) => (
        <Product product={p} key={p.id} addItem={addItem} />
      ));
    } else {
      const filtered = products.filter((p) => p.category === category);
      return filtered.map((p) => (
        <Product product={p} key={p.id} addItem={addItem} />
      ));
    }
  };
  return (
    <Grid container spacing={6}>
      {products.length ? allProducts() : <Spinner />}
    </Grid>
  );
};
export default ProductList;

// {products.length ? (
//   if(category)
//   products.map((p) => (
//     <Product product={p} key={p.id} addItem={addItem} />
//   ))
// ) : (
//   <Spinner />
// )}
