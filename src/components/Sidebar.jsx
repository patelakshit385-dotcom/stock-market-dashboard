import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2>Dashboard</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/stocks" style={{ color: "#fff", textDecoration: "none" }}>
          Stocks
        </Link>

        <Link
          to="/watchlist"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Watchlist
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;