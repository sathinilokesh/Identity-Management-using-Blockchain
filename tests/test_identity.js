const Identity = artifacts.require("Identity");

contract("Identity", accounts => {
  it("should register a new identity", async () => {
    const instance = await Identity.deployed();
    await instance.registerIdentity("John Doe", "john@example.com", "1234567890", { from: accounts[0] });
    const identity = await instance.getIdentity(accounts[0]);
    assert.equal(identity[0], "John Doe");
    assert.equal(identity[1], "john@example.com");
    assert.equal(identity[2], "1234567890");
  });

  it("should update an existing identity", async () => {
    const instance = await Identity.deployed();
    await instance.updateIdentity("Jane Doe", "jane@example.com", "0987654321", { from: accounts[0] });
    const identity = await instance.getIdentity(accounts[0]);
    assert.equal(identity[0], "Jane Doe");
    assert.equal(identity[1], "jane@example.com");
    assert.equal(identity[2], "0987654321");
  });
});
