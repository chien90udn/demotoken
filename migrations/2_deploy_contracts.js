var DEMOToken = artifacts.require("./DEMOToken.sol");
module.exports = function(deployer) { deployer.deploy(DEMOToken, {gas: 2000000});};
