export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="card bg-base-100 text-base-content shadow-xl p-6 max-w-sm">
        <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
        <div className="space-y-2">
          <p>
            <span className="font-bold">9 / 100</span> vocab items studied
          </p>
          <p>
            <span className="font-bold">2 hours</span> of studying
          </p>
        </div>
      </div>
    </div>
  );
} 