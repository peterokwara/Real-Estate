const ERC721Token = artifacts.require('./ERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const totalSupplyAccountOne = 5;
    const totalSupplyAccountTwo = 10;
    const totalSupply = totalSupplyAccountOne + totalSupplyAccountTwo;

    const tokenURIOne = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
    const tokenURITwo = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2";

    describe('match erc721 spec', function () {
        beforeEach(async function () {

            // Create a new token
            this.contract = await ERC721Token.new({ from: account_one });

            // Mint multiple tokens for account one
            for (let index = 0; index < totalSupplyAccountOne; index++) {
                await this.contract.mint(account_one, index, { from: account_one });
            }

            // Mint multiple tokens for account two
            for (let index = totalSupplyAccountOne; index < totalSupply; index++) {
                await this.contract.mint(account_two, index, { from: account_one });
            }

        })

        it('should return total supply', async function () {

            // Get the total supply
            const result = await this.contract.totalSupply.call();

            // Check if total supply from the contract matches to the value set in the test
            assert.equal(totalSupply, result, "Total supply is not equal");
        })

        it('should get token balance', async function () {

            // Get the balance of account one and account to
            const account_one_balance = await this.contract.balanceOf(account_one);
            const account_two_balance = await this.contract.balanceOf(account_two);


            // Check if the balance matches the total supply for the two accounts
            assert.equal(account_one_balance, totalSupplyAccountOne,
                "Total supply for account one is not equal to it's balance");
            assert.equal(account_two_balance, totalSupplyAccountTwo,
                "Total supply for account two is not equal to it's balance");

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

            // Get the token URI
            const resultOne = await this.contract.tokenURI(1);
            const resultTwo = await this.contract.tokenURI(2);

            // Check if the token URI has been set connectly
            assert.equal(tokenURIOne, resultOne, "The Token URI does not match the token URI stored by the contract");
            assert.equal(tokenURITwo, resultTwo, "The Token URI does not match the token URI stored by the contract")

        })

        it('should transfer token from one owner to another', async function () {

            await this.contract.transferFrom(account_two, account_one, (totalSupply - 1), { from: account_two });
            let result = await this.contract.ownerOf(totalSupply - 1);
            assert.equal(account_one, result);

            // Check if account one looses a token
            result = await this.contract.balanceOf(account_one);
            assert.equal(totalSupplyAccountOne + 1, result, "Account one gains one token");

            // Check if account two looses a token
            result = await this.contract.balanceOf(account_two);
            assert.equal(totalSupplyAccountTwo - 1, result, "Account two looses one token");

        })

    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721Token.new({ from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {

            try {

                // Try to mint from an account which is not the contract owner
                await this.contract.mint(account_two, 1, { from: account_two });
            } catch (error) {
                assert.equal(error.reason, "Caller is not contract owner");
            }

        })

        it('should return contract owner', async function () {

            // Get the contract owner and check if it's equal to account one
            let result = await this.contract.owner();
            assert.equal(account_one, result);

        })

    });
})