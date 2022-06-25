// migrating the appropriate contracts
const Verifier = artifacts.require("./Verifier.sol");
const ERC721Token = artifacts.require("./ERC721Token.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const fs = require('fs');


module.exports = async (deployer) => {

  await deployer.deploy(Verifier);
  const verifierContract = await Verifier.deployed();

  await deployer.deploy(ERC721Token);
  const ERC721TokenContract = await ERC721Token.deployed();

  await deployer.deploy(SolnSquareVerifier, verifierContract.address);
  const solnSquareVerifier = await SolnSquareVerifier.deployed();


  let config = {
    url: 'http://localhost:8545',
    solnSquareVerifierAddress: solnSquareVerifier.address,
  }

  fs.writeFileSync(__dirname + '/../data/config.local.json', JSON.stringify(config, null, '\t'), 'utf-8');
}

