const SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
const Verifier = artifacts.require('./Verifier');
const zokratesProof = require("../../zokrates/code/square/proof.json");

contract("Test SolnSquareVerifier", accounts => {
    const account_one = accounts[0];
    const account_two = accounts[1];
    const tokenID = 1;

    beforeEach(async () => {
        let verifierContract = await Verifier.new({ from: account_one });
        this.contract = await SolnSquareVerifier.new(verifierContract.address, { from: account_one });
    });

    it("should add new solution", async () => {
        let added = false;

        try {
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, account_two, tokenID, { from: account_two });
            added = true;
        }
        catch (error) {
            console.log(error);
            added = false;
        }
        assert.equal(added, true, "Failed to add the solution");
    });

    it("should not add new solution if the proof was used previously", async () => {
        let added = false;

        try {
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, account_two, tokenID, { from: account_two });
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, account_two, tokenID + 1, { from: account_two });
            added = true;
        } catch (error) {
            added = false;
        }
        assert.equal(added, false, "Successfully added the solution");
    });

    it("should be able to mint new token after solution has been submitted", async () => {
        let success = false;

        try {
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, account_two, tokenID, { from: account_two });
            await this.contract.mint(account_two, tokenID, { from: account_one });
            success = true
        } catch (e) {
            success = false;
        }

        assert.equal(success, true, "Failed to mint a new token, after the solution has been submitted");
    });
});