import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handlePrint = async () => {
    setLoading(true);
const data = {
    data: {
      orderId: "PO-471",
      date: "05-12-2025",
      time: "4:05AM",
      golfCourse: {
        _id: "67931c58362def9e4875031a",
        name: "Eden Gardens Golf Course",
        logo: "https://golf-management.s3.ca-central-1.amazonaws.com/golf-course/golf.png",
        address: "Test Street, \n  Spokane, \n  MO, 65754",
      },
      employee: {
        _id: "67990848a04897c78e8c43c4",
        fullName: "Koushik Employee",
      },
      customer: {
        _id: "679a415aadc084bea8ebb0e0",
        fullName: "Sayantan Chakraborty",
      },
      referenceId: "e93bdfb0ffce",
      payment: {
        paymentType: [
          {
            method: "Cash",
            amount: 179.42999999999998,
          },
        ],
        totalAmount: 179.43,
        totalSubTotal: 169,
        totalTax: 10.43,
        taxDetails: [
          {
            taxRateName: "Green Fee Tax",
            percentage: 7,
            taxAmount: 1.82,
          },
          {
            taxRateName: "Cart Fee Tax",
            percentage: 7,
            taxAmount: 2.45,
          },
          {
            taxRateName: "Sales Tax",
            percentage: 7,
            taxAmount: 6.16,
          },
        ],
      },
      barcode:
        "https://golf-management.s3.ca-central-1.amazonaws.com/barcodes/development/orders/PO-471.png",
      items: [
        {
          item: "French Fries",
          quantity: 3,
          amount: 60,
          taxAmount: 4.2,
          total: 64.2,
        },
      ],
    },
  };
    try {
      const response = await fetch("https://localhost:5000/print", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "print-secure-key",
        },
        body: JSON.stringify(data.data),
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
