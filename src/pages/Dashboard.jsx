import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";

import DashboardLayout from "../layout/DashboardLayout";
import MarketChart from "../components/MarketChart";
import MarketIndexCard from "../components/MarketIndexCard";
import SummaryCard from "../components/SummaryCard";
import StockMovementList from "../components/StockMovementList";

import stocks from "../data/stocks";

function Dashboard() {
  const { user, logout } = useAuth();
  const { watchlist } = useWatchlist();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const gainers = useMemo(() => {
    return [...stocks]
      .filter((stock) => parseFloat(stock.change) > 0)
      .sort(
        (a, b) =>
          parseFloat(b.change) - parseFloat(a.change)
      )
      .slice(0, 5);
  }, []);

  const losers = useMemo(() => {
    return [...stocks]
      .filter((stock) => parseFloat(stock.change) < 0)
      .sort(
        (a, b) =>
          parseFloat(a.change) - parseFloat(b.change)
      )
      .slice(0, 5);
  }, []);

  const marketIndices = [
    {
      name: "NIFTY 50",
      value: "25,450.00",
      change: "+0.82%",
      positive: true,
    },
    {
      name: "SENSEX",
      value: "83,200.00",
      change: "+0.65%",
      positive: true,
    },
    {
      name: "BANK NIFTY",
      value: "57,890.00",
      change: "+1.12%",
      positive: true,
    },
    {
      name: "NASDAQ",
      value: "19,850.00",
      change: "-0.25%",
      positive: false,
    },
    {
      name: "S&P 500",
      value: "6,720.00",
      change: "+0.31%",
      positive: true,
    },
    {
      name: "DOW JONES",
      value: "46,180.00",
      change: "+0.18%",
      positive: true,
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "28px",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            }}
          >
            Market Overview
          </p>

          <h1
            style={{
              margin: "6px 0 8px",
              fontSize: "32px",
              color: "#111827",
            }}
          >
            Welcome back 👋
          </h1>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            {user?.email
              ? `Logged in as ${user.email}`
              : "Track markets, explore stocks and monitor your watchlist."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#ecfdf5",
              border: "1px solid #bbf7d0",
              borderRadius: "10px",
              padding: "9px 13px",
              color: "#15803d",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            ● Market Open
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: "10px 17px",
              border: "none",
              borderRadius: "9px",
              background: "#111827",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Market Indices */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        {marketIndices.map((index) => (
          <MarketIndexCard
            key={index.name}
            index={index}
          />
        ))}
      </div>

      {/* Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        <SummaryCard
          title="Listed Companies"
          value={stocks.length}
          description="Companies available in demo"
          dark
        />

        <SummaryCard
          title="Watchlist"
          value={watchlist.length}
          description="Saved stocks"
        />

        <SummaryCard
          title="Market Gainers"
          value={gainers.length}
          description="Positive performers"
          valueColor="#16a34a"
        />

        <SummaryCard
          title="Market Losers"
          value={losers.length}
          description="Negative performers"
          valueColor="#dc2626"
        />
      </div>

      {/* Market Chart */}
      <MarketChart />

      {/* Gainers and Losers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "28px",
        }}
      >
        <StockMovementList
          stocks={gainers}
          title="Top Gainers"
          subtitle="Best performing stocks"
          type="gainer"
        />

        <StockMovementList
          stocks={losers}
          title="Top Losers"
          subtitle="Stocks with negative movement"
          type="loser"
        />
      </div>

      {/* Transparency */}
      <div
        style={{
          marginTop: "28px",
          padding: "16px 18px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "12px",
          color: "#1e40af",
          fontSize: "13px",
          lineHeight: "1.7",
        }}
      >
        <strong>ℹ️ Demo & Transparency:</strong>{" "}
        Market prices, index values and statistics displayed
        in this project are mock data created for educational
        demonstration purposes. This application does not
        connect to a live stock market and does not execute
        real financial transactions.
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;