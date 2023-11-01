import React, { useState, useEffect } from 'react';
import web3 from './web3';
import nftContract from './nftContract';

function NFTID() {
  const [nftID, setNFTID] = useState(0);

  useEffect(() => {
    const getNFTID = async () => {
      const accounts = await web3.eth.getAccounts();
      const id = await nftContract.methods.id().call({ from: accounts[0] });
      setNFTID(id);
    };

    getNFTID();
  }, []);

  return (
    <div>
      <p>El ID del NFT es: {nftID}</p>
    </div>
  );
}

export default NFTID;