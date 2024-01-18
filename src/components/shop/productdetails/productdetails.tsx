import { motion } from "framer-motion";
import { useOutletContext, useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import { IProduct } from "../../../models/IProduct";
import { ProductList } from "../shop";
import "./productdetails.scss";

export const ProductDetails = () => {
  const { products } = useOutletContext<ProductList>();
  const { addProductToCart } = useOutletContext<MyContext>();

  const { id } = useParams();

  let newId = Number(id);

  const handleClick = (p: IProduct) => {
    addProductToCart(p);
  };

  let html = products
    .filter((p) => p.id === newId)
    .map((p) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="productdetailscontainer"
          key={p.id}
        >
          <div className="imagecontainer">
            <img src={p.img} alt={p.name} />
          </div>
          <div className="productdetails">
            <div className="productdescription">
              <p>Kort om Produkten:</p>
              <p>{p.description}</p>
            </div>
            <div className="productinfo">
              <p>{p.name}</p>
              <p>{p.brandName}</p>
              <p>{p.price} kr</p>
              <button
                className="buybutton"
                onClick={() => {
                  handleClick(p);
                }}
              >
                Lägg till i varukorg
              </button>
            </div>
          </div>
        </motion.div>
      );
    });

  return <>{html}</>;
};
