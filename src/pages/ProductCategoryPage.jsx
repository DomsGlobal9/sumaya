import Filters from '../components/ProductCategory/Filters.jsx';
import ProductGrid from '../components/ProductCategory/ProductGrid.jsx';
import React from 'react';
export default function ProductCategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* <h1 className="text-3xl font-semibold mb-6">Indian Wear</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Filters />
        </div>
        <div className="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
