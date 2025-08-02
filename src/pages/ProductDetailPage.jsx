import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductDetails/ProductReviews";
import ProductListSection from "../components/ProductDetails/ProductListSection";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const foundProduct = products.find(
          (p) => String(p.id) === String(id)
        );
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) return <div className="p-4 text-center">Loading...</div>;
  if (!product) return <div className="p-4 text-red-600">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <ProductDetails product={product} />

      <div className="mt-16">
        <ProductReviews productId={id} />
      </div>

      <ProductListSection
        title="Related Dresses and More by Bonita Boutique"
        products={products.slice(0, 4)}
      />

      <ProductListSection
        title="You may also Like"
        products={products.slice(4, 8)}
      />
    </div>
  );
}