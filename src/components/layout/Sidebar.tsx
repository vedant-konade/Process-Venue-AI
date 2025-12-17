export default function Sidebar() {
  return (
    <aside className="border-r bg-white p-4">
      <h1 className="font-semibold text-lg mb-4">Process Venue AI</h1>

      <input
        className="w-full mb-4 rounded border px-3 py-2 text-sm"
        placeholder="Search sessions..."
      />

      <div className="text-sm text-gray-600 space-y-2">
        <p className="font-medium">Recent</p>
        <p>How to get healthy</p>
        <p>React component quick fix</p>
        <p>Fix SSL/TLS error</p>
      </div>
    </aside>
  );
}
