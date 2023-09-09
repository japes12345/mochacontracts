const {ethers} = require("hardhat")

//hardhat automatically compiles
async function main() {

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const SimpleStorage = await SimpleStorageFactory.deploy(

  );
  await SimpleStorage.deployed();
  console.log('Deployed SimpleStorage to:', SimpleStorage.address);


}
//hh run scripts/deploy.js
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
