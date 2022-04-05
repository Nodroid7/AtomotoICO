const { expect } = require("chai");
const { ethers } = require("hardhat");

async function latestTime() {
  const block = await ethers.provider.getBlock("latest");
  return block.timestamp;
}

const duration = {
  seconds(val) {
    return val;
  },
  minutes(val) {
    return val * this.seconds(60);
  },
  hours(val) {
    return val * this.minutes(60);
  },
  days(val) {
    return val * this.hours(24);
  },
  weeks(val) {
    return val * this.days(7);
  },
  years(val) {
    return val * this.days(365);
  },
};

describe("ATOMOTOSTokenCrowdsale", () => {
  it("Should have 70% of ATOMOTOSToken tokens", async () => {
    const ATOMOTOSToken = await ethers.getContractFactory("ATOMOTOSToken");
    const ATOMOTOSToken = await ATOMOTOSToken.deploy();
    await ATOMOTOSToken.deployed();

    expect(await ATOMOTOSToken.name()).to.equal("ATOMOTOSToken");
    expect(await ATOMOTOSToken.symbol()).to.equal("ITM");
    expect(await ATOMOTOSToken.decimals()).to.equal(18);
    const totalSupply = await ATOMOTOSToken.totalSupply();
    expect(totalSupply).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
    const owner = await ATOMOTOSToken.owner();

    const latestBlockTime = await latestTime();
    const openingTime = latestBlockTime + duration.minutes(1);
    const closeTime = openingTime + duration.weeks(1); // 1 week

    const ATOMOTOSTokenCrowdsale = await ethers.getContractFactory("ATOMOTOSTokenCrowdsale");
    const rate = 500; // 500 wei per token
    const ATOMOTOSTokenCrowdsale = await ATOMOTOSTokenCrowdsale.deploy(
      rate,
      owner,
      ATOMOTOSToken.address,
      owner,
      openingTime,
      closeTime
    );

    await ATOMOTOSTokenCrowdsale.deployed();

    await ATOMOTOSToken.approve(
      ATOMOTOSTokenCrowdsale.address,
      totalSupply.mul(ethers.BigNumber.from(70)).div(ethers.BigNumber.from(100))
    );

    expect(await ATOMOTOSTokenCrowdsale.rate()).to.equal(rate);
    expect(await ATOMOTOSTokenCrowdsale.remainingTokens()).to.equal(ethers.BigNumber.from("700000000000000000000000"));
  });
  // TODO: add unit test for time validation
  // TODO: add unit test for token allocation
});
