export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-3xl font-bold">&mdash;</p>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500">Active Providers</p>
          <p className="text-3xl font-bold">&mdash;</p>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500">Waitlist Entries</p>
          <p className="text-3xl font-bold">&mdash;</p>
        </div>
      </div>
    </div>
  );
}
