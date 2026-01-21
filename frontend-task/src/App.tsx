import { useState,useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import Navbar from "./components/Navbar";
import StatTiles from "./components/StatTiles";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

function App(){

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // const [products, setProducts] = useState<Product[]>([
  //   { id: 1, name: "Laptop", price: 800, category: "A" ,stock:10},
  //   { id: 2, name: "Charger", price: 120, category: "B",stock:2},
  //   { id: 3, name: "Table", price: 300, category: "C",stock:0 }]);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (query?: string) => {
    try {
      setLoading(true);
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}`
        : `https://dummyjson.com/products`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();

      const mapped: Product[] = data.products.map((p: any) => ({
        id: p.id,
        name: p.title,
        price: p.price,
        category: p.category,
        stock: p.stock,
      }));

      setProducts(mapped);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
      fetchProducts(search.trim() || undefined);
  }, [search]);


  // const addProduct = (product:Product)=>{
  //   setProducts([...products, product]);
  // };

  const deleteProduct = (id:number)=>{
    setProducts(products.filter((p)=>p.id!=id));
  };

  const filteredProducts = products.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className="p-4">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 mt-4 mb-4 w-full"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

      {/* <ProductForm addProduct={addProduct}/> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {filteredProducts.map((product)=>(
          <ProductCard theme={theme} key={product.id} {...product} deleteProduct={deleteProduct} /> ))}
      </div>

      <StatTiles products={products}/>
    </div>
  );
}


export default App;
