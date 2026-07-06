import { Link } from "react-router-dom";

function StockCard({ stock }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{stock.symbol}</h2>

      <p>{stock.company}</p>

      <h3>${stock.price}</h3>

      <p
        style={{
          color: stock.change.startsWith("+") ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {stock.change}
      </p>

      <p>{stock.sector}</p>

      <Link
        to={`/stocks/${stock.symbol}`}
        style={{
          display: "inline-block",
          marginTop: "15px",
          textDecoration: "none",
          background: "#2563eb",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default StockCard;