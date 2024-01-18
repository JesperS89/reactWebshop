import { motion } from "framer-motion";
import { CartItem } from "models/cartItem";
import "./checkoutCart.scss";

interface ICheckoutCartProps {
  cart: CartItem[];
  minusProduct(p: CartItem, i: number): void;
  plusProduct(p: CartItem): void;
}

export const CheckoutCart = (props: ICheckoutCartProps) => {
  const add = (c: CartItem) => {
    props.plusProduct(c);
  };

  const minus = (c: CartItem, i: number) => {
    props.minusProduct(c, i);
  };

  let html = props.cart.map((p, i) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
        className="checkoutcart__card"
      >
        <div className="checkoutcart__imgcontainer">
          <img src={p.product.img} alt={p.product.name} />
        </div>
        <p className="checkoutcart__productnamecontainer">{p.product.name}</p>
        <p>{p.product.price * p.amount} kr</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            minus(p, i);
          }}
        >
          -
        </motion.button>
        <p>{p.amount}</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            add(p);
          }}
        >
          +
        </motion.button>
      </motion.div>
    );
  });
  return (
    <div className="checkoutcart">
      <h3>VARUKORG</h3>
      {html}
    </div>
  );
};
