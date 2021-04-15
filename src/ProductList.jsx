import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      const { data } = response;
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <Grid container spacing={6}>
      {products.length ? (
        products.map((p) => <Product product={p} key={p.id} />)
      ) : (
        <Spinner />
      )}
    </Grid>
  );
};
export default ProductList;
