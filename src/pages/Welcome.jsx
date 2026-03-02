import { Link } from "react-router-dom";

function Welcome() {
    return (
        <>
            <div className="form-box" style={{ textAlign: "center" }}>
                <h2>Welcome!</h2>
                <p>Please login or create an account.</p>
                <div className="btn-group">
                    <Link to="/login" className="btn-login">Login</Link>
                    <Link to="/signup" className="btn-signup">Sign Up</Link>
                </div>
            </div>
            <div id="bg-root"></div>
        </>
    );
}

export default Welcome;
