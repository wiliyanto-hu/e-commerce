import { sizes } from "../helper";

const styles = {
  "@global": {
    ".MuiButton-containedSecondary": {
      backgroundColor: "black",
      color: "white",

      [sizes.down("xs")]: {
        "&:hover": {
          backgroundColor: "black",
        },
      },
    },
  },
  Card: {
    padding: "1rem",
  },
  imgContainer: {
    width: "100%",
    height: "250px",

    [sizes.down("xs")]: {
      height: "150px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
};
export default styles;
