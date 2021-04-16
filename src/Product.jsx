import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { truncateString } from "./helper";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/ProductStyle";

const Product = ({ product, classes, addItem }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <Card className={classes.Card}>
        <Link to={`/${product.id}`}>
          <CardActionArea>
            <div className={classes.imgContainer}>
              <img
                className={classes.image}
                src={product.image}
                alt={product.title}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="body1" component="h2">
                {truncateString(product.title, 50)}
              </Typography>
              <Typography variant="h6" component="p">
                {`$${product.price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            onClick={() => addItem(product)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(Product);
