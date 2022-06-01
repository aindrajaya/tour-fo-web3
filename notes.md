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
2. Terminology
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