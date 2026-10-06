function MarketIndexCard({ index }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "18px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {index.name}
        </p>

        <span
          style={{
            fontSize: "11px",
            background: index.positive ? "#dcfce7" : "#fee2e2",
            color: index.positive ? "#15803d" : "#dc2626",
            padding: "4px 7px",
            borderRadius: "6px",
            fontWeight: "700",
          }}
        >
          {index.positive ? "UP" : "DOWN"}
        </span>
      </div>

      <h2
        style={{
          margin: "12px 0 7px",
          color: "#111827",
          fontSize: "24px",
        }}
      >
        {index.value}
      </h2>

      <p
        style={{
          margin: 0,
          color: index.positive ? "#16a34a" : "#dc2626",
          fontWeight: "700",
          fontSize: "14px",
        }}
      >
        {index.positive ? "▲" : "▼"} {index.change}
      </p>
    </div>
  );
}

export default MarketIndexCard;