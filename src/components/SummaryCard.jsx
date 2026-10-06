function SummaryCard({
  title,
  value,
  description,
  valueColor = "#111827",
  dark = false,
}) {
  return (
    <div
      style={{
        background: dark ? "#111827" : "#ffffff",
        color: dark ? "#ffffff" : "#111827",
        border: dark ? "none" : "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <p
        style={{
          margin: 0,
          color: dark ? "#cbd5e1" : "#6b7280",
          fontSize: "13px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          margin: "8px 0 0",
          fontSize: "30px",
          color: dark ? "#ffffff" : valueColor,
        }}
      >
        {value}
      </h2>

      <p
        style={{
          margin: "5px 0 0",
          color: dark ? "#94a3b8" : "#6b7280",
          fontSize: "13px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default SummaryCard;