function Dashboard() {
  return (
    <>
      <h1>📊 Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card title="Products" value="194" color="#3b82f6" />
        <Card title="Users" value="25" color="#10b981" />
        <Card title="Orders" value="61" color="#f59e0b" />
        <Card title="Revenue" value="₹1,24,500" color="#ef4444" />
      </div>
    </>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default Dashboard;