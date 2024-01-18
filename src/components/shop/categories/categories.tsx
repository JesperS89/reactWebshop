import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICategory } from "../../../models/ICategory";
import { motion } from "framer-motion";
import "./categories.scss";
export const Categories = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<ICategory[]>([
    {
      id: 1,
      category: "Ansiktsvård",
      subCategories: [
        { id: 101, category: "Dagkräm" },
        {
          id: 102,
          category: "Serum",
        },
      ],
    },
    {
      id: 2,
      category: "Kroppsvård",
      subCategories: [
        { id: 201, category: "Hudkräm" },
        { id: 202, category: "Fotkräm" },
      ],
    },
    {
      id: 3,
      category: "Solskydd",
      subCategories: [
        { id: 301, category: "15-30" },
        { id: 302, category: "50" },
      ],
    },
  ]);

  const handleCategoryClick = (c: ICategory) => {
    navigate(`/shop/category/${c.id}`);
  };

  const handleSubClick = (c: ICategory, i: number) => {
    navigate(`/shop/category/${c.subCategories[i].id}`);
  };

  let menu = categories.map((c) => {
    return (
      <div key={c.id}>
        <h3
          onClick={() => {
            handleCategoryClick(c);
          }}
        >
          {c.category}
        </h3>
        <ul>
          {c.subCategories.map((sc, i) => (
            <li
              key={sc.id}
              onClick={() => {
                handleSubClick(c, i);
              }}
            >
              {sc.category}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className="menucontainer">
      {menu}
      <Link to="/shop">
        <motion.button whileTap={{ scale: 0.9 }} className="filterbutton">
          Rensa filter
        </motion.button>
      </Link>
    </div>
  );
};
