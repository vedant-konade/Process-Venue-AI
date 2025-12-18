export default function Sidebar() {
    return (
    <aside className="m-4 rounded-2xl bg-white/5 backdrop-blur-xl
                border border-white/10 p-6 flex flex-col gap-6">
        <h1 className="font-semibold text-lg tracking-tight">
    Process Venue <span className="text-indigo-600">AI</span>
</h1>


    <input
  className="w-full rounded-md border border-[var(--border-soft)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
  placeholder="Search sessions..."
/>


<div className="space-y-1">
  <p className="text-xs text-gray-500 uppercase tracking-wide">Recent</p>
  {["How to get healthy", "React component fix", "TLS error"].map(item => (
    <button
      key={item}
      className="w-full text-left rounded-md px-2 py-1 text-sm hover:bg-gray-100"
    >
      {item}
    </button>
  ))}
</div>

    </aside>
  );
}
