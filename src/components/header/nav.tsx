import { Link } from "react-router-dom";
import { CartItem } from "../../models/cartItem";
import { Cart } from "./cart";
import { ReactComponent as Logo } from "assets/logo-no-background.svg";
import "./nav.scss";
import { CartBig } from "./cartbig";
import { useState } from "react";

interface INavProps {
  cart: CartItem[];
  plusProduct(p: CartItem): void;
  minusProduct(p: CartItem, i: number): void;
  cartTotalPrice: number;
}

export const Nav = (props: INavProps) => {
  const [shopActive, setShopActive] = useState(false);

  const toggleCart = () => {
    setShopActive(!shopActive);
  };
  const closeCart = () => {
    setShopActive(false);
  };

  return (
    <div className="headercontainer">
      <div className="navcontainer">
        <ul className="navlist">
          <li>
            <Link className="navlinks" to="/">
              Hem
            </Link>
          </li>
          <li>
            <Link className="navlinks" to="/shop">
              Shop
            </Link>
          </li>
          <li className="navlinks">Kontakt</li>

          <li>
            <Link className="navlinks" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
        <div>
          <Logo className="logo" />
        </div>
        <Cart
          closeCartFunction={closeCart}
          openCartFunction={toggleCart}
          cartclick={shopActive}
          cart={props.cart}
        />
      </div>
      <CartBig
        cartTotalPrice={props.cartTotalPrice}
        minusProduct={props.minusProduct}
        plusProduct={props.plusProduct}
        closeCartFunction={closeCart}
        cartclick={shopActive}
        cart={props.cart}
      />
    </div>
  );
};
