import { ethers } from "ethers"

console.log("Hello world, from web2")

const hasSigners = async (any:boolean): Promise<boolean> => {
  //@ts-ignore
  const metamask = window.ethereum;
  const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
  return signers.length > 0;
}

const requestAccess  = async (any:boolean) :Promise<boolean> => {
  //@ts-ignore
  const result = (await window.ethereum.request({method: 'eth_requestAccounts'})) as string[];
  return result && result.length > 0;
}

const show = async () => {
  const address = process.env.CONTRACT_ADDRESS;

  if(!(await hasSigners && await requestAccess)){
    console.log("Contract hasn't detected");
  }

  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new ethers.Contract(
    address,
    [
      "function hello() public pure returns(string memory)"
    ], //ABI
    provider
  )

  console.log("Process successfully done!");
  console.log(await contract.hello());
  document.body.innerHTML = await contract.hello()
}

show()

