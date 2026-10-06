import { useMemo, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import stocks from "../data/stocks";
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Stocks() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredStocks = useMemo(() => {
    let result = stocks.filter((stock) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        stock.company.toLowerCase().includes(searchText) ||
        stock.symbol.toLowerCase().includes(searchText);

      const matchesSector =
        sector === "All" || stock.sector === sector;

      return matchesSearch && matchesSector;
    });

    if (sortBy === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "gainHigh") {
      result.sort(
        (a, b) =>
          parseFloat(b.change) - parseFloat(a.change)
      );
    }

    if (sortBy === "gainLow") {
      result.sort(
        (a, b) =>
          parseFloat(a.change) - parseFloat(b.change)
      );
    }

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
    }

    return result;
  }, [search, sector, sortBy]);

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div
        style={{
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#2563eb",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}
        >
          Market Explorer
        </p>

        <h1
          style={{
            margin: "6px 0 8px",
            fontSize: "32px",
            color: "#111827",
          }}
        >
          Stock Market
        </h1>

        <p
          style={{
            margin: 0,
            color: "#6b7280",
          }}
        >
          Explore companies, prices, market performance and
          stock information.
        </p>
      </div>

      {/* Search + Filters */}
      <div
        style={{
          background: "#ffffff",
          padding: "18px",
          borderRadius: "14px",
          border: "1px solid #e5e7eb",
          marginBottom: "25px",
          boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 280px",
            }}
          >
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <Filter
            sector={sector}
            setSector={setSector}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>

      {/* Result Information */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "20px",
              color: "#111827",
            }}
          >
            Listed Stocks
          </h2>

          <p
            style={{
              margin: "4px 0 0",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Showing {filteredStocks.length} of {stocks.length}{" "}
            companies
          </p>
        </div>

        {search || sector !== "All" || sortBy !== "default" ? (
          <button
            onClick={() => {
              setSearch("");
              setSector("All");
              setSortBy("default");
            }}
            style={{
              border: "1px solid #d1d5db",
              background: "#ffffff",
              color: "#374151",
              padding: "9px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            Reset Filters
          </button>
        ) : null}
      </div>

      {/* Stock Cards */}
      {filteredStocks.length === 0 ? (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "50px 20px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ fontSize: "42px", marginBottom: "12px" }}>
            🔎
          </div>

          <h2
            style={{
              margin: 0,
              color: "#111827",
            }}
          >
            No stocks found
          </h2>

          <p
            style={{
              color: "#6b7280",
              marginTop: "8px",
            }}
          >
            Try another company name, symbol or sector.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredStocks.map((stock) => (
            <StockCard
              key={stock.id}
              stock={stock}
            />
          ))}
        </div>
      )}

      {/* Transparency */}
      <div
        style={{
          marginTop: "30px",
          padding: "14px 16px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "10px",
          color: "#1e40af",
          fontSize: "13px",
          lineHeight: "1.6",
        }}
      >
        <strong>Demo Data:</strong> Market prices and statistics
        shown in this application are mock data created for
        educational demonstration purposes.
      </div>
    </DashboardLayout>
  );
}

export default Stocks;