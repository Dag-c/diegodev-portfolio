import { Link, Routes, Route } from 'react-router-dom';
import { RegisterUser } from './dashboard/RegisterUser';
import { Login } from './dashboard/Login';
import { CreateProduct } from './dashboard/CreateProduct';
import { ProductList } from './dashboard/ProductList';

export function Dashboard() {
  return (
    <div className='p-4 w-full'>
      <nav className="min-h-screen flex w-full flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <div className="flex flex-col gap-6 w-[80vw] min-w-[200px] max-w-[500px] px-4">
          <Link to="register" className="text-center w-full border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
            Register User
          </Link>
          <Link to="login" className="text-center w-full border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
            Login
          </Link>
          <Link to="create" className="text-center w-full border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
            Create Product
          </Link>
          <Link to="products" className="text-center w-full border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
            Product List
          </Link>
          <Link to="/" className="text-center w-full border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
            Return to portfolio
          </Link>
        </div>
      </nav>


      <Routes>
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
        <Route path="create" element={<CreateProduct />} />
        <Route path="products" element={<ProductList />} />

      </Routes>
    </div>
  );
}
