import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="hero"
    >
      <div className="hero__container">
        <p className="hero__text">
          Torr, känslig eller oljig hy? Vi har produkter för alla hudtyper.
        </p>
        <Link to="/shop">
          <button className="hero__button" id="indexbutton">
            Köp nu
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
