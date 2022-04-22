# A TOUR OF WEB3'S ETHEREUM
[New Link](https://theprimeagen.github.io/web3-smart-contracts/)
**Build something fail, get better, learn why and slowly build over time**
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
[GAMBAR - Hardhat menu]
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
Notes Code Explanation (without pure and memory): The line codes means, a `hello()` function hanging out the `HelloContract` contract, the `public` means anyone can call it, and `returns` to `string` and the "Hello, World" is the string that we expect to return.
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
[GAMBAR - Error when compile]
It will show an error about Solidity version doesn't match any compiler, because we never configure something before, especially in the `hardhat.config.js`. The default configuration on our `hardhat.config.js` written like this:
```js
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3"
}
```
Try to change the solidity version that written "0.7.3" to version "0.8.10", so the code will be like this:
```js
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10"
}
```
But if you still see another warning, that's fine. And then, congrats, you compile your first contract. Wohooo!! 
But... What's next?
Testing? Oh yeah, that's it. You should do testing before run it or deploy it to the network (test or main). Because we need to make sure our contracts are running as our expectation. In hardhat we need to add some libraries again, and don't forget to make it stay in our development environment.
```bash
$ yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
And then you can also add the typescript configuration, like this:
```bash
$ yarn add --save-dev ts-node typescript
```
The last one you should adding the testing types, and most of smart contract developer will used `chai` as the primarily testing libraries (in this case we need typescript configuration too for chai).
```bash
$ yarn add --save-dev chai @types/node @types/mocha @types/chai
```
Because we already install and will implement some typescript, don't forget to change the `hardhat.config.js` file to become `hardhat.config.ts`. It will automatically change our file into typescript based file. After that, add on the top of the line from file `hardhat.config.ts` this code:
```ts
import "@nomiclabs/hardhat-waffle"; 
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
};
```

### Test Contract
After we do this, let's write some test. Remember, based on our explanation before about the project structure, we should create `test` folder before we create the test file(s). And then you can name the test file(s) whatever you want (don't forget we used typescript based file). Import the nomiclabs hardhat (you can see it [here](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers) for more explanation), but the simplify of it, it's the plugin that allows us to interact with the Ethereum blockchain in a simple way (If you have experience on using Truffle, it will needs to run local blockchain before running all of Truffle services), so that's why Hardhat have a little bit easiness for me personally, and safe my memory usage when I develop blockchain in our local computer, for more about hardhat you can see (here)[how hardhat working?](https://hardhat.org/getting-started/).
The flow that running in our test file, it will be make communication with our compiled contracts (ABI) that saved on the `artifacts/contracts` folder. And then the binary code will make interaction with Ethereum node.
So, here's the code test that we will be use to test our smart contract and then call our hello() function.
```ts
import _ from "@nomiclabs/hardhat-ethers";

import {ethers} from "hardhat";
import {expect} from "chai";

describe("hello world", () => {
  It("should be get the hello world", async function(){
    //1. Setup, just call the name of your contract (contract name), not the file name.
    const contract = await ethers.getContractFactory("HelloContract");

    //2. Deploy our contract using deploy and deployed function from nomiclabs/hardhat-ethers
    const hello = await contract.deploy();
    await hello.deployed();

    //3. Call our functions to test    
    expect(await hello.hello()).to.equal("Hello, World")
  })
})
```
Then run: 
```bash
$ npx hardhat test
```
At the first you will see error, just like this (I'hope it will be solved), and then you just run again the recommendation commands on this error, or you can follow the step below about what should be write in our command line.
[GAMBAR: ts config hardhat test]
```bash
$ yarn add -D ts-node
'After done, run test again'
$ npx hardhat test
```
[GAMBAR: ]
So, what's just happen? First of all, the simply explanation is, we test our function inside our smart contract before, that called `hello()`, so the function `hello()` will be run and provide string "Hello, World", if we change our test with another string, it will cause an error and the test is failed. And for more explanation, where we can interact with our smart contract? I don't see anything running outside our project. Yes, that's true. Hardhat have the ability to running up the Ethereum blockchain instantly according to our purpose. So, if you see in our last line of code that call the `hello()` function, that's the power of hardhat that can make Ethereum network virtually running inside our project, call the `hello()` function to show the "Hello, World" string to test.

### Deploy Process
And then, what's next? We should deploy our contract to the 
The next one is about how we deploy our smart contract on the Ethereum-like network, it can show you on how our smart contract runs in the real condition. At this process we use the Ethereum Rinkeby test network. [RINKEBY TEST DEPLOY]
We must create a new file that will handle our deploy process, you can use any names that you likes. But it must be end with `.ts` because we use typescript. Where we place this deploy files? At first you must create folder called `scripts`, and then you can place your deploy files inside this folder.
Here's the command line:
```bash
'Go to root folder of your project'
$ mkdir scripts && cd scripts
$ touch deploy-my-contract.ts
```
After that you can write a bunch of code inside that file.
```ts
import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";

