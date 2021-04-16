import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { withStyles } from "@material-ui/styles";
import { Typography, Paper, Button } from "@material-ui/core";
import styles from "./styles/ProductDetailsStyle";

const ProductDetails = ({ classes, addItem }) => {
  const [product, setProduct] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    async function getSingleData() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const { data } = response;
      setProduct(data);
    }
    getSingleData();
  }, []);

  return (
    <>
      {product ? (
        <Paper className={classes.ProductDetails}>
          <div className={classes.imageContainer}>
            <img src={product.image} alt={product.image} />
          </div>
          <div className={classes.description}>
            <Typography variant="h5" className={classes.text}>
              {product.title}
            </Typography>
            <Typography variant="h5" className={classes.text}>
              ${product.price}
            </Typography>
            <Typography variant="body1" className={classes.category}>
              {product.category}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {product.description}
            </Typography>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              onClick={() => addItem(product)}
            >
              Add to cart
            </Button>
          </div>
        </Paper>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default withStyles(styles)(ProductDetails);
