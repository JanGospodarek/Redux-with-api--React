import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartActions } from "./components/store";
import { useEffect, useState, Fragment } from "react";
import Notification from "./components/UI/Notofication";
import { sendCartData } from "./components/store/index";
let isInit = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