async function deploy(){
  //1. Get the contract factory
  const MyContract = await ethers.getContractFactory("HelloContract");

  //2. It will build a json request, json-rpc request over to eth network, and the the network will call an event to begin a transaction
  const hello = await MyContract.deploy();

  //3. When the process before is done, we will deployed the contract.
  await hello.deployed();

  //4. All of the response will be returned. And named to hello
  return hello;
}

// @ts-ignore
async function sayHello(hello){
  //5. It will execute a function inside the contract, the `hello()` function literally the function that we create on our smart contract (request out of the network ).
  console.log("Say hello:", await hello.hello());
}

deploy().then(sayHello);
```
The flow of the code that we write, first, we deploy
After you write the code who handle the deployment process. We can test it. But before you run the deploy scripts, you must also run the Hardhat node instance, it will provides bunch of Ethereum address for test and deploy purpose on our local computer (just like a Ganache from Truffle, if you know). This is the code:
- Running local Ethereum environment, please use another terminal (or open up new terminal)
```bash
$ npx hardhat node
``` 
- Deploy command:
```bash
$ npx hardhat run scripts/deploy-contract.ts --network localhost
```
Note: 
--> `--network`, it will choose the network that you will use to deploying your contract, it can be Rinkeby, Mainnet or localhost after the `--network` command
--> `localhost`, it means that you will deploy your contract on your local network, or the scripts will tell you where to run (using hardhat node instances)

## Conclusion
What we've do is trying simple example for doing dApp development by using copy of Ethereum. There is some different process that happening when we try to implement web3.0 than web2.0. There is a [RPC](https://techterms.com/definition/rpc) (Remote Procedure Call) request that happening when we just call our "Hello World" function and showing on our terminal console. 
What's next? There is some issues that yet to be solved, such as explanation about `pure` and also `memory` in our smart contract file. It could be discussed later, after this article. Thank you!! 

PART 4 - Add the Metamask Integration and Web Browser show the Return value from our smart contract
-> Metamask config
Provider explanation
This article will be one of tutorial series for my Mastering Ethereum Development using Hardhat and Typescript. If you already done with the [part 3](https://aindrajaya.medium.com/mastering-blockchain-development-deploying-smart-contract-using-hardhat-node-and-typescript-9383bcdad6ee) tutorial you should be try this one. At first we should know about what we will used for this tutorial.
### What is MetaMask?
MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications. We will using this tools to make integration with our browser, so the `hello()` function from our dApp can be showed in our browser. 
### Configure MetaMask
Here's a step-by-step to integrating the MetaMask with our dApp.
1. Add MetaMask browser Extension, through this [link](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
2. Run hardhat-node, make sure our localhost running.
```bash
$ npx hardhat node
```
3. Config your MetaMask by choose the network and pointing to your localhost node that run by Hardhat-node. Open your MetaMask extension and choose the `localhost:8548`.
[GAMBAR]
If you haven't any accounts you should import the private key that also provides by hardhat-node.
[GAMBAR]
====
Before we going deep dive practice on showing the return value from local Ethereum node, we don't forget to copy the deployed smart contract that available in your terminal that running hardhat-note. Copy the contract address. And then create a .env file, like this:
```bash .env
CONTRACT_ADDRESS=0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
```
====
-> Webpack configuration for .ts file
After we config our MetaMask and working correctly with our Hardhat node, we should config one of the most important thing. That's `webpack` configuration.
### What is Webpack
Webpack it the JavaScript bundler that can help us to integrate our JavaScript code with the html and css while running some services. And the official statement from webpack documentation mention that, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.
### Configure Webpack
First thin before you write Webpack configuration you can add this command:
```bash
$ yarn add -D webpack webpack-cli ts-loader html-webpack-plugin dotenv
```
Here's the code that you can follow:
```js
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.ts", //entry point to execute
  output: {
    path: path.resolve(__dirname, "build"), //output directory
    filename: "coba.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".json"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    })
  ],
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      Poll: 1000
    }
  }
};
```
And you will also need this line of code to make sure typecript running well in this project, but you need to create a file called,  `tsconfig.json`:
```ts
{
    "compilerOptions": {
        //Avoid accessors are only available when targeting ECMAScript 5 and higher.
        "target": "ES5", 
        "resolveJsonModule": true,
        "esModuleInterop": true
    }
}
```
-> index.html, index.ts integration
Next step after we configured and set up our Provider (MetaMask) and Webpack, we should create index.html and index.ts that we need to integration result from blockchain to show in our browser, simply explanation, we will call the hello() function from our smart contract and then show the result of that function appear on our browser.
Here's the code for `index.js`:
```ts
import {ethers} from "ethers"

