import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const showCart = useSelector((state) => state.cartVisibilyty);
  const cart = useSelector((state) => state.cart);
  if (showCart) {
    return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <CartItem
              item={{
                title: item.title,
                quantity: item.productAmount,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Card>
    );
  }
};

export default Cart;
