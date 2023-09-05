// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChangeMessengerMessage } from './components/ChangeMessengerMessage';
import { FormularioRegistrarPlayList } from './components/formularioRegistrarPlayList';
import { ListarPlaylist } from './components/listarPlaylist';
import { SuscribirPlaylis } from './components/suscribirPlaylis';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/crearUsuario" element={<ChangeMessengerMessage currentMessage=''/>} />
        <Route path="/crearPlayList" element={<FormularioRegistrarPlayList currentMessage=''/>} /> 
        <Route path="/listarPlaylist" element={<ListarPlaylist currentMessage=''/>} />
        <Route path="/suscribirPlayList" element={<SuscribirPlaylis currentMessage=''/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
