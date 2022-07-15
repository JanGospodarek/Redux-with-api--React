import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store";
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const data = {
    title,
    price,
    productAmount: quantity,
  };
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(cartActions.addToCart(data));
  }
  function removeFromCartHandler() {
    dispatch(cartActions.removeFromCart(data));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
