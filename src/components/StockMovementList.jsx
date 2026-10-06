function StockMovementList({ stocks, title, subtitle, type }) {
  const isGainer = type === "gainer";

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "19px",
            color: "#111827",
          }}
        >
          {isGainer ? "🚀" : "📉"} {title}
        </h2>

        <p
          style={{
            margin: "4px 0 0",
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          {subtitle}
        </p>
      </div>

      {stocks.map((stock) => (
        <div
          key={stock.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "12px 0",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minWidth: 0,
            }}
          >
            <img
              src={stock.logo}
              alt={`${stock.company} logo`}
              style={{
                width: "34px",
                height: "34px",
                objectFit: "contain",
                borderRadius: "8px",
                background: "#f8fafc",
              }}
            />

            <div style={{ minWidth: 0 }}>
              <strong
                style={{
                  display: "block",
                  color: "#111827",
                }}
              >
                {stock.symbol}
              </strong>

              <span
                style={{
                  display: "block",
                  color: "#6b7280",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "150px",
                }}
              >
                {stock.company}
              </span>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <strong
              style={{
                display: "block",
                color: "#111827",
                fontSize: "14px",
              }}
            >
              ${stock.price.toFixed(2)}
            </strong>

            <span
              style={{
                color: isGainer ? "#16a34a" : "#dc2626",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              {isGainer ? "▲" : "▼"} {stock.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StockMovementList;