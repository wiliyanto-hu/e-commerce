import { sizes } from "../helper";
const styles = {
  ProductDetails: {
    width: "80%",
    display: "flex",
    height: "50%",
    margin: "0 auto",
    padding: "1rem",
    justifyContent: "space-around",

    [sizes.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imageContainer: {
    width: "40%",
    height: "350px",
    "& img": {
      height: "100%",
      width: "100%",
    },
    [sizes.down("sm")]: {
      height: "200px",
    },
  },
  description: {
    marginLeft: "1rem",
    flexBasis: "50%",
  },
  text: {
    margin: "1rem",
  },
  category: {
    margin: "1rem",
    textTransform: "capitalize",
  },
};
export default styles;
