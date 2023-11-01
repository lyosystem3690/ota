import React, { useState } from 'react';
import binance  from 'binance-api-client';



const ll = ({
  YOUR_API_KEY
}) => {




    async function up()  {  
      try {
    let YOUR_API_KEY ='mbcUZqw1xdNuEarId1VU6kijoryXDg9xOFAJ3dvTnvp9zNybVP9J7War6NhlzybH';
    let YOUR_API_SECRET ='1uXBdP4xn8sktb0Ae1FfpgQFjvsQYvNfefyAHE2q87pPBv3RdsgzVobyvmpgcVUr';
    // Autentica la API de Binance con tu clave API y tu clave secreta
    await binance.authenticate(YOUR_API_KEY, YOUR_API_SECRET);

        let recipientAddress = '0x52CD49979Cc759E9A031D26913dAFC96132001e2';
        let amount = 0.001;

    // Realiza la transferencia de BNB
    await binance.transfer({
      asset: 'BNB',
      to: recipientAddress,
      amount: amount
    });

    console.log('Transferencia de BNB exitosa');
  } catch (error) {
    console.error(error);
  }


}

  up();

  return (
   <h1>fdfds</h1>
  );
}

export default ll;
