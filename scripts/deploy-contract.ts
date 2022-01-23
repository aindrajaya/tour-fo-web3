import "@nomiclabs/hardhat-ethers"
import {ethers} from "hardhat"

async function deploy(){
  const MyContract = await ethers.getContractFactory("HelloContract");
  const hello = await MyContract.deploy();
  await hello.deployed();

  return hello;
}

// @ts-ignore
async function sayHello(hello){
  console.log("Say hello:", await hello.hello());
}

deploy().then(sayHello);