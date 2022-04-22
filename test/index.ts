import { ethers } from "hardhat";

describe("Migrations Contract Test", function () {
  it("Should set msg.sender as owner", async function () {
    const signers = await ethers.getSigners();
    const Migrations = await ethers.getContractFactory("Migrations");
    const migrations = await Migrations.deploy();
    await migrations.deployed();
    console.log(signers[0]);
  });
});
