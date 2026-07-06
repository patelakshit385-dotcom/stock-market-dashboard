function Filter({ sector, setSector }) {
  return (
    <select
      value={sector}
      onChange={(e) => setSector(e.target.value)}
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "25px",
        marginLeft: "15px",
      }}
    >
      <option value="All">All Sectors</option>
      <option value="Technology">Technology</option>
      <option value="E-Commerce">E-Commerce</option>
      <option value="Automobile">Automobile</option>
      <option value="Semiconductors">Semiconductors</option>
    </select>
  );
}

export default Filter;