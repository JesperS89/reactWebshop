import { CartItem } from "models/cartItem";
import "./cartbig.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface ICartBigProps {
  cart: CartItem[];
  cartclick: boolean;
  closeCartFunction(): void;
  plusProduct(p: CartItem): void;
  minusProduct(p: CartItem, i: number): void;
  cartTotalPrice: number;
}

export const CartBig = (props: ICartBigProps) => {
  const [shopActive, setShopActive] = useState(false);

  const add = (c: CartItem) => {
    props.plusProduct(c);
  };

  const minus = (c: CartItem, i: number) => {
    props.minusProduct(c, i);
  };

  let html = props.cart.map((p, i) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        key={p.product.id}
        className="cartbigwrapper__shopcard"
      >
        <div className="cartbigwrapper__imgcontainer">
          <img src={p.product.img} alt={p.product.name} />
        </div>
        <p className="cartbigwrapper__productnamewrapper">{p.product.name}</p>
        <p>{p.product.price * p.amount}kr</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="cartbigwrapper__buttons"
          onClick={() => {
            minus(p, i);
          }}
        >
          -
        </motion.button>
        <p> {p.amount}</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="cartbigwrapper__buttons"
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
    <div
      className={props.cartclick ? "cartbigwrapperactive" : "cartbigwrapper"}
    >
      <div className="cartbigwrapper__header">
        Varukorg
        <FontAwesomeIcon
          onClick={props.closeCartFunction}
          className="cartbigwrapper__closebutton"
          icon={faXmark}
        />
      </div>
      <div className="cartbigwrapper__info">
        <p className="cartbigwrapper__info__product">Produkt</p>
        <p className="cartbigwrapper__info__price">Pris</p>
        <p className="cartbigwrapper__info__amount">Antal</p>
      </div>
      <div className="cartbigwrapper__shopcontainer">{html}</div>
      <div className="cartbigwrapper__checkoutcontainer">
        <div className="cartbigwrapper__totalcontainer">
          <h3>Totalt: {props.cartTotalPrice}kr</h3>
        </div>
        <Link className="cartbigwrapper__link" to="/checkout">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={props.closeCartFunction}
            className="cartbigwrapper__checkoutbutton"
          >
            Gå till Kassan
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
