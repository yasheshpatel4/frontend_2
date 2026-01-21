type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  deleteProduct: (id: number) => void;
};

const ProductCard = ({
  id,
  name,
  price,
  category,
  stock,
  deleteProduct,
}: ProductCardProps) => {
  return (

    <div className="border p-4 rounded">
      <h2 className="font-semibold">{name}</h2>
      <p>Price: ${price}{price > 500 && <span>  (premium)</span>}</p>
      <p>Category: {category}</p>
      {stock == 0 &&<p>out of stock</p>}
      {(stock > 0 && stock< 6 )&&<p>limited</p>}
      <button onClick={() => deleteProduct(id)} className="text-red-500 mt-2">
      Delete
      </button>
      
    </div>
  );

};

export default ProductCard;
