import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, product }) => {
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
