import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3300/student/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                setMsg("Login Successful!");
                setTimeout(() => navigate("/home"), 1000);
            } else {
                setMsg("Login failed.");
            }
        } catch (error) {
            setMsg("Network error.");
        }
    };

    return (
        <>
            <div className="form-box">
                <h2>Login</h2>
                {msg && <div style={{ color: msg.includes("Successful") ? "green" : "red", textAlign: "center", marginBottom: "10px" }}>{msg}</div>}
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "😮‍💨" : "🫣"}
                        </button>
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
            <div id="bg-root"></div>
        </>
    );
}

export default Login;
