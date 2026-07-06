import { useParams } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import stocks from "../data/stocks";
import { useWatchlist } from "../context/WatchlistContext";

function StockDetails() {
  const { symbol } = useParams();
  const { addToWatchlist } = useWatchlist();

  const stock = stocks.find((item) => item.symbol === symbol);

  if (!stock) {
    return (
      <DashboardLayout>
        <h2>Stock Not Found</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
          maxWidth: "700px",
        }}
      >
        <h1>{stock.company}</h1>

        <h2 style={{ marginTop: "15px" }}>
          Symbol: {stock.symbol}
        </h2>

        <h2 style={{ marginTop: "15px" }}>
          Price: ${stock.price}
        </h2>

        <h3
          style={{
            marginTop: "15px",
            color: stock.change.startsWith("+") ? "green" : "red",
          }}
        >
          Daily Change: {stock.change}
        </h3>

        <p style={{ marginTop: "15px" }}>
          <strong>Sector:</strong> {stock.sector}
        </p>

        <p
          style={{
            marginTop: "25px",
            lineHeight: "1.7",
          }}
        >
          {stock.company} is one of the leading companies in the{" "}
          {stock.sector} sector. This information is currently
          displayed using mock data and will be replaced with
          real API data in future updates.
        </p>

        <button
          onClick={() => {
            addToWatchlist(stock);
            alert("Added to Watchlist!");
          }}
          style={{
            marginTop: "30px",
            padding: "12px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ⭐ Add to Watchlist
        </button>
      </div>
    </DashboardLayout>
  );
}

export default StockDetails;