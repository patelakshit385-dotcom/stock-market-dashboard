import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <main
          style={{
            padding: "20px",
            background: "#f4f7fb",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;