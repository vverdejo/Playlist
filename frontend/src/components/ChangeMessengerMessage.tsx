import { useState } from 'react';
import { agregarUsuario } from '../fetchers/messenger';

export const ChangeMessengerMessage = ({ currentMessage }: { currentMessage: string }) => {
  const [email, setEmail] = useState(""); // Usar setEmail para actualizar el estado del email
  const [pass, setPass] = useState(""); // Usar setPass para actualizar el estado de la contraseña
  const [wallet, setWallet] = useState(""); // Usar setWallet para actualizar el estado de la wallet
  const crearUsuario = async (_email: string, _pass: string, _wallet: string) => {
    try {
      // Primera llamada
      await agregarUsuario(_email, _pass, _wallet);
    } catch (error) {
      console.error('Error en la llamada:', error);
    }
  }; 
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: 'auto',
        gap: '10px'
      }}
    >
      <h1>CREAR CUENTA</h1>
      <input
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
      />
      <input
        type="password" // Añadir este atributo para ocultar la contraseña
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)} // Actualiza el estado de la contraseña
      />
      <input
        id='txtWallet'
        placeholder="Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)} // Actualiza el estado de la wallet
      />
      <button onClick={async () => await crearUsuario(email, pass, wallet)}>Crear Usuario</button>
    </div>
  );
};