console.log("Hello world, from web2')

//Call the address who deployed the contract -> usually the first accounts from hardhat-node evm
const hasSigners = async (any: boolean): Promise<boolean> => {
  //@ts-ignore
  const metamaskProvider = window.ethereum;
  const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
  return signers.length > 0;
}

//Requests that the user provides an Ethereum address to be identified by, the request cause a MetaMask popup to appear.
const requestAccess = async(any:boolean):Promise<boolean> => {
  //@ts-ignore
  const result = (await window.ethere.request({method: 'eth_requestAccounts'})) as stringp[];
  return result && result.length > 0;
}

//Run the main process to show the string from smart contract to the Html/ Browser
const show = async() => {
  const address = provess.env.CONTRACT_ADDRESS;
  
  if(!(await hasSigners && await requestAccess)){
    console.log("Cannot connect to the blockchain")
  }
  
  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const getContract = new ethers.Contract(
    address,
    [
      "function hello() public pure returns(string memory)"
    ], //ABI
    provider
  )

  console.log("Process successfully done")
  console.log(await getContract.hello())
  document.body.innerHTML = await getContract.hello()
}

show()

```
And you can add the standard html 5, in your code editor just like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
[Summary]
Here's the fully tutorial about fundamental blockchain development, and I also discuss the flow of each process to make data from hardhat-note appear on my web browser. Here's the link of myth complete repository at [Github](https://github.com/aindrajaya/web3-first-glance)
```
==
2. Terminology
### Terminology
--> Web3: In general means blockchain tech with some purpose
--> Ethereum: The blockchain we will we be developing with
--> Provider/Metamask: Form Ethers docs: "A Provider abstracts a connection to the Ethereum blockchain, for issuing queries and sending state changing transactions". (Kind of the pipe that will send your request to a certain network (wherever it does, because the provider know where to send your request) and then return the result that you needs. In this case, we send the metamask objet and then we request the data information about hello() function from ether protocol to show hello, world the results of hello() function.
Meaning that ethers does not know where your network is, it effectively needs the pipe.
--> Contract: This is code written in Solidity that has been compiled and deployed onto a network. It has an address that is no different than a wallet address. (Contract has an address that identically same with the wallet address)
--> Wallet: The blockchain, its a private + public key combo (really you just need a private key)
--> BTW: The ability to tell someone that you know something that they likely don't, or you use some obscure technology.
--> Let me give you an example: I use VIM, I type with Dvorak, I rite CLI programs with Rustlang.
### Technology
--> `ethers` : `import {ethers} from "ethers";`. This library that abstracts the complications communication.
--> hardhat: its a backbone of any project these days. It provides compiling, testing, and deployment support. When you write get a `getContractFactory("HelloWorld")` it actually just loads the file from the json build file.
--> Metamask: its a browser plugin for wallets.
You will notice that in the code on the web I don't reference hardhat, because hardhat is a library (Hardhat purely on the infrastructure side).
Difference Web3.js and ethers.js -> Web3 has more functionality, and ethers (just like jQuerye) is really simple.
==
3. Solidity Language Basics
Solidity
If you are famillar with C based language, it will be a breeze.
* IF
```sol
if(<boolean expr produce true/false>){
  conditionals
} else if(...){
  second conditionals
} else {
  //return error
}
```
* LOOPS
``sol
for(uint i = 0; i < 10; i++){
  ...return something that looped
}
```
* CONTRACTRS
```sol
contract Name{
  ...
  constructor(){
    //I am called once at contract deploy
  }

  function name() scope returns(type){
    ...
  }
}
```
* SIMPLE TYPES
uint = 256 bit number, uint8. uint16, uint32..., The base types of the Solidity is a 256 bit number. 
Strings is suck, so don't do them. Explanation, That's the general rula of thum is that unless if you have a bunch of hard coded ones, you're gonna construct some sort of output with, working with string is painful because the base type is 256 bit number, so we're kind of mashing strings into these number representations.
It will be good if we can avoid string in the things I've written every single time except for meta information generation by simply just concatenate a bunch of stuff together that are hard coded strings and pulling out data.
  - Arrays: There are dynamic and static
```sol
contract Foo {
  uint[] foo; //Hello I am dynamic, if you specify array on the contract as a member, it's a dynamic array.
  function foofoo() public view{
    uint[] fooo = new uint[](10); //I am fixed array, if you specify an array inside the function, you specicy is a fizxed array. And you cannot inline generate an array right now
  }
}
```
  - Maps: these much different. You cannot iterate. It's different that's different from what you're used to, it's a mapping, not necesarilty a map, a map stoers keys and values. Mapping do not stores keys, and they technically don't even store values.
```sol
contract Foo{
  mapping(uint => address[]) mymap;
  //Explanation, you do a mapping from type to type and the type can even be a complex type (array[]), and it will do some super special magic underneath the hood, and it will be able to store that but you cannot for each over keys, and you cannot for each over values. You don't even know how many items are inside of your map because it's actually just simply a mathematical function that gets executed. (for now, keep it that way)
}
```
  - Structs: just like on c, you can create a mapping to a mapping that is uint to array. So there is no, you can do all the standard mixes you'd like. There also enums.
```sol
struct Foo{
  uint a;
  uint b;
  uint c;
}
mapping(uint => Foo) mymap;
Foo[] myarr;
```
QA
 - Why does Solidity exist? Why couldn't they have just made a librarty from Python or another language? 
 ANS: With Solidity, we see pretty much all the problems you've ever wanted have all ready been solved, and it works very wel lfor what they want. And when you break into inlie assembly, it works very, very well.
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