import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    login(email);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* Left Section */}
        <div className="intro">
          <div className="brand">
            <span>📈</span>
            <strong>StockPro</strong>
          </div>

          <h1>
            Track.<br />
            Analyze.<br />
            <span>Learn.</span>
          </h1>

          <p>
            Explore stock market data, monitor your favorite companies,
            and understand market movements through an interactive dashboard.
          </p>

          <div className="features">
            <div>✓ Stock Market Overview</div>
            <div>✓ Company Analysis</div>
            <div>✓ Personal Watchlist</div>
          </div>

          <div className="education">
            🎓 Educational Project • Demo Data
          </div>
        </div>

        {/* Login Card */}
        <form onSubmit={handleLogin} className="login-card">
          <div className="card-icon">📊</div>

          <h2>Welcome Back</h2>
          <p className="subtitle">Login to your dashboard</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button type="submit" className="login-btn">
            Login to Dashboard →
          </button>

          <div className="demo-note">
            <strong>Demo Login</strong>
            <span>Use any email and password to continue.</span>
          </div>
        </form>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          background: #f4f7fb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          box-sizing: border-box;
        }

        .login-wrapper {
          width: 100%;
          max-width: 1050px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 70px;
          align-items: center;
        }

        .intro {
          padding: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          color: #111827;
          margin-bottom: 35px;
        }

        .brand span {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2563eb;
          border-radius: 11px;
          font-size: 22px;
        }

        .intro h1 {
          margin: 0;
          font-size: 55px;
          line-height: 1.05;
          color: #111827;
          letter-spacing: -2px;
        }

        .intro h1 span {
          color: #2563eb;
        }

        .intro > p {
          max-width: 500px;
          margin: 22px 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        .features div {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          padding: 9px 12px;
          border-radius: 8px;
          color: #374151;
          font-size: 12px;
          font-weight: 600;
        }

        .education {
          margin-top: 35px;
          color: #64748b;
          font-size: 12px;
        }

        .login-card {
          background: #ffffff;
          padding: 35px;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.10);
          border: 1px solid #e5e7eb;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          border-radius: 12px;
          font-size: 23px;
          margin-bottom: 18px;
        }

        .login-card h2 {
          margin: 0;
          font-size: 27px;
          color: #111827;
        }

        .subtitle {
          margin: 7px 0 28px;
          color: #6b7280;
          font-size: 14px;
        }

        .login-card label {
          display: block;
          margin-bottom: 7px;
          color: #374151;
          font-size: 13px;
          font-weight: 600;
        }

        .login-card input {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 13px;
          margin-bottom: 17px;
          border: 1px solid #d1d5db;
          border-radius: 9px;
          outline: none;
          font-size: 14px;
        }

        .login-card input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.10);
        }

        .show-password {
          border: none;
          background: none;
          color: #2563eb;
          padding: 0;
          margin: -5px 0 22px;
          cursor: pointer;
          font-size: 12px;
        }

        .login-btn {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 9px;
          background: #2563eb;
          color: white;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .login-btn:hover {
          background: #1d4ed8;
        }

        .demo-note {
          margin-top: 18px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 9px;
          text-align: center;
        }

        .demo-note strong,
        .demo-note span {
          display: block;
        }

        .demo-note strong {
          color: #374151;
          font-size: 12px;
        }

        .demo-note span {
          margin-top: 4px;
          color: #9ca3af;
          font-size: 11px;
        }

        @media (max-width: 800px) {
          .login-wrapper {
            grid-template-columns: 1fr;
            max-width: 450px;
            gap: 25px;
          }

          .intro {
            text-align: center;
            padding: 0;
          }

          .brand {
            justify-content: center;
            margin-bottom: 20px;
          }

          .intro h1 {
            font-size: 40px;
          }

          .intro > p {
            margin: 15px auto;
          }

          .features {
            justify-content: center;
          }

          .education {
            margin-top: 18px;
          }
        }

        @media (max-width: 500px) {
          .login-page {
            padding: 18px;
          }

          .login-card {
            padding: 25px;
          }

          .intro h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;