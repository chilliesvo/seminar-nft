const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Monkey", () => {
    beforeEach(async () => {
        const accounts = await ethers.getSigners();
        deployer = accounts[0];
        user1    = accounts[1];
        user2    = accounts[2];

        const Monkey = await ethers.getContractFactory("Monkey");
        monkey = await Monkey.deploy();
    })

    it("", async () => {
        
    })
})