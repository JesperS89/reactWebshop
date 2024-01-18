import "./cart.scss";
import { CartItem } from "../../models/cartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
interface ICartProps {
  cart: CartItem[];
  cartclick: Boolean;
  openCartFunction(): void;
  closeCartFunction(): void;
}

export const Cart = (props: ICartProps) => {
  const cartQuantity = props.cart.reduce(
    (quantity, item) => item.amount + quantity,
    0
  );

  return (
    <div className="cartsmall" onClick={props.openCartFunction}>
      <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faCartShopping} />
      <div className="counterwrapper">
        {props.cart.length > 0 && (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="counter"
          >
            {cartQuantity}
          </motion.p>
        )}
      </div>
    </div>
  );
};
