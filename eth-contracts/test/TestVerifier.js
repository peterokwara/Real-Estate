const Verifier = artifacts.require("Verifier");
const zokratesProof = require("../../zokrates/code/square/proof.json")

contract("Test Verifier", accounts => {

    const owner_account = accounts[0];

    beforeEach(async () => {
        this.contract = await Verifier.new({ from: owner_account });
    });

    // test with the correct proof
    it('should verify correct proof', async () => {
        let result = await this.contract.verifyTx.call(...Object.values(zokratesProof.proof), zokratesProof.inputs);
        assert.equal(result, true, "Proof should be correct");
    });

    // test with incorrect proof
    it('should not verify incorrect proof', async () => {
        let result = await this.contract.verifyTx.call(...Object.values(zokratesProof.proof), [19, 20]);
        assert.equal(result, false, "Proof should be incorrect");
    });

});


