import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ Save token so ProtectedRoute allows access
    localStorage.setItem("token", "demo-user-token");

    alert("Login successful ✅");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div
        className="w-full h-[45vh] sm:h-[50vh] md:h-auto md:w-1/2 flex items-center justify-center p-6 sm:p-8"
        style={{ backgroundColor: "#718FC8" }}
      >
        <img
          src="/images/digi_logo_white.png"
          alt="Company Logo"
          className="w-40 sm:w-56 md:w-72 lg:w-96 mx-auto"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-4 py-8">
        <div className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 sm:p-3 mb-4 border rounded bg-white text-black outline-none focus:ring-2 focus:ring-[#718FC8]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 sm:p-3 mb-4 border rounded text-black bg-white outline-none focus:ring-2 focus:ring-[#718FC8]"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#718FC8] text-white py-2 sm:py-3 rounded hover:opacity-90 transition"
          >
            Login
          </button>

          <div className="text-right mt-3">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-5">
            © Digi-Prodigy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;