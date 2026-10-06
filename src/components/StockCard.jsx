import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

function StockCard({ stock }) {
  const isPositive = stock.change.startsWith("+");

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.06)",
      }}
    >
      {/* Company Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "18px",
        }}
      >
        <CompanyLogo logo={stock.logo} size={52} />

        <div style={{ minWidth: 0 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "20px",
              color: "#111827",
            }}
          >
            {stock.symbol}
          </h2>

          <p
            style={{
              margin: "4px 0 0",
              color: "#6b7280",
              fontSize: "14px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {stock.company}
          </p>
        </div>
      </div>

      {/* Price */}
      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          Current Price
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "5px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "27px",
              color: "#111827",
            }}
          >
            ${stock.price.toFixed(2)}
          </h2>

          <span
            style={{
              background: isPositive ? "#dcfce7" : "#fee2e2",
              color: isPositive ? "#15803d" : "#dc2626",
              padding: "5px 9px",
              borderRadius: "7px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            {isPositive ? "▲" : "▼"} {stock.change}
          </span>
        </div>
      </div>

      {/* Stock Information */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            padding: "10px",
            borderRadius: "9px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            Sector
          </p>

          <p
            style={{
              margin: "4px 0 0",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
            }}
          >
            {stock.sector}
          </p>
        </div>

        <div
          style={{
            background: "#f8fafc",
            padding: "10px",
            borderRadius: "9px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            Market Cap
          </p>

          <p
            style={{
              margin: "4px 0 0",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
            }}
          >
            ${stock.marketCap}
          </p>
        </div>
      </div>

      {/* View Details */}
      <Link
        to={`/stocks/${stock.symbol}`}
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
          textDecoration: "none",
          background: "#2563eb",
          color: "#ffffff",
          padding: "11px 15px",
          borderRadius: "9px",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        View Stock Details →
      </Link>
    </div>
  );
}

export default StockCard;