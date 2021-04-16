import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import Spinner from "./Spinner";

const ProductList = ({ addItem, category }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      let response;
      if (!category || category === "all products") {
        response = await axios.get("https://fakestoreapi.com/products");
      } else {
        response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }
      const { data } = response;
      setProducts(data);
    }
    fetchData();
  }, [category]);

  return (
    <Grid container spacing={6}>
      {products.length ? (
        products.map((p) => (
          <Product product={p} key={p.id} addItem={addItem} />
        ))
      ) : (
        <Spinner />
      )}
    </Grid>
  );
};
export default ProductList;
