import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { LoadingScreen } from './components/sections/LoadingScreen'
import { Navbar} from './components/sections/Navbar' 
import { MobileMenu } from './components/sections/MobileMenu'
import { Home } from './components/sections/Home'
import { useState } from 'react'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Products } from './components/sections/Products'
import { Dashboard } from './components/sections/Dashboard'
import { RegisterUser } from './components/sections/dashboard/RegisterUser';
import { Login } from './components/sections/dashboard/Login';
import { CreateProduct } from './components/sections/dashboard/CreateProduct';
import { ProductList } from './components/sections/dashboard/ProductList';
import { useLocation } from 'react-router-dom';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/dashboard/') && location.pathname !== '/dashboard';  

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"}
                   bg-black text-gray-100`}>
                    
    {!hideNav && (
      <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </>
    )}

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Contact />
            <Products />
          </>
        } />
        
        {/* Solo el menú del dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Formularios separados (sin menú del dashboard) */}
        <Route path="/dashboard/register" element={<RegisterUser />} />
        <Route path="/dashboard/login" element={<Login />} />
        <Route path="/dashboard/create" element={<CreateProduct />} />
        <Route path="/dashboard/products" element={<ProductList />} />
      </Routes>


    </div>
    </>
  )
}

export default App
