import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/stocks", icon: "📈", label: "Stocks" },
    { path: "/watchlist", icon: "⭐", label: "Watchlist" },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">📈</div>

        <div>
          <strong>StockPro</strong>
          <small>Market Dashboard</small>
        </div>
      </div>

      <p className="menu-title">MENU</p>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>🎓</span>
        <div>
          <strong>Student Demo</strong>
          <small>Educational Project</small>
        </div>
      </div>

      <style>{`
        .sidebar {
          width:220px;
          min-width:220px;
          background:#111827;
          color:white;
          padding:22px 15px;
          box-sizing:border-box;
          display:flex;
          flex-direction:column;
        }

        .brand {
          display:flex;
          align-items:center;
          gap:10px;
          padding:0 8px 25px;
          border-bottom:1px solid #374151;
        }

        .logo {
          width:38px;
          height:38px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#2563eb;
          border-radius:10px;
        }

        .brand strong,
        .brand small {
          display:block;
        }

        .brand strong {
          font-size:16px;
        }

        .brand small {
          color:#9ca3af;
          font-size:10px;
          margin-top:2px;
        }

        .menu-title {
          color:#6b7280;
          font-size:10px;
          font-weight:700;
          letter-spacing:1px;
          margin:25px 8px 10px;
        }

        nav {
          display:flex;
          flex-direction:column;
          gap:5px;
        }

        .nav-item {
          display:flex;
          align-items:center;
          gap:12px;
          padding:11px 12px;
          border-radius:8px;
          color:#d1d5db;
          text-decoration:none;
          font-size:14px;
          transition:.2s;
        }

        .nav-item:hover {
          background:#1f2937;
          color:white;
        }

        .nav-item.active {
          background:#2563eb;
          color:white;
          font-weight:600;
        }

        .sidebar-footer {
          margin-top:auto;
          padding:13px 8px;
          border-top:1px solid #374151;
          display:flex;
          align-items:center;
          gap:9px;
        }

        .sidebar-footer strong,
        .sidebar-footer small {
          display:block;
        }

        .sidebar-footer strong {
          font-size:11px;
        }

        .sidebar-footer small {
          color:#9ca3af;
          font-size:9px;
          margin-top:2px;
        }

        @media(max-width:700px) {
          .sidebar {
            width:70px;
            min-width:70px;
            padding:20px 10px;
          }

          .brand div:not(.logo),
          .menu-title,
          .nav-item {
            font-size:0;
          }

          .brand {
            justify-content:center;
            padding:0 0 20px;
          }

          .nav-item {
            justify-content:center;
            padding:12px;
          }

          .nav-item span {
            font-size:18px;
          }

          .sidebar-footer {
            justify-content:center;
          }

          .sidebar-footer div {
            display:none;
          }
        }
      `}</style>
    </aside>
  );
}

export default Sidebar;