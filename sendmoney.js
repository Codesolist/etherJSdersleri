const { Application } = require("discord.js");
const { ethers } = require("ethers")
require("dotenv").config();

/**
 * TestNet: https://goerli.infura.io/v3/
 * MainNet: https://mainnet.infura.io/v3/
 */

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_API}`);

const hesap1 = '0xb12c5fc63084A9F9d94637c200bBFC32071Ee459';
//const privatekey = process.env.GONDERENKEY2;
const privatekey = process.env.GONDERENKEY1;
const hesap2 = '0x78023eaf481146b54751F55922F70e74cfbd877E';
const miktar = '0.0030';
const wallet = new ethers.Wallet(privatekey, provider)

const main = async() =>{
    const senderBalanceBefore = await provider.getBalance(hesap1)
    const recieverBalaceBefore = await provider.getBalance(hesap2)

    console.log(`\nİşlem Öncesi Göndericinin Bakiyesi: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`\n İşlem Öncesi Alıcının Bakiyesi: ${ethers.utils.formatEther(recieverBalaceBefore)}\n`)

    const transaction = await wallet.sendTransaction({
        
        to:hesap2,
        value: ethers.utils.parseEther(miktar)
    })

    await transaction.wait()
    console.log(transaction)

    const senderBalanceAfter = await provider.getBalance(hesap1)
    const recieverBalaceAfter = await provider.getBalance(hesap2)

    console.log(`\nİşlem Sonrası Gönderici Bakiyesi: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`İşlem Sonrası Alıcı Bakiyesi: ${ethers.utils.formatEther(recieverBalaceAfter)}\n`)
}
main()