import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
export const Login = () => {
  const { setToken } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://apiecommercedagc.ddns.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || 'Error al iniciar sesión');
      }

      const data = await response.json();
      setToken(data.token); // Guarda el token en el contexto

      // Opcional: Redirige o muestra mensaje
      console.log('Login exitoso. Token:', data.token);
      alert(`✔️ Successful login`);
    } catch (err: any) {
      const errorMessage = err.message || err.error || 'Ocurrió un error';
      setError(errorMessage);
      alert(`❌ Error:  ${errorMessage}`);
    }
  };

  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-[80vw] min-w-[300px] max-w-[700px] px-4">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-green-500 focus:bg-green-500/5"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                        focus:border-green-500 focus:bg-green-500/5"
            />
            <button 
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                                      hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              Ingresar
            </button>
            <Link to="/dashboard" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
      
    </section>

  );
};
