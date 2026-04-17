const hre = require("hardhat");

async function main() {
  const DecentralizedChat = await hre.ethers.getContractFactory("DecentralizedChat");
  const chat = await DecentralizedChat.deploy();
  await chat.deployed();
  console.log("DecentralizedChat deployed to:", chat.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});