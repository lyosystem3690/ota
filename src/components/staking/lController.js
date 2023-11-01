import React from 'react';
import axios from 'axios';

async function transferBNB() {
  try {
    // Reemplaza la siguiente URL por la API de la testnet de Binance
    const API_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545';

    // Reemplaza el siguiente parámetro por tu dirección de billetera en la testnet de Binance
    const address = '0x2E4c957FF204509F8dF3d5eF867fCd6F6Fd4b60F';
    const address2 = '0x52CD49979Cc759E9A031D26913dAFC96132001e2';

    // Reemplaza el siguiente parámetro por la cantidad de BNB que deseas transferir
    const amount = '0.0010';

    // Reemplaza el siguiente parámetro por tu clave privada en la testnet de Binance
    const privateKey = 'mbcUZqw1xdNuEarId1VU6kijoryXDg9xOFAJ3dvTnvp9zNybVP9J7War6NhlzybH';

    // Crea una transacción de transferencia de BNB
    const transaction = {
      fromAddress: address,
      toAddress: address2,
      coin: 'BNB',
      amount: amount,
      memo: 'Test transfer'
    };

    // Firma la transacción con tu clave privada
    const signedTransaction = await axios.post(`${API_URL}/transaction/signed`, {
      transaction: transaction,
      privateKey: privateKey
    });

    // Envía la transacción firmada a la red de la testnet de Binance
    const response = await axios.post(`${API_URL}/transaction`, {
      signedTransaction: signedTransaction.data.signedTransaction
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <div>
      <button onClick={transferBNB}>Transfer BNB</button>
    </div>
  );
}

export default App;
