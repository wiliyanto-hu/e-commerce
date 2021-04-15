import { withStyles } from "@material-ui/styles";

const styles = {
  Container: {
    margin: "1rem auto",
    width: "fit-content",
  },
  Spinner: {
    border: "2px solid",
    borderColor: "black white",
    width: "50px",
    borderRadius: "50%",
    height: "50px",
    padding: "5px",
    animation: "spin 1.5s linear infinite",
    margin: "0 auto",
  },
};
const Spinner = ({ classes }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Spinner}></div>
      <h3>Loading Data Please Wait</h3>
    </div>
  );
};
export default withStyles(styles)(Spinner);
