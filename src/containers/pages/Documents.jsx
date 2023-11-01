/*
import Binance from 'binance-api-client';


const binance = new Binance();

async function transferBNB(recipientAddress, amount) {
  try {

    let YOUR_API_KEY ='mbcUZqw1xdNuEarId1VU6kijoryXDg9xOFAJ3dvTnvp9zNybVP9J7War6NhlzybH';
    let YOUR_API_SECRET ='1uXBdP4xn8sktb0Ae1FfpgQFjvsQYvNfefyAHE2q87pPBv3RdsgzVobyvmpgcVUr';

    // Autentica la API de Binance con tu clave API y tu clave secreta
    await binance.authenticate(YOUR_API_KEY, YOUR_API_SECRET);

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


transferBNB('0x52CD49979Cc759E9A031D26913dAFC96132001e2',0.001);

*/