function Filter({ sector, setSector, sortBy, setSortBy }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {/* Sector Filter */}
      <select
        value={sector}
        onChange={(e) => setSector(e.target.value)}
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          background: "#ffffff",
          color: "#374151",
          fontSize: "14px",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option value="All">All Sectors</option>
        <option value="Technology">Technology</option>
        <option value="E-Commerce">E-Commerce</option>
        <option value="Automobile">Automobile</option>
        <option value="Semiconductors">Semiconductors</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Retail">Retail</option>
        <option value="Financial Services">Financial Services</option>
        <option value="Consumer Goods">Consumer Goods</option>
        <option value="Consumer Services">Consumer Services</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          background: "#ffffff",
          color: "#374151",
          fontSize: "14px",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <option value="default">Sort: Default</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="gainHigh">Top Gainers</option>
        <option value="gainLow">Top Losers</option>
        <option value="name">Company Name</option>
      </select>
    </div>
  );
}

export default Filter;