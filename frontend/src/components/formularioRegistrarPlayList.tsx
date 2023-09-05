import { useState } from 'react';
import { agregarPlayList } from '../fetchers/messenger';
export const FormularioRegistrarPlayList = ({ currentMessage }: { currentMessage: string }) => {
  const [nombre, setNombre] = useState(""); // Usar setEmail para actualizar el estado del email
  const [listacanciones, setListaCanciones] = useState(""); // Usar setPass para actualizar el estado de la contraseña
  const [precio, setPrecio] = useState(""); // Usar setPass para actualizar el estado de la contraseña
  const [descripcion, setDescripcion] = useState(""); // Usar setPass para actualizar el estado de la contraseña
  const [email, setEmail] = useState(""); // Usar setPass para actualizar el estado de la contraseña
  const [wallet, setWallet] = useState(""); 
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
      <div><h1>Crear PlayList</h1></div>
      <input
        placeholder="Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de la contraseña
      />
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Actualiza el estado de la contraseña
      />
       <input
        placeholder="Lista de canciones"
        value={listacanciones}
        onChange={(e) => setListaCanciones(e.target.value)} // Actualiza el estado de la contraseña
      />
      <input
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} // Actualiza el estado de la contraseña
      />
       <input
        placeholder="Precio acceso: $0.01 MAT"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

<input
        placeholder="Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)} 
      />

      <button onClick={async () => await agregarPlayList(email, nombre, descripcion, listacanciones, precio, wallet)}>Guardar</button>

    </div>
  );
};