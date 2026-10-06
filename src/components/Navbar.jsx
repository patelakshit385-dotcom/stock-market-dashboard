import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="topbar">
      <div>
        <h2>📈 Stock Market Dashboard</h2>
        <p>Market insights & portfolio tracking</p>
      </div>

      <div className="user-area">
        <span className="market-status">● Market Open</span>

        <div className="user">
          <div className="avatar">👤</div>
          <div>
            <strong>{user?.email || "User"}</strong>
            <small>Demo Account</small>
          </div>
        </div>
      </div>

      <style>{`
        .topbar {
          min-height:70px;
          background:#fff;
          border-bottom:1px solid #e5e7eb;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:0 25px;
        }

        .topbar h2 {
          margin:0;
          color:#111827;
          font-size:19px;
        }

        .topbar p {
          margin:3px 0 0;
          color:#6b7280;
          font-size:11px;
        }

        .user-area {
          display:flex;
          align-items:center;
          gap:20px;
        }

        .market-status {
          padding:7px 10px;
          border-radius:7px;
          background:#ecfdf5;
          color:#15803d;
          font-size:12px;
          font-weight:700;
        }

        .user {
          display:flex;
          align-items:center;
          gap:9px;
        }

        .avatar {
          width:34px;
          height:34px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#eff6ff;
          border-radius:50%;
        }

        .user strong,
        .user small {
          display:block;
        }

        .user strong {
          color:#111827;
          font-size:12px;
          max-width:180px;
          overflow:hidden;
          text-overflow:ellipsis;
        }

        .user small {
          color:#9ca3af;
          font-size:10px;
          margin-top:2px;
        }

        @media(max-width:700px) {
          .topbar {
            padding:0 15px;
          }

          .topbar p,
          .market-status {
            display:none;
          }

          .topbar h2 {
            font-size:16px;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;