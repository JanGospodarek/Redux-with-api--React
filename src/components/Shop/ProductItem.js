import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
const ProductItem = (props) => {
  const { title, price, description } = props;
  const data = {
    title,
    price,
    description,
    productAmount: 1,
  };
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(cartActions.addToCart(data));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
