import { sizes } from "../helper";

const styles = {
  CartItem: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between  ",

    "& img": {
      width: "100px",
      height: "100px",
      padding: "1rem",
    },
  },
  imgText: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    margin: "0 1rem",
  },
  text: {
    marginLeft: "2rem",
  },
  trash: {
    position: "absolute",
    bottom: "10px",
    right: "5px",
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
    [sizes.down("xs")]: {
      color: "red",
    },
  },
};
export default styles;
