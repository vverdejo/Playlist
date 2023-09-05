import cors from 'cors';
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import express, { Express, Request, Response } from 'express';
import { getMessengerContract } from './constracts/messenger.contract';
import { getCTokenContract } from '../../blockchain/contracts/ctoken.contract';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.options('*', cors());

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.put('/messenger', async (req: Request, res: Response) => {
  const message = req.query.message;
  const contract = getMessengerContract();
  const response = await contract.setMessage(message);
  res.json({
    message: response
  });
});

app.get('/messenger', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.getMessage();
  res.json({
    message: response
  });
});

app.put('/agregarUsuario', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.agregarUsuario(req.query.email, req.query.pass, req.query.wallet);
  const responseExiste = await contract.identificarUsuario(req.query.email, req.query.pass);
  console.log();
  res.json({
    message: response
  });
});

app.put('/identificarUsuario', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.identificarUsuario(req.query.email, req.query.pass);
  res.json({
    message: response
  });

});

app.put('/agregarPlayList', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.agregarPlayList(req.query.email, req.query.nombre, req.query.descripcion, req.query.listacanciones, req.query.precio, req.query.wallet);
  res.json({
      message: response
  });
});

app.put('/suscribirsePlayList', async (req: Request, res: Response) => {
  
  const walletcliente = req.query.walletcliente;
  const walletownerplaylist = req.query.walletownerplaylist;
  const amount = req.query.amount;

  const contract_token = getCTokenContract();

  //se realiza transacción desde billetera A a B
  //const result = await contract_token.transferFrom(walletcliente, walletownerplaylist, ethers.parseUnits("1", 18));
  //await result.wait();

  var response = null;
  
  //si es existosa la transacción el cliente se suscribe a la playlist
  //if (result.status==1){
    const contract = getMessengerContract();
    response = await contract.suscribirsePlayList(req.query.nombreplaylist, req.query.email);
    console.log("Suscripción exitosa");
  //}

  res.json({
      message: response
  });
});

/*
app.get('/obtenerPlayList', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.obtenerPlayList();

  console.log(response.playlists);

    res.json({
      playlists: response
    });
  
  
});
*/

app.get('/obtenerPlayList', async (req, res) => {
  const contract = getMessengerContract();
  const response = await contract.obtenerPlayList();

  res.json({
    playlists: response,
  });
});

app.get('/ctoken/totalSupply', async (req: Request, res: Response) => {
  const contract = getCTokenContract();
  const response = await contract.totalSupply();

  res.json({
    totalSupply: ethers.formatEther(response) 
  });
});

app.get('/ctoken/balanceOf', async (req: Request, res: Response) => {
  const contract = getCTokenContract();
  const balanceOf = await contract.balanceOf(req.query.address);

  res.json({
    balanceOf: ethers.formatEther(balanceOf) 
  });
});

app.get('/ctoken/transfer', async (req: Request, res: Response) => {
  const {address, amount} = req.query

  const contract = getCTokenContract();
  const result = await contract.transfer(address, ethers.parseUnits(amount as string, 18));

  res.json({
    transfer: result
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: DApp API Server is running at http://localhost:${port}`);
});
