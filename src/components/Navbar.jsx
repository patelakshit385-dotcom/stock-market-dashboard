import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav
      style={{
        height: "70px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>📈 Stock Dashboard</h2>

      <span>{user?.email}</span>
    </nav>
  );
}

export default Navbar;