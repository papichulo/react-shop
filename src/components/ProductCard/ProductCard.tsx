import { useNavigate } from "react-router-dom";
import {ProductInfo} from "../../models/models.ts";

interface ProductCardProps {
  id: number,
  product: ProductInfo
}
const ProductCard = (props: ProductCardProps) => {
  const id = props.id;
  const product = props.product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`, { state: { product: product } });
  };

  return (
    <div
      onClick={handleClick}
      key={id}
      className="p-8 overflow-hidden text-center rounded-lg ring-slate-900/5 bg-slate-800 highlight-white/5 ring-0"
    >
      <h2>{product.name}</h2>
      {product.description}
    </div>
  );
};

export default ProductCard;
