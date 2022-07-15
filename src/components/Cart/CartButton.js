import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <button
      onClick={props.toggleCartVisibilytyHandler}
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{props.amount}</span>
    </button>
  );
};

export default CartButton;
