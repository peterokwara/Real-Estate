const solnSquareVerifier = require("./build/contracts/SolnSquareVerifier.json");
const Web3 = require('web3');
const fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// Url where the contract is deployed
// const url = "https://rinkeby.infura.io/v3/a6cb341cf6d94672a24485f50d2fa95a" // rinkeby
const appAddress = "0xA39Fd52147Cd7320e164e4017DAda772eE9b75bB"; // rinkeby

const infuraKey = "a6cb341cf6d94672a24485f50d2fa95a";
const mnemonic = fs.readFileSync(".secret").toString().trim();

let infuraProvider;
let realEstateContract;
let accounts
let web3

/**
 * Initialize web3
 */
async function initWeb3() {

    // Load web3 provider
    infuraProvider = await new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 0);

    web3 = await new Web3(infuraProvider);

    // Get the accounts
    accounts = await web3.eth.getAccounts();

    try {
        realEstateContract = await new web3.eth.Contract(solnSquareVerifier.abi, appAddress);
    } catch (error) {
        console.log(error);
    }

}

/**
 * Add a new solution
 */
async function submitSolution(tokenID, zokratesProof) {

    try {
        let result = await realEstateContract
            .methods
            .submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[0], tokenID).send({ from: accounts[0] });
        console.log("Submit solution result ", result)
    } catch (error) {
        throw new Error(error);
    }
}


/**
 * Mint a new token
 */
async function mint(tokenID) {

    try {
        let result = await realEstateContract.methods.mint(accounts[0], tokenID).send({ from: accounts[0] });
        console.log("Submit mint ", result)
    } catch (error) {
        throw new Eerror
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
