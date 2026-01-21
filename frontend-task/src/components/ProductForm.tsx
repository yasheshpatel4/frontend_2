import { useForm, Controller } from "react-hook-form";
import type { Product } from "../App";

type ProductFormProps ={
  addProduct: (product: Product) => void;
};

type FormValues ={
  name: string;
  price: number;
  category: string;
  stock: number;
};

const ProductForm =({ addProduct }: ProductFormProps)=>{
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  }=useForm<FormValues>(
    {defaultValues:{
      name: "",
      price: 10,
      category: "",
      stock: 0
    }}
  );

  const onSubmit =(data: FormValues)=>{
    addProduct({
      id: Date.now(),
      name: data.name,
      price: data.price,
      category: data.category,
      stock: data.stock
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border p-4">
      Product Name:
      <Controller
        name="name"
        control={control}
        rules={{ required: "name is required" }}
        render={({field})=>(
          <input
            {...field}
            placeholder="Name"
            className="border p-2 mb-2 w-full"
          />
        )}
      />
      {errors.name && (
        <p className="text-red-500 text-sm mb-2">
          {errors.name.message}
        </p>
      )}
      Price:
      <Controller
        name="price"
        control={control}
        rules={{
          required: "Price is required",
          min: { value: 1, message:"Price should greater than 0"},
        }}
        render={({field})=>(
          <input
            {...field}
            type="number"
            placeholder="Price"
            className="border p-2 mb-2 w-full"
          />
        )}
      />
      {errors.price && (
        <p className="text-red-500 text-sm mb-2">
          {errors.price.message}
        </p>
      )}
      Category:
      <Controller
        name="category"
        control={control}
        render={({field}) =>(
          <input
            {...field}
            placeholder="Category"
            className="border p-2 mb-2 w-full"
          />
        )}
      />
      stocks:
      <Controller
        name="stock"
        control={control}
        render={({field}) =>(
          <input
            {...field}
            placeholder="stock"
            className="border p-2 mb-2 w-full"
          />
        )}
      />

      <button className="bg-blue-500 text-white px-4 py-2">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
