import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

interface Product {
  created_at: string;
  description: string;
  id: number;
  name: string;
  price: string;
  seller_id: number;
  stock: number;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://apiecommercedagc.ddns.net/products', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id='products' className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="w-[80vw] min-w-[300px] max-w-[700px] px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">Product List</h2>
        
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className='flex flex-col gap-4'>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">ID</th>
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300">Description</th>
                        <th className="px-4 py-2 border border-gray-300">Price</th>
                        <th className="px-4 py-2 border border-gray-300">Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                        <td className="px-4 py-2 border border-gray-300">{product.id}</td>
                        <td className="px-4 py-2 border border-gray-300">{product.name}</td>
                        <td className="px-4 py-2 border border-gray-300">{product.description}</td>
                        <td className="px-4 py-2 border border-gray-300">${product.price}</td>
                        <td className="px-4 py-2 border border-gray-300">{product.stock}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <button
                    onClick={fetchProducts}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Update Products
                </button>

                <Link to="/dashboard" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
                </div>
        )}
            </div>
        </RevealOnScroll>
    </section>
  );
};
