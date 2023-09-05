import { useState } from 'react';
import { obtenerPlayList } from '../fetchers/messenger';

export const ListarPlaylist = ({ currentMessage }: { currentMessage: string }) => {

  const [listaplaylist, setListaplaylist] = useState(""); 
  
  const listarPlaylist = async () => {
    try {
      // Primera llamada
      const listaplaylist=await obtenerPlayList();
      console.log('Llamada obtenerPlayList completada:'+listaplaylist.lista);
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
      <div><h1>Listado de playlist</h1></div>
      
      <button style={{ width: '33vw', margin: 'auto' }} onClick={async () => await listarPlaylist()}>Buscar</button>
      
    </div>
  );
};