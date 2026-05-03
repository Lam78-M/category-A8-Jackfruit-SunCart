import products from "@/data/products.json";
import Image from "next/image";

export  default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
   <div className="my-10 py-7 px-4  mx-auto bg-amber-100 rounded-xl shadow">
  
  {/* Image */}
  <div className="relative w-full h-80 mb-6">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover rounded-xl"
    />
  </div>

  {/* Info */}
  <h1 className="text-2xl font-bold text-amber-800">
    {product.name}
  </h1>

  <p className="text-gray-500 mt-1">{product.brand}</p>

  <p className="mt-3 text-gray-700">
    {product.description}
  </p>

  <p className="mt-4 text-lg font-bold text-amber-700">
    ৳{product.price}
  </p>

  <p className="mt-2 text-amber-700">
    ⭐ {product.rating} / 5
  </p>

</div>
  );
}