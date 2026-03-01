export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <a
          href="/products/new"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
        >
          Add Product
        </a>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <p className="text-gray-500">Product list will load from API.</p>
      </div>
    </div>
  );
}
