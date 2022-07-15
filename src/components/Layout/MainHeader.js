import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
const MainHeader = (props) => {
  const dispatch = useDispatch();
  function toggleCartVisibilytyHandler() {
    dispatch(cartActions.toggleCart());
  }
  const amount = useSelector((state) => state.amount);
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton
              toggleCartVisibilytyHandler={toggleCartVisibilytyHandler}
              amount={amount}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
