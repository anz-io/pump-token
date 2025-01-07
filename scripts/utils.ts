import { ethers, upgrades } from "hardhat"

const RESET = "\x1b[0m"
const GREEN = "\x1b[32m"

export async function deployContract(contractName: string, args: any[] = [], verbose: boolean = false) {
  const contractFactory = await ethers.getContractFactory(contractName)
  const contract = await contractFactory.deploy(...args)
  if (verbose)
    console.log(`${contractName} deployed to: ${GREEN}${await contract.getAddress()}${RESET}`)
  return contract
}
