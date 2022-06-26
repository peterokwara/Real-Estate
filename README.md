<p align="center">
  <h3 align="center">Supply Chain</h3>

  <p align="center">
Ethereum Dap for Tracking Items through Supply Chain. Part of the Udacity Blockchain Nanodegree.
    <br>
    </p>
</p>

<br>

## Table of contents

- [About the Website](#about-the-website)
- [Technical](#technical)
- [Design](#design)
- [Testing](#testing)
- [Licence](#license)
- [Versions](#versions)
- [Contact Information](#contact-information)

### About the website

Ethereum Dap for Tracking Items through Supply Chain. Part of the Udacity Blockchain Nanodegree.

<p align="center">
  <img src="./assets/czD19w0Pzf.gif"/>
</p>

### Technical

#### Technology Used

This project uses: - ReactJS - Tailwind CSS - CSS - JS - NodeJS - EthersJS - Truffle

**React-JS** - Easy to set up single page application with multiple pages.

**Tailwind CSS** - Easier to style components as compared to SCSS and CSS. Also more predictable and makes a site more responsive.

**Ethersjs** - Had lots of trouble using web3js and @truffle/contracts as I was getting lots of errors when using create-react-app. Resorted to using Ethers-js.

- Truffle version `v4.1.14`
- Solidity version `v0.4.24`
- Create-react-app (client) node `v16`
- Truffle node `v10`
- Token Address `0xbced00aB0149c828B9abCa30E0BD3262C49De2bb`, to view on block explorer, see [here](https://rinkeby.etherscan.io/address/0xbced00ab0149c828b9abca30e0bd3262c49de2bb)

#### Running the project

##### Frontend

Ensure node is running on `v16`. Do this, ensure you have [node version manager](https://github.com/nvm-sh/nvm) installed. Once installed you can then run.

```bash
nvm install 16
nvm use 16
```

The npm packages need to be installed in the **app** directory by running

```console
cd client
```

and then

```console
yarn install
```

Once the installation process has been done, to run the frontend of the project, you can run.

```console
yarn start
```

##### Backend

Ensure node is running on `v10`. Do this, ensure you have [node version manager](https://github.com/nvm-sh/nvm) installed. Once installed you can then run.

```bash
nvm install 10
nvm use 10
```

A `.secret` file needs to be created at the root of the project with the private key of the account to deploy the contract. This has already been done.

Install `hdwallet` by running

```console
npm install @truffle/hdwallet-provider
```

To run the truffle development enviroment, run:

```console
truffle develop
```

To compile the smart contract, within the truffle development environment, run:

```console
compile
```

To migrate and create a fresh and clean smart contract session, within the truffle development environment, run:

```console
migrate --refresh
```

To migrate and create a fresh and clean smart contract session, on the rinkeby testnet, run:

```console
migrate --refresh --network rinkeby
```

To run the test cases within the truffle development environment, run:

```console
test
```

### Design

#### Activity diagram

An activity diagram shows busines and software processes as a progression of actions.

<p align="center">
  <img src="./assets/uml_diagram/activity_diagram.png"/>
</p>

#### Class diagram

A class diagram describes the attributed and operations fo a class and also the constraints imposed on the system.

<p align="center">
  <img src="./assets/uml_diagram/class_diagram.png"/>
</p>

#### Sequence diagram

A sequence diagram is an interaction diagram that details how operations are carried out. They captrue the interaction between objects in the contrext of a collaboration.

<p align="center">
  <img src="./assets/uml_diagram/sequence_diagram.png"/>
</p>

#### State diagram

A state diagram consists of states, transitions, events and activities. They represent the dynamic view of the system.

<p align="center">
  <img src="./assets/uml_diagram/state_diagram.png"/>
</p>

### Testing

To test the full application (Local Node and UI):

- Run the Frontend and Backend as specified in the technology section.
- Ensure the smart contract is deployed to your local test node. In my case, I used Ganache which runs on port **7545**
- Import your account to Metamask. To do this, ensure you have metamask installed. Import the seed phrase that is provided by the local node into Metamask and ensure the accounts show up in the wallet ui.
- Use the first account (normally marked as **Account 1**) to connect to the website. For some reason, it doesn't work with any other account, only the first account.
- Ensure your wallet is connected by clicking **connect wallet** to **Account 1**.
- Try going through the whole coffee export process by clicking the buttons (harvest, process, pack, sell) from the Farm Details page.
- Move to the next page and do the same (buy, ship, receive, purchase) from the Product Details page.
- Try to fetch items from the buffer from the Product Overview page.
- Try to fetch the transaction events from the Transactions History page.

Troubleshooting

- Remove data from localstorage. State data is stored there and see if the problem goes away.

### CONTRIBUTING

I would/ We'd love to have your help in making **supply-chain** better. The project is still very incomplete, but if there's an issue you'd like to see addressed sooner rather than later, let me(/us) know.

Before you contribute though read the contributing guide here: [Contributing.md](https://github.com/peterokwara/supply-chain/blob/master/CONTRIBUTING.md)

For any concerns, please open an [issue](https://github.com/peterokwara/supply-chain/issues), or just, [fork the project and send a pull request](https://github.com/peterokwara/supply-chain/pulls).

<hr>

### License

- see [LICENSE](https://github.com/peterokwara/supply-chain/blob/master/LICENSE) file

### Versions

- Version 1.0 DATE 08/05/2022

### Contact Information

If you have found any bugs, or have any feedback or questions and or want to post a feature request please use the [Issuetracker](https://github.com/peterokwara/supply-chain/issues) to report them.

<hr>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source-200x33.png?v=103)](#)

<br>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/peterokwara/supply-chain/blob/master/LICENSE)

nvm use 16

credit series high argue ignore afraid response follow basic stumble inch atom

https://rinkeby.etherscan.io/address/0x72266125eA9F5a4a46F9f908F964a31760d703a7

# Compiling your contracts...

> Everything is up to date, there is nothing to compile.

# Migrations dry-run (simulation)

> Network name: 'rinkeby-fork'
> Network id: 4
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Replacing 'Migrations'

---

> block number: 10916598
> block timestamp: 1656204667
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.358256879145047816
> gas used: 226537 (0x374e9)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.004757277 ETH

---

> Total cost: 0.004757277 ETH

# 2_deploy_contracts.js

Replacing 'Verifier'

---

> block number: 10916600
> block timestamp: 1656204671
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.335212970145047816
> gas used: 1051566 (0x100bae)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.022082886 ETH

Replacing 'ERC721Token'

---

> block number: 10916601
> block timestamp: 1656204681
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.271933313145047816
> gas used: 3013317 (0x2dfac5)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.063279657 ETH

Replacing 'SolnSquareVerifier'

---

> block number: 10916602
> block timestamp: 1656204693
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.197678447145047816
> gas used: 3535946 (0x35f44a)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.074254866 ETH

---

> Total cost: 0.159617409 ETH

# Summary

> Total deployments: 4
> Final cost: 0.164374686 ETH

# Starting migrations...

> Network name: 'rinkeby'
> Network id: 4
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Replacing 'Migrations'

---

> transaction hash: 0x04c5e6332202bc54201827256529e146d76b9d2cfcf17613dd29cdc4e4ade038
> Blocks: 1 Seconds: 9
> contract address: 0x2113F1B5cdce596e94570bb973d46CB36137b514
> block number: 10916605
> block timestamp: 1656204711
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.358256879145047816
> gas used: 226537 (0x374e9)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.004757277 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.004757277 ETH

# 2_deploy_contracts.js

Replacing 'Verifier'

---

> transaction hash: 0x2694d4af98602f018622c9ba0f663b44ce80b7f1709237def5ab68fced65c433
> Blocks: 1 Seconds: 9
> contract address: 0xb17a8e949F060F7527E98F5E486F46C3cF13AF00
> block number: 10916607
> block timestamp: 1656204741
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.335212970145047816
> gas used: 1051566 (0x100bae)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.022082886 ETH

Replacing 'ERC721Token'

---

> transaction hash: 0x1ed49cbc56ed1ad240f54050aec36bc051704685193f3ed68dbbdadcbe55c30e
> Blocks: 1 Seconds: 5
> contract address: 0xE85f6A7deB0719ef62ec49A2BD5E74Cf056f1c1F
> block number: 10916608
> block timestamp: 1656204756
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.271933313145047816
> gas used: 3013317 (0x2dfac5)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.063279657 ETH

Replacing 'SolnSquareVerifier'

---

> transaction hash: 0xf04b5b3a39ed604742e6a208f4fa7ba8f85858625588b38c8b91629181760052
> Blocks: 1 Seconds: 5
> contract address: 0xA39Fd52147Cd7320e164e4017DAda772eE9b75bB
> block number: 10916609
> block timestamp: 1656204771
> account: 0xBd176872f0a3DaBe117BE128C0580993F547869a
> balance: 0.197678447145047816
> gas used: 3535946 (0x35f44a)
> gas price: 21 gwei
> value sent: 0 ETH
> total cost: 0.074254866 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.159617409 ETH

# Summary

> Total deployments: 4
> Final cost: 0.164374686 ETH

address that mints 0xA39Fd52147Cd7320e164e4017DAda772eE9b75bB

address that buys 0xf0a79cB6b1F080A1147de9B282b5F6027936B102

token https://testnets.opensea.io/collection/bathini-token
