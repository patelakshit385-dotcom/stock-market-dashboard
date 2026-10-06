function CompanyLogo({ logo, size = 40 }) {
  if (!logo) return null;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        borderRadius: "10px",
        padding: "7px",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        style={{
          width: "100%",
          height: "100%",
          fill: `#${logo.hex}`,
        }}
      >
        <path d={logo.path} />
      </svg>
    </div>
  );
}

export default CompanyLogo;