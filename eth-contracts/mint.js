

const { ethers } = require("ethers");
const config = require("./data/config.local.json");
let solnSquareVerifier = require("./build/contracts/SolnSquareVerifier.json");

// Url where the contract is deployed
// const url = "https://rinkeby.infura.io/v3/a6cb341cf6d94672a24485f50d2fa95a" // rinkeby
// const appAddress = "0x72266125eA9F5a4a46F9f908F964a31760d703a7"; // rinkeby

const url = config.url; // localhost
const appAddress = config.solnSquareVerifierAddress;

let web3Provider;
let accounts;
let owner;
let realEstateContract;

/**
 * Initialize web3
 */
async function initWeb3() {

    // Load web3 provider
    web3Provider = new ethers.providers.JsonRpcProvider(url);

    // Get all accounts
    accounts = await web3Provider.listAccounts();

    // Set the owner account
    owner = await accounts[0];

    // Get the signer
    const signer = await web3Provider.getSigner();

    // Get an instance of the contract
    realEstateContract = new ethers
        .Contract(appAddress, solnSquareVerifier.abi, signer);

}

/**
 * Add a new solution
 */
async function submitSolution(tokenID, zokratesProof) {

    // Set the signer
    const signer = web3Provider.getSigner(owner);

    // Set the contract
    const contract = realEstateContract.connect(signer);

    try {
        const transaction = await contract
            .submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[1], tokenID);
        await transaction.wait();
    } catch (error) {
        console.log(error);
    }
}

/**
 * Mint a new token
 */
async function mint(tokenID) {

    // Set the signer
    const signer = web3Provider.getSigner(owner);

    // Set the contract
    const contract = realEstateContract.connect(signer);

    try {
        const transaction = await contract.mint(accounts[1], tokenID);

        await transaction.wait();
    } catch (error) {
        console.log(error);
    }

}


async function run() {

    // Initialize web3
    await initWeb3();

    // Mint 10 tokens for a single account
    for (let index = 1; index < 11; index++) {

        // Set the proof to use
        let zokratesProof = require(`../zokrates/code/square/proof_${index}.json`);

        // Submit a solution
        await submitSolution(index, zokratesProof);

        // Mint a token
        await mint(index);

    }

}

run();
