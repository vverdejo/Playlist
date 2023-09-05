import { Link } from 'react-router-dom';
import { useState } from 'react';
import { suscribirsePlayList } from '../fetchers/messenger';

export const SuscribirPlaylis = ({ currentMessage }: { currentMessage: string }) => {
  const [email, setEmail] = useState(""); // Usar setEmail para actualizar el estado del email
  const [nombreplaylist, setNombreplaylist] = useState("");
  const [walletcliente, setWalletcliente] = useState("");
  const [walletownerplaylist, setwalletownerplaylist] = useState("");
  const [amount, setamount] = useState(""); 


  const suscribirPlaylis = async () => {
    try {
      // Primera llamada
      await suscribirsePlayList(email, nombreplaylist, walletcliente, walletownerplaylist, amount);
      console.log('Suscripción realizada:');
    } catch (error) {
      console.error('Error en la suscripción:', error);
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
      <div><h1>Suscripción de playlist</h1></div>
      <input
        style={{ width: '33vw', margin: 'auto' }}
        placeholder="Correo Electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
       <input
         placeholder="Nombre playlist"
         value={nombreplaylist}
         onChange={(e) => setNombreplaylist(e.target.value)} 
      />
    
    <input
         placeholder="Wallet cliente"
         value={walletcliente}
         onChange={(e) => setWalletcliente(e.target.value)} 
      />

    <input
         placeholder="Wallet propietario de playlist"
         value={walletownerplaylist}
         onChange={(e) => setwalletownerplaylist(e.target.value)} 
      />

    <input
         placeholder="Cantidad ctoken "
         value={amount}
         onChange={(e) => setamount(e.target.value)} 
      />

      <button style={{ width: '33vw', margin: 'auto' }} onClick={async () => await suscribirPlaylis()}>Suscribirse</button>
      
    </div>
  );
};
