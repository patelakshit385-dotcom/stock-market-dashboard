import CompanyLogo from "../components/CompanyLogo";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { useWatchlist } from "../context/WatchlistContext";
import stocks from "../data/stocks";

function StockDetails() {
  const { symbol } = useParams();
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useWatchlist();

  const [message, setMessage] = useState("");

  const stock = stocks.find((item) => item.symbol === symbol);

  if (!stock) {
    return (
      <DashboardLayout>
        <h2>Stock Not Found</h2>
        <Link to="/stocks">← Back to Stocks</Link>
      </DashboardLayout>
    );
  }

  const saved = watchlist.some((item) => item.id === stock.id);
  const positive = stock.change.startsWith("+");

  const notify = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  };

  const toggleWatchlist = () => {
    if (saved) {
      removeFromWatchlist(stock.id);
      notify(`${stock.symbol} removed from Watchlist.`);
    } else {
      addToWatchlist(stock);
      notify(`${stock.symbol} added to Watchlist.`);
    }
  };

  return (
    <DashboardLayout>
      <Link to="/stocks">← Back to Stocks</Link>

      {/* Header */}
      <div style={card}>
        <div className="stock-header">
          <div className="company">
            <img src={stock.logo} alt={stock.company} />
            <div>
              <h1>{stock.symbol}</h1>
              <p>{stock.company}</p>
              <span>{stock.sector}</span>
            </div>
          </div>

          <div className="price">
            <small>Current Price</small>
            <h2>${stock.price.toFixed(2)}</h2>
            <strong className={positive ? "green" : "red"}>
              {positive ? "▲" : "▼"} {stock.change}
            </strong>
          </div>
        </div>

        <div className="actions">
          <button onClick={toggleWatchlist}>
            {saved ? "★ Remove Watchlist" : "☆ Add Watchlist"}
          </button>

          <button
            className="buy"
            onClick={() => notify("Demo Buy order simulated.")}
          >
            Buy Demo
          </button>

          <button
            className="sell"
            onClick={() => notify("Demo Sell order simulated.")}
          >
            Sell Demo
          </button>
        </div>

        {message && <p className="message">ℹ️ {message}</p>}
      </div>

      {/* Statistics */}
      <div className="stats">
        <Info title="Market Cap" value={`$${stock.marketCap}`} />
        <Info title="P/E Ratio" value={stock.peRatio} />
        <Info title="52W High" value={`$${stock.high52}`} />
        <Info title="52W Low" value={`$${stock.low52}`} />
      </div>

      {/* Performance */}
      <div style={card}>
        <h2>📈 Price Performance</h2>

        <div className="bars">
          {[94, 97, 95, 99, 100].map((height, i) => (
            <div key={i}>
              <div
                className="bar"
                style={{ height: `${height * 2}px` }}
              />
              <small>
                {["Mon", "Tue", "Wed", "Thu", "Fri"][i]}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bottom">
        <div style={card}>
          <h2>About Company</h2>
          <p>{stock.description}</p>
        </div>

        <div style={darkCard}>
          <h2>Stock Snapshot</h2>
          <p>Symbol: {stock.symbol}</p>
          <p>Sector: {stock.sector}</p>
          <p>Price: ${stock.price.toFixed(2)}</p>
          <p>Change: {stock.change}</p>
        </div>
      </div>

      <div className="notice">
        ⚠️ Demo only. All market data is simulated. Buy and Sell
        buttons do not execute real transactions.
      </div>

      <style>{`
        .stock-header {
          display:flex;
          justify-content:space-between;
          gap:20px;
          flex-wrap:wrap;
        }

        .company {
          display:flex;
          gap:15px;
          align-items:center;
        }

        .company img {
          width:65px;
          height:65px;
          object-fit:contain;
          background:#f8fafc;
          border-radius:14px;
          padding:8px;
        }

        h1, h2, p {
          margin-top:0;
        }

        .company h1 {
          margin-bottom:4px;
        }

        .company p {
          color:#6b7280;
          margin-bottom:7px;
        }

        .company span {
          background:#eff6ff;
          color:#2563eb;
          padding:5px 8px;
          border-radius:6px;
          font-size:12px;
        }

        .price {
          text-align:right;
        }

        .price h2 {
          margin:5px 0;
          font-size:30px;
        }

        .green { color:#16a34a; }
        .red { color:#dc2626; }

        .actions {
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top:20px;
        }

        button {
          padding:10px 16px;
          border:1px solid #2563eb;
          border-radius:8px;
          background:#2563eb;
          color:white;
          cursor:pointer;
          font-weight:600;
        }

        .buy { background:#16a34a; border-color:#16a34a; }
        .sell { background:#dc2626; border-color:#dc2626; }

        .message {
          margin:15px 0 0;
          padding:10px;
          background:#eff6ff;
          color:#1e40af;
          border-radius:8px;
        }

        .stats {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
          gap:15px;
          margin:20px 0;
        }

        .info {
          background:white;
          border:1px solid #e5e7eb;
          border-radius:12px;
          padding:18px;
        }

        .info small {
          color:#6b7280;
        }

        .info h3 {
          margin:7px 0 0;
        }

        .bars {
  height:190px;
  margin-top:25px;
  display:flex;
  align-items:end;
  justify-content:space-around;
  padding:10px;
}

.bar {
  width:45px;
  max-height:160px;
  background:#2563eb;
  border-radius:7px 7px 0 0;
}

        .bars small {
          display:block;
          margin-top:7px;
          color:#6b7280;
        }

        .bottom {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
          margin-top:20px;
        }

        .bottom p {
          color:#6b7280;
          line-height:1.7;
        }

        .notice {
          margin-top:20px;
          padding:15px;
          background:#fff7ed;
          border:1px solid #fed7aa;
          color:#9a3412;
          border-radius:10px;
          font-size:13px;
        }

        @media(max-width:700px) {
          .price {
            text-align:left;
          }

          .bottom {
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}

function Info({ title, value }) {
  return (
    <div className="info">
      <small>{title}</small>
      <h3>{value}</h3>
    </div>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "20px",
  marginTop: "20px",
};

const darkCard = {
  ...card,
  background: "#111827",
  color: "#fff",
};

export default StockDetails;