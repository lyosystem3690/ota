import React, { useState } from "react";
import Web3 from "web3";

const contractAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];

function App() {
  const [result, setResult] = useState();

  async function transferBNB() {
    // Crea una instancia de Web3 utilizando una conexión a un nodo Ethereum
   // const web3 = new Web3("wss://stream.binance.com:9443/ws");
//    const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org/'));
    const web3 = new Web3(Web3.givenProvider);


    // Obtiene la dirección de tu billetera
    const [walletAddress] = await web3.eth.getAccounts();

    // Crea una instancia del contrato utilizando su ABI y dirección
    const contractAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    // Especifica la dirección de la billetera de destino y la cantidad de BNB que deseas transferir
    const toAddress = "0x99B2A3AEEf2809a1842e7E4d61b28E87BE18AF4A";
    let amount = 0.00001;
    amount = amount * 1000000000000000000;

    // eslint-disable-next-line no-undef
    amount = BigInt(amount,32);

    console.log(amount);

    // Realiza la transferencia de BNB utilizando la función "transfer" del contrato
    const res = await contract.methods.transfer(toAddress, amount).send({ from: walletAddress });

    setResult(res);
  }

  return (
    <div>
      <button onClick={transferBNB}>Transferir BNB</button>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
}

export default App;
