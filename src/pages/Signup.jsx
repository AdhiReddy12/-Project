import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [msg, setMsg] = useState({ text: "", color: "" });
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Validation rules
        if (password.length < 8) {
            setMsg({ color: "red", text: "Password must be at least 8 characters." });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setMsg({ color: "red", text: "Password must contain at least one capital letter." });
            return;
        }
        if (!/[0-9]/.test(password)) {
            setMsg({ color: "red", text: "Password must contain at least one number." });
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setMsg({ color: "red", text: "Password must contain at least one special character." });
            return;
        }
        if (password !== confirmPassword) {
            setMsg({ color: "red", text: "Passwords do not match." });
            return;
        }

        try {
            const response = await fetch("http://localhost:3300/student/Register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password }),
            });

            if (response.ok) {
                setMsg({ color: "green", text: "Signup Successful! Redirecting to Login..." });
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setMsg({ color: "red", text: "Signup failed." });
            }
        } catch (error) {
            setMsg({ color: "red", text: "Network error." });
        }
    };

    return (
        <>
            <div className="form-box">
                <h2>Sign Up</h2>
                {msg.text && <div style={{ color: msg.color, textAlign: "center", marginBottom: "10px" }}>{msg.text}</div>}
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder="Full Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "😮‍💨" : "🫣"}
                        </button>
                    </div>
                    <ul className="requirements">
                        <li>At least 8 characters</li>
                        <li>At least one capital letter (A-Z)</li>
                        <li>At least one number (0-9)</li>
                        <li>At least one special character (!@#$%^&*...)</li>
                    </ul>
                    <div className="input-group">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="button" className="toggle-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? "😮‍💨" : "🫣"}
                        </button>
                    </div>
                    <button type="submit" className="btn-signup">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            <div id="bg-root"></div>
        </>
    );
}

export default Signup;
