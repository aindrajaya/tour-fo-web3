# A TOUR OF WEB3'S ETHEREUM
-------------------------
# TABLE OF CONTENTS
The sort of comprehensive tour of the atheneums blockchain
## The Introduction
1. Introduction
THE YEAR OF CRYPTO
---------------------------------------
# Why am I doing this?
I am not going to sell you on anything. I am not going to tell you that crypto is 100% the future. I have no idea what the future will be and crypto is a very interesting topic to say the least. From a personal stand point, I think its just interesting. I think every developer should at least play with it and see how it goes.
--> It very well may disrupt everything that we understand today.
--> It very well may never go anywhere.
==============================

# The Goal of this Course
The goal of this course is not to be another how tu build an ethereum react app. Instead I want this to be a well rounded introduction into writing and interacting with the ethereum blockchain.
--> I want you to walk away and be able to build anything you want.
==============================

# The Course Outline
P1. The Foundation
--> The "Hello, Universe" contract.
  >>> building a HelloWorld contract
  >>> Testing it
  >>> Deploying it
  >>> Communicating from the browser
P2. Understanding Solidity
--> A slightly more complex contract with reading and writing
--> On Rinkeby
P3. Complex Contract
--> Core Concept
  >>> Arrays
  >>> Mappings
  >>> Bits
    >>> What does this mean? 
```sol
a & b == b
(0x1 << 3)-1
```
  >>> Testing, Deploying, Communicating
P4. Solve the needing to update your contract
--> Things we will a bit complicated here. But it is a must for any developer.
==============================

# GO
--> Ready?
We are going to something a bit different than the usual course. We are going to start by simply writing, deploying, and testing a contract.
--> Why code first?
I firmly believe that the best way to become good at anything is to do said thing. I could spend a significant amount of time going through the following;
  >>> Declaring variables
  >>> if statements
  >>> for loops
  >>> inheritance
--> Why Ethereum?
  >>> Its really the best place to start (language is simple, the concepts are not that hard, its extremely popular)
--> Some Basic Assumptions
  >>> I assume you understanding programming
  >>> I assume you aremidly familiar with typescript and ist echo system
--> Why not use the ethereum IDE for dev?
  >>> I really think that it is best to understand your environment before you use things that abstract it away from you.
--> console.log
  >>> Yes, there will be times we will use this as our primarily debugging tool. Most of it will be on purpose, definitely never on accident.
--> Pacing
  >>> We will start off by assuming you know nothing about smart contract development, but we will speed up significantly towards the end.
============================

## Getting our feet Wet
==
1. Your First Contract
### First Contract using Hardhat
```bash
mkdir your-project
cd your-project
git init
yarn init -y
yarn add -D hardhat
npx hardhat 
```
### Typical Structure
First of all , Hardhat is a tool for building and deploying contracts to any Ethereum network. Before we create our first contract, lets talk about folder structure. And don't forget the .gitignore to ignore all the files inside the node_module.
```
your-project
  - contracts
    - YourContracts.sol
    ...
  - scripts
    - deploy.ts
    ...
  - test
    - sometest.js
    ...
```
Create first contract, create a file in contracts folder named HelloContract.sol. And the `.sol` is mean that solidity, which is the programming language that used for developing smart contract in Ethereum. For the file contract is up to you, you can name it as you want, because the name file of your contract has no meaning on how its compile as long as it ends with .sol.
First thing that you need to do when you write solidity file is you need to tell the compiler that used to compile your contract, because you need to tell the solidity what the compiler that you need to expect run or compile your contract. And then you write `pragma`, it's just kind of precompile command. You can write this one: 
```sol
//Code 1
pragma solidity ^0.8.0;
```
It means that you expect at least this version of compiler will run/compiler your contract, just same thing when you write the version of the libraries on the `package.json`. And then the next one you also define the name contract, it's just same structure code when we write a class in javascript. The code will be like this:
```sol
pragma solidity ^0.8.0;

//Code 2
contract HelloContract {

}
```
For the code that we wrote before. The simply explanation about it, the code is just like a state container with some function to mutate it (we will write later), and it's just like a class, it also has the constructor that only execute only once when you deploy the contract (or one time executed). The next code, you can add this:
```sol
pragma solidity ^0.8.0;

contract HelloContract {
  function hello() public pure returns(string memory){
    return "Hello, World";
  }
}
```
Seem familiar with these line of codes? For sure, it's the first code that usually write when we learning a new programming language, and this is the Solidity should be write when declare `Hello World` thing, because Solidity has their own style. But if you feel confused for another command, that's okay, maybe you're not familiar with the command `pure` and `memory`, and that's the differences (we will discuss later).
Notes Code Explanation (without pure and memory): the line codes means, a `hello()` function hanging out the `HelloContract` contract, the `public` means anyone can call it, and `returns` to `string` and the "Hello, World" is the string that we expect to return.
Ooops, I think we forget to add license version of our contract. You can add here:
```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloContract {
  function hello() public pure returns(string memory){
    return "Hello, World";
  }
}
```
What's the reason? it just make us, as the developer can identifier specific license that used in our solidity file. The complete explanation you can se [here](https://forum.openzeppelin.com/t/solidity-0-6-8-introduces-spdx-license-identifiers/2859)
Okay, the next one we should compile our contract, so we can now what's happen. Write this command to your command line interface:
```bash
npx hardhat compile
```
==
2. Terminology

==
3. Solidity Language Basics
============================

## Solidity Fundamentals
1. The Counter Contract
2. Gas
============================

## The Game
1. The Game: Intro
2. The Game: The Contract
============================

## Solidity 201
1. Diamonds are Forever
2. Fallbacks
3. Delegate Calls
4. Storage
5. Lucky in the sky with Diamonds
============================

## The Outro 
1. Outroduction
============================