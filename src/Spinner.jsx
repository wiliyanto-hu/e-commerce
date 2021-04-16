import { withStyles } from "@material-ui/styles";
import styles from "./styles/SpinnerStyle";

const Spinner = ({ classes }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Spinner}></div>
      <h3>Loading Data Please Wait</h3>
    </div>
  );
};
export default withStyles(styles)(Spinner);
