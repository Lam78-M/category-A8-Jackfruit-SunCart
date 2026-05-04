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
   <div className="my-10 py-7 px-5 mx-auto bg-amber-100 rounded-xl shadow-lg max-w-2xl">

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
  <h1 className="text-3xl font-bold text-amber-800">
    {product.name}
  </h1>

  <p className="text-gray-600 mt-1">
    Brand: <span className="font-medium">{product.brand}</span>
  </p>

  {/* Category + Stock */}
  <div className="flex flex-wrap gap-3 mt-3">

    <span className="px-3 py-1 text-sm bg-amber-200 text-amber-800 rounded-full font-medium">
      📦 {product.category}
    </span>

    <span className={`px-3 py-1 text-sm rounded-full font-medium 
      ${product.stock > 0 
        ? "bg-green-200 text-green-800" 
        : "bg-red-200 text-red-700"
      }`}
    >
      {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
    </span>

  </div>

  <p className="mt-4 text-gray-700 leading-relaxed">
    {product.description}
  </p>

  <p className="mt-4 text-xl font-bold text-amber-700">
    ৳{product.price}
  </p>

  <p className="mt-2 text-amber-700">
    ⭐ {product.rating} / 5
  </p>

</div>
  );
}