import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const updateCount = (value) => {
        const num = parseInt(value, 10);
        if (!isNaN(num)) {
            setCount((count) => count + num);
            setInput("");
        }
    };

    return (
        <div className="counter-container">
            <div className="top-controls">
                <button onClick={() => setCount((count) => count + 1)}>➕</button>
                <span className="count-display">{count}</span>
                <button onClick={() => setCount((count) => count - 1)}>➖</button>
            </div>

            <div className="bottom-controls">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ədəd daxil edin"
                />
                <div className="input-buttons">
                    <button onClick={() => updateCount(input)}>Əlavə et</button>
                    <button onClick={() => updateCount(-input)}>Çıxart</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;