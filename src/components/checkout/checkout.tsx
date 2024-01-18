import { CheckoutCart } from "./checkoutCart/checkoutCart";
import { Payment } from "./payment/payment";
import "./checkout.scss";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "App";
import { motion } from "framer-motion";

export const Checkout = () => {
  const { cart } = useOutletContext<MyContext>();

  const { minusProduct } = useOutletContext<MyContext>();

  const { plusProduct } = useOutletContext<MyContext>();

  const { cartTotalPrice } = useOutletContext<MyContext>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="checkoutwrapper"
    >
      <Payment cartTotalPrice={cartTotalPrice} />
      <CheckoutCart
        cart={cart}
        minusProduct={minusProduct}
        plusProduct={plusProduct}
      />
    </motion.div>
  );
};
