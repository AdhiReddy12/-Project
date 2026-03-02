import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="form-box" style={{ textAlign: "center" }}>
                <h2>Dashboard</h2>
                <p>Welcome to your home page.</p>
                <div className="btn-group">
                    <Link to="/" className="btn-login" style={{ backgroundColor: "#f44336" }}>Logout</Link>
                </div>
            </div>
            <div id="bg-root"></div>
        </>
    );
}

export default Home;
