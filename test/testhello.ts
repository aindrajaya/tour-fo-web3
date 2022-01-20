import _ from "@nomiclabs/hardhat-waffle";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello test", () => {
  it("should be get the hello world string", async function(){
    //1. Setup, just call the name of your contract (contract name), not the file name.
    const OurContract = await ethers.getContractFactory("HelloContract");

    //2. Deploy our contract using deploy and deployed function from nomiclabs/hardhat-ethers
    const DeployContract = await OurContract.deploy();
    await DeployContract.deployed();

    //3. Call our functions to test    
    expect(await DeployContract.hello()).to.equal("Hello, World");
  })
})