import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../models/IProduct";
import "./product.scss";
import { motion } from "framer-motion";
interface IProductProps {
  product: IProduct;
  addProductToCart(p: IProduct): void;
  index: number;
}

export function Product(props: IProductProps) {
  const handleClick = () => {
    props.addProductToCart(props.product);
  };

  const navigate = useNavigate();

  const showMore = () => {
    navigate(`/shop/${props.product.id}`);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: props.index * 0.1 }}
        className="productcontainer"
      >
        <div onClick={showMore} className="productclickcontainer">
          <div className="imgcontainer">
            <img
              className="productimg"
              src={props.product.img}
              alt={props.product.name}
            />
          </div>
          <p className="productname">{props.product.name}</p>
          <p>{props.product.brandName}</p>
          <p>{props.product.price} kr</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="addtocartbutton"
          onClick={handleClick}
        >
          Lägg till i varukorgen
        </motion.button>
      </motion.div>
    </div>
  );
}
