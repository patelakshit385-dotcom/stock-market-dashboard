import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";
import DashboardLayout from "../layout/DashboardLayout";
import MarketChart from "../components/MarketChart";

function Dashboard() {
  const { user, logout } = useAuth();
  const { watchlist } = useWatchlist();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <DashboardLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h1>📈 Stock Market Dashboard</h1>
          <p>Welcome, {user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#dc3545",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Nifty 50</h3>
          <h2>25,450</h2>
          <p style={{ color: "green" }}>+0.82%</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Sensex</h3>
          <h2>83,200</h2>
          <p style={{ color: "green" }}>+0.65%</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>NASDAQ</h3>
          <h2>19,850</h2>
          <p style={{ color: "red" }}>-0.25%</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Watchlist</h3>
          <h2>{watchlist.length}</h2>
          <p>Saved Stocks</p>
        </div>
      </div>

      <MarketChart />
    </DashboardLayout>
  );
}

export default Dashboard;