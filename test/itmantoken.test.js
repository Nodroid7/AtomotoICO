const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ATOMOTOSToken", () => {
  it("Should return the token name", async () => {
    const ATOMOTOSToken = await ethers.getContractFactory("ATOMOTOSToken");
    const ATOMOTOSToken = await ATOMOTOSToken.deploy();
    await ATOMOTOSToken.deployed();

    expect(await ATOMOTOSToken.name()).to.equal("ATOMOTOSToken");
  });

  it("Should return the token symbol", async () => {
    const ATOMOTOSToken = await ethers.getContractFactory("ATOMOTOSToken");
    const ATOMOTOSToken = await ATOMOTOSToken.deploy();
    await ATOMOTOSToken.deployed();

    expect(await ATOMOTOSToken.symbol()).to.equal("ITM");
  });

  it("Should return decimals", async () => {
    const ATOMOTOSToken = await ethers.getContractFactory("ATOMOTOSToken");
    const ATOMOTOSToken = await ATOMOTOSToken.deploy();
    await ATOMOTOSToken.deployed();

    expect(await ATOMOTOSToken.decimals()).to.equal(18);
  });

  it("Should have total supply", async () => {
    const ATOMOTOSToken = await ethers.getContractFactory("ATOMOTOSToken");
    const ATOMOTOSToken = await ATOMOTOSToken.deploy();
    await ATOMOTOSToken.deployed();

    expect(await ATOMOTOSToken.totalSupply()).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
  });
});
