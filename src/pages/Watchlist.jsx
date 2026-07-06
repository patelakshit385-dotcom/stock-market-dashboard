import DashboardLayout from "../layout/DashboardLayout";
import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: "25px" }}>⭐ My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No stocks added.</p>
      ) : (
        watchlist.map((stock) => (
          <div
            key={stock.id}
            style={{
              background: "#fff",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>{stock.company}</h2>

            <p>{stock.symbol}</p>

            <p>${stock.price}</p>

            <button
              onClick={() => removeFromWatchlist(stock.id)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                background: "crimson",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </DashboardLayout>
  );
}

export default Watchlist;