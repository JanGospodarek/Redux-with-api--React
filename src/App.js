import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartActions } from "./components/store";
import { useEffect, useState, Fragment } from "react";
import Notification from "./components/UI/Notofication";
function App() {
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  const disp = useDispatch();

  useEffect(() => {
    async function sendCartData() {
      disp(
        cartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://gowno-b3287-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error("Sending cart data failed.");
      disp(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    }
    try {
      sendCartData();
    } catch (error) {
      disp(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  }, [cart, disp]);
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
