// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line import/no-extraneous-dependencies
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ATOMOTOSToken = await hre.ethers.getContractFactory("ATOMOTOSToken");
  const ATOMOTOSToken = await ATOMOTOSToken.deploy();

  await ATOMOTOSToken.deployed();
  console.log("ATOMOTOSToken deployed to:", ATOMOTOSToken.address);
  console.log("Name", await ATOMOTOSToken.name());
  console.log("Symbol", await ATOMOTOSToken.symbol());
  console.log("Decimals", await ATOMOTOSToken.decimals());
  console.log("Total Supply", await ATOMOTOSToken.totalSupply());
  console.log("Owner", await ATOMOTOSToken.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
