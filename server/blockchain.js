// This file will handle Ethereum blockchain connection and contract interaction
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

// Replace with your deployed contract address and ABI
const CONTRACT_ADDRESS = process.env.CHAT_CONTRACT_ADDRESS;
const CONTRACT_ABI = [
  // ... ABI goes here ...
];

// Set up provider (e.g., Infura, Alchemy, or local node)
const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC_URL);

// Set up wallet (for sending transactions)
const wallet = new ethers.Wallet(process.env.ETH_PRIVATE_KEY, provider);

// Set up contract instance
const chatContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);

export default chatContract;