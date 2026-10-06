import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        <main>{children}</main>
      </div>

      <style>{`
        .layout {
          display: flex;
          min-height: 100vh;
        }

        .content {
          flex: 1;
          min-width: 0;
        }

        main {
          padding: 20px;
          background: #f4f7fb;
          min-height: calc(100vh - 70px);
          box-sizing: border-box;
        }

        @media (max-width: 700px) {
          main {
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default DashboardLayout;