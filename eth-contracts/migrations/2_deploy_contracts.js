// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var ERC721Token = artifacts.require("./ERC721Token.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async (deployer) => {

  await deployer.deploy(Verifier);
  const verifierContract = await Verifier.deployed();

  await deployer.deploy(ERC721Token);
  const ERC721TokenContract = await ERC721Token.deployed();

  await deployer.deploy(SolnSquareVerifier, verifierContract.address);
  const solnSquareVerifier = await SolnSquareVerifier.deployed();
}

