import React, { useState } from "react";
import axios from "axios";

function App() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.post("http://localhost:5000/search", { query });
            setResult(response.data.message); // ✅ Extract only the `message`
        } catch (error) {
            console.error("Error fetching data:", error);
            setResult("An error occurred.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Genify 🔍</h1>
            <input 
                type="text" 
                placeholder="Enter your search query..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: "10px", width: "60%", fontSize: "16px" }}
            />
            <button onClick={handleSearch} style={{ padding: "10px 20px", marginLeft: "10px" }}>
                Search
            </button>
            <div style={{ marginTop: "20px", fontSize: "18px" }}>
                {result && <p>🔎 {result}</p>}
            </div>
        </div>
    );
}

export default App;
