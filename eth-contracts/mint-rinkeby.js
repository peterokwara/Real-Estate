const { ethers, utils } = require("ethers");
let solnSquareVerifier = require("./build/contracts/SolnSquareVerifier.json");
const fs = require("fs");

// Url where the contract is deployed
// const url = "https://rinkeby.infura.io/v3/a6cb341cf6d94672a24485f50d2fa95a" // rinkeby
const appAddress = "0x72266125eA9F5a4a46F9f908F964a31760d703a7"; // rinkeby

const projectID = "a6cb341cf6d94672a24485f50d2fa95a";
let mnemonic = fs.readFileSync(".secret").toString().trim();

let infuraProvider;
let realEstateContract;

let account_one;
let account_two;
let account_three;

/**
 * Initialize web3
 */
async function initWeb3() {

    // Load web3 provider
    infuraProvider = new ethers.providers.InfuraProvider("rinkeby", projectID);

    // Check whether it's a valid mnemonic
    ethers.utils.isValidMnemonic(mnemonic)

    // Load wallet
    walletMnemonic = new ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");

    // Generate accounts from seed
    await generateAccounts();

    // // Set the app address
    // appAddress = walletMnemonic.address;

    // The connect method returns a new instance of the wallet
    // connected to a provider
    signer = walletMnemonic.connect(infuraProvider)

    // Set up the signer
    // const signer = new wallet.connect(infuraProvider)

    // Get an instance of the contract
    realEstateContract = new ethers
        .Contract(appAddress, solnSquareVerifier.abi, signer);

}

/**
 * Generate extra accounts from seed
 */
async function generateAccounts() {
    const hdNode = utils.HDNode.fromMnemonic(mnemonic);

    account_one = hdNode.derivePath(`m/44'/60'/0'/0/1`);
    account_two = hdNode.derivePath(`m/44'/60'/0'/0/2`);
    account_three = hdNode.derivePath(`m/44'/60'/0'/0/3`);

    console.log("Accounts", account_one, account_two, account_three)
}

/**
 * Add a new solution
 */
async function submitSolution(tokenID, zokratesProof) {

    // Change provider first?
    walletMnemonic = new ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/1");

    signer = walletMnemonic.connect(infuraProvider)

    realEstateContract = new ethers
        .Contract(appAddress, solnSquareVerifier.abi, signer);

    try {
        const transaction = await realEstateContract
            .submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, account_two.address, tokenID);
        console.log(transaction);

        await transaction.wait();
    } catch (error) {
        console.log(error);
    }
}

/**
 * Mint a new token
 */
async function mint(tokenID) {

    // Change provider first?
    walletMnemonic = new ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");

    signer = walletMnemonic.connect(infuraProvider)

    realEstateContract = new ethers
        .Contract(appAddress, solnSquareVerifier.abi, signer);

    try {
        const transaction = await realEstateContract.mint(account_two.address, tokenID);
        console.log(transaction);

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
