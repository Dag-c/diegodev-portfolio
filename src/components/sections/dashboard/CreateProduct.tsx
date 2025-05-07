import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { RevealOnScroll } from "../RevealOnScroll";

export function CreateProduct() {
  const { token } = useAuth(); // Se asume que ya guardaste el token tras login
  const [formData, setFormData] = useState({
    seller_id: "",
    name: "",
    description: "",
    price: "",
    stock: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://apiecommercedagc.ddns.net/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // Usa el token JWT del contexto
        },
        body: JSON.stringify({
          seller_id: parseInt(formData.seller_id),
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock)
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ ${data.message}\n🆔 Product ID: ${data.product}`);
        setFormData({
          seller_id: "",
          name: "",
          description: "",
          price: "",
          stock: ""
        });
      } else {
        alert(`❌ Error: ${data?.error || data?.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("❌ Network Error: Unable to reach the server");
    }
  };

  return (
    <section id="register-product" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="w-[80vw] min-w-[300px] max-w-[700px] px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
            Register Product
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {["seller_id", "name", "description", "price", "stock"].map((field) => (
              <input
                key={field}
                type={field === "price" ? "number" : "text"}
                name={field}
                required
                value={(formData as any)[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                placeholder={field.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
              />
            ))}

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              Create Product
            </button>
            <div className="text-center">
              <Link to="/dashboard" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
