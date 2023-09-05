import { useEffect, useState } from 'react';
import './App.css';
import { ChangeMessengerMessage } from './components/ChangeMessengerMessage';
import { IdentificarUsuario } from './components/identificarUsuario';
import { FormularioRegistrarPlayList } from './components/formularioRegistrarPlayList'
import { getMessengerMessage } from './fetchers/messenger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListarPlaylist } from './components/listarPlaylist';
import { SuscribirPlaylis } from './components/suscribirPlaylis';

function App() {
  const [message, setMessage] = useState();

  const getApiData = async () => {
    const response = await getMessengerMessage();
    setMessage(response.message);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    // <div>
    //   {message && <ChangeMessengerMessage currentMessage={message} />}
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<IdentificarUsuario currentMessage={message ?? ""}/>}/>
        <Route path="/crearUsuario" element={<ChangeMessengerMessage currentMessage={message ?? ""}/>} />
        <Route path="/crearPlayList" element={<FormularioRegistrarPlayList currentMessage={message ?? ""}/>} />
        <Route path="/listarPlayList" element={<ListarPlaylist currentMessage={message ?? ""}/>} />
        <Route path="/suscribirPlayList" element={<SuscribirPlaylis currentMessage={message ?? ""}/>} />
      </Routes>
    </Router>
  );
}

export default App;
