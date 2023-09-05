import { Link } from 'react-router-dom';
import { useState } from 'react';
import { identificaUsuario } from '../fetchers/messenger';

export const IdentificarUsuario = ({ currentMessage }: { currentMessage: string }) => {
  const [email, setEmail] = useState(""); // Usar setEmail para actualizar el estado del email
  const [pass, setPass] = useState(""); // Usar setPass para actualizar el estado de la contraseñaS

  const identificarUsuario = async () => {
    try {
      // Primera llamada
      await identificaUsuario(email, pass);
      console.log('Llamada identifyUser completada:');
    } catch (error) {
      console.error('Error en la llamada:', error);
    }
  }; 
  
  return (
    
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
        gap: '10px'
      }}>
      <div><h1>Iniciar Sesión</h1></div>
      <input
        style={{ width: '33vw', margin: 'auto' }}
        placeholder="Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
      />
       <input
         type="password" // Añadir este atributo para ocultar la contraseña
         placeholder="Contraseña"
         value={pass}
         onChange={(e) => setPass(e.target.value)} // Actualiza el estado de la contraseña
      />
      <button style={{ width: '33vw', margin: 'auto' }} onClick={async () => await identificarUsuario()}>Acceder</button>
      <h5>¿No tienes una cuenta?</h5><Link style={{ color: 'red' }} to="/crearUsuario">Ir a registrarse</Link>
    </div>
  );
};
