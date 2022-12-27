const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_API}`);
const address = '0xb12c5fc63084A9F9d94637c200bBFC32071Ee459';

const main = async() =>{
    const balance = await provider.getBalance(address);
    console.log(`\n ${address} Hesabındaki ETH Miktarıı: ${ethers.utils.formatEther(balance)}ETH\n`)
}
main();