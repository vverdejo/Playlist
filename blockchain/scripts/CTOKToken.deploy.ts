import { ethers } from 'hardhat';

async function main() {
  const CTOKToken = await ethers.getContractFactory('CTOKToken');

  const initialSupply = ethers.utils.parseUnits("1000",18)

  const token = await CTOKToken.deploy(initialSupply);

  await token.deployed();

  console.log('Greeter deployed to:', token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
