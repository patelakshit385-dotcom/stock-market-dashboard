import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import stocks from "../data/stocks";
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Stocks() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All");

  const filteredStocks = stocks.filter((stock) => {
    const matchesSearch =
      stock.company.toLowerCase().includes(search.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(search.toLowerCase());

    const matchesSector =
      sector === "All" || stock.sector === sector;

    return matchesSearch && matchesSector;
  });

  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: "20px" }}>📈 Stock Listings</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <SearchBar search={search} setSearch={setSearch} />
        <Filter sector={sector} setSector={setSector} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredStocks.map((stock) => (
          <StockCard key={stock.id} stock={stock} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Stocks;