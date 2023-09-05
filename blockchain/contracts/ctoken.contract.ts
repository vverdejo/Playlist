import dotenv from 'dotenv';
import { ethers } from 'ethers'; 
import { CTOKToken__factory } from '../../blockchain/typechain/factories/CTOKToken__factory';
import { BlockchainUrlsEnum } from '../../backend/src/constracts/urls';

dotenv.config();

/*
const { JsonRpcProvider } = require("ethers");

// URL del nodo de la red Mumbai de Polygon (Infura en este ejemplo)
const rpcUrl = "https://polygon-mumbai.infura.io/v3/TU_ID_DE_PROYECTO";

// Crea una instancia del proveedor de JSON-RPC
const provider = new JsonRpcProvider(rpcUrl);
*/

export const getCTokenContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  return new ethers.Contract(
    process.env.CTOKEN_CONTRACT_ADDRESS!,
    CTOKToken__factory.abi,
    wallet
  );
};