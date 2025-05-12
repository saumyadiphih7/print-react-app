import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handlePrint = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://localhost:5000/print", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "print-secure-key",
        },
        body: JSON.stringify({
          orderId: "1234AB",
          total: 1223,
          items: [
            {
              name: "abcd",
              qty: 1,
              price: 1223,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch print data");
      }

    

    
    } catch (error) {
      console.error("Print error:", error);
      alert("Printing failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Secure Print Demo</h1>
      <button onClick={handlePrint} disabled={loading}>
        {loading ? "Printing..." : "Print"}
      </button>
    </div>
  );
}

export default App;
