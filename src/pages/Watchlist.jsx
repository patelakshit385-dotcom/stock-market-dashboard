import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="watch-header">
        <div>
          <p className="label">MY PORTFOLIO</p>
          <h1>⭐ My Watchlist</h1>
          <p className="sub">
            Keep track of stocks you are interested in.
          </p>
        </div>

        <div className="count">
          <strong>{watchlist.length}</strong>
          <span>Saved Stocks</span>
        </div>
      </div>

      {/* Empty State */}
      {watchlist.length === 0 ? (
        <div className="empty">
          <div>⭐</div>
          <h2>Your watchlist is empty</h2>
          <p>
            Add stocks from the Stocks page to monitor them here.
          </p>

          <Link to="/stocks">Explore Stocks →</Link>
        </div>
      ) : (
        <div className="watch-grid">
          {watchlist.map((stock) => {
            const positive = stock.change.startsWith("+");

            return (
              <div className="stock-card" key={stock.id}>
                {/* Company */}
                <div className="company">
                  <img src={stock.logo} alt={stock.company} />

                  <div>
                    <h2>{stock.symbol}</h2>
                    <p>{stock.company}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="price-row">
                  <strong>${stock.price.toFixed(2)}</strong>

                  <span className={positive ? "green" : "red"}>
                    {positive ? "▲" : "▼"} {stock.change}
                  </span>
                </div>

                {/* Info */}
                <div className="info">
                  <div>
                    <small>Sector</small>
                    <strong>{stock.sector}</strong>
                  </div>

                  <div>
                    <small>Market Cap</small>
                    <strong>${stock.marketCap}</strong>
                  </div>
                </div>

                {/* Buttons */}
                <div className="buttons">
                  <Link to={`/stocks/${stock.symbol}`}>
                    View Details
                  </Link>

                  <button
                    onClick={() => removeFromWatchlist(stock.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="notice">
        ℹ️ Watchlist data is saved locally in your browser for
        this demo project.
      </div>

      <style>{`
        .watch-header {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          flex-wrap:wrap;
          margin-bottom:25px;
        }

        .label {
          margin:0;
          color:#2563eb;
          font-size:12px;
          font-weight:700;
          letter-spacing:1px;
        }

        h1 {
          margin:5px 0;
          color:#111827;
        }

        .sub {
          margin:0;
          color:#6b7280;
        }

        .count {
          background:#111827;
          color:white;
          padding:15px 20px;
          border-radius:12px;
          text-align:center;
          min-width:110px;
        }

        .count strong {
          display:block;
          font-size:25px;
        }

        .count span {
          color:#cbd5e1;
          font-size:12px;
        }

        .watch-grid {
          display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(280px,1fr));
          gap:18px;
        }

        .stock-card {
          background:white;
          border:1px solid #e5e7eb;
          border-radius:14px;
          padding:20px;
          box-shadow:0 5px 15px rgba(15,23,42,.05);
        }

        .company {
          display:flex;
          align-items:center;
          gap:12px;
        }

        .company img {
          width:48px;
          height:48px;
          object-fit:contain;
          background:#f8fafc;
          border-radius:10px;
          padding:6px;
        }

        .company h2 {
          margin:0;
          font-size:19px;
        }

        .company p {
          margin:3px 0 0;
          color:#6b7280;
          font-size:13px;
        }

        .price-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin:20px 0;
        }

        .price-row strong {
          font-size:24px;
        }

        .green {
          color:#16a34a;
          font-weight:700;
        }

        .red {
          color:#dc2626;
          font-weight:700;
        }

        .info {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
          margin-bottom:18px;
        }

        .info div {
          background:#f8fafc;
          padding:10px;
          border-radius:8px;
        }

        .info small {
          display:block;
          color:#6b7280;
          font-size:11px;
        }

        .info strong {
          display:block;
          margin-top:4px;
          font-size:13px;
          color:#374151;
        }

        .buttons {
          display:flex;
          gap:8px;
        }

        .buttons a,
        .buttons button {
          flex:1;
          padding:10px;
          border-radius:8px;
          text-align:center;
          font-size:13px;
          font-weight:600;
          cursor:pointer;
        }

        .buttons a {
          background:#2563eb;
          color:white;
          text-decoration:none;
        }

        .buttons button {
          background:#fff;
          color:#dc2626;
          border:1px solid #fecaca;
        }

        .empty {
          background:white;
          border:1px solid #e5e7eb;
          border-radius:16px;
          padding:55px 20px;
          text-align:center;
        }

        .empty div {
          font-size:42px;
        }

        .empty h2 {
          margin:12px 0 5px;
        }

        .empty p {
          color:#6b7280;
        }

        .empty a {
          display:inline-block;
          margin-top:15px;
          padding:10px 16px;
          background:#2563eb;
          color:white;
          text-decoration:none;
          border-radius:8px;
          font-weight:600;
        }

        .notice {
          margin-top:20px;
          padding:13px 15px;
          background:#eff6ff;
          border:1px solid #bfdbfe;
          color:#1e40af;
          border-radius:10px;
          font-size:12px;
        }

        @media(max-width:600px) {
          .count {
            width:100%;
          }

          .buttons {
            flex-direction:column;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}

export default Watchlist;