import { useOutletContext, useParams } from "react-router-dom";
import { IProduct } from "../../../models/IProduct";
import { Product } from "../product/product";
import { ProductList } from "../shop";
import "./products.scss";

interface IProductsProps {
  products: IProduct[];
  addProductToCart(p: IProduct): void;
}

export const Products = () => {
  const { id } = useParams();

  let newId = Number(id);

  const { products, addProductToCart } = useOutletContext<ProductList>();

  let html = newId
    ? products
        .filter((p) => p.subCategory === newId || p.category === newId)
        .map((p, i) => {
          return (
            <Product
              index={i}
              product={p}
              key={p.id}
              addProductToCart={addProductToCart}
            />
          );
        })
    : products.map((p, i) => {
        return (
          <Product
            index={i}
            product={p}
            key={p.id}
            addProductToCart={addProductToCart}
          />
        );
      });
  return <div className="shopcard">{html}</div>;
};
