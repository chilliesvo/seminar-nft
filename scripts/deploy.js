const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Loading accounts
  const accounts  = await ethers.getSigners();
  const addresses = accounts.map(account => account.address);
  const deployer  = addresses[0];

  // Loading contract factory.
  const Monkey = await ethers.getContractFactory("Monkey");
 
  // Deploy contracts
  console.log(
    "=================================================================="
  );
  console.log("DEPLOY CONTRACTS");
  console.log(
    "=================================================================="
  );

  const monkey = await Monkey.deploy();
  await monkey.deployed();
  console.log("Monkey                deployed to:", monkey.address);

  const verifyArguments = {
    deployer: deployer,
    project : monkey.address,
  };

  await fs.writeFileSync("contracts.json", JSON.stringify(verifyArguments));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
