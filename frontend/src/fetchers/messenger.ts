import { headers } from './headers';

export const getMessengerMessage = async () =>
  await fetch('http://localhost:20001/messenger', { method: 'GET', headers }).then((response) =>
    response.json()
  );

export const setMessengerMessage = async (message: string) =>
  await fetch(`http://localhost:20001/messenger/?message=${message}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

  export const agregarUsuario = async (email: string, pass: string, wallet: string) =>
  await fetch(`http://localhost:20001/agregarUsuario/?email=${email}&pass=${pass}&wallet=${wallet}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

  export const identificaUsuario = async (email: string, pass: string) =>
  await fetch(`http://localhost:20001/identificarUsuario/?email=${email}&pass=${pass}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

  export const agregarPlayList = async (email: string, nombre: string, descripcion: string, listacanciones: string, precio: string, wallet: string) =>
  await fetch(`http://localhost:20001/agregarPlayList/?email=${email}&nombre=${nombre}&descripcion=${descripcion}&listacanciones=${listacanciones}&precio=${precio}&wallet=${wallet}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

  export const suscribirsePlayList = async (nombreplaylist: string, email: string,  walletcliente: string,  walletownerplaylist: string,  amount: string) =>
  await fetch(`http://localhost:20001/suscribirsePlayList/?nombreplaylist=${nombreplaylist}&email=${email}&walletcliente=${walletcliente}&walletownerplaylist=${walletownerplaylist}&amount=${amount}`, {
    method: 'PUT',
    headers
  }).then((response) => response.json());

  export const obtenerPlayList = async () =>
  await fetch('http://localhost:20001/obtenerPlayList', { method: 'GET', headers }).then((response) =>
    response.json()
  );



