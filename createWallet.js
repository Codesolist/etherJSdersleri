const { ethers } = require("ethers");
require("dotenv").config();

function cuzdanKur(){
    const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_API}`);
    const wallet = new ethers.Wallet.createRandom(provider)
}

cuzdanKur()