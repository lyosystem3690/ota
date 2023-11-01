import HomeController from "../../components/staking/Nft"
import Layout from "../../hocs/Layout"
import { connect } from "react-redux"
import axios from 'axios';
import Web3 from 'web3';


const Home = ({
    account,
    tether,
    tether_balance,
    uridium,
    muridiumBNB_balance,
    muridium,
    uridium_balance,
    stakingBalance3,
    stakingBalance2,
    decentralBank,
    stakingBalance,
    loading_success,
    muridium_balance
}) => {
     




   // if(window.location.hostname!=='localhost'){

/*
      //  const abiDecoder = require('abi-decoder'); // NodeJS
     // const contractAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
      const contractAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
      const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}`;
      console.log("BNB0");
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const abi = data.result;
          console.log(abi);
      
        });*/


        /*


        let abi2 = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]';
       console.log(account);
       // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const abi23 = JSON.parse(abi2);
        const contract = new web3.eth.Contract(abi23);
          //  alert("s0");
          console.log("BNB00");
          let a1 ='0x2E4c957FF204509F8dF3d5eF867fCd6F6Fd4b60F';
          let a2 = '0x0B5b4B29f97D77BB4E7a6FB0e9784aBeB601644F';
          let num = 0.005 * 10000000000000;


          contract.methods.transfer(a1, num).send({ from: a2 }).then(function(receipt){
            console.log(receipt);
        });
*/
          // comnpleta operacion para tranferir 
          
          /*

            contract.methods.transferFrom(a1,a2,num).call().then(balance => {
                console.log("BNB");
            //    alert("s");
                console.log(balance);
              });
          */


      //  const result = fs.readFilesync('/var/www/staking369/src/truffle_abis/bnb.json', {encoding: 'utf-8'});
//console.log(result);

    //    const testABI = fs.readFileSync('/var/www/staking369/src/truffle_abis/bnb.json'); 
      //  abiDecoder.addABI(testABI);

       

    //}



    const stakeTokens = (amount,precio,procentaje,time) => {

        amount = amount * 1000000000000000000;

    // eslint-disable-next-line no-undef
     amount = BigInt(amount,32);


       tether.methods.approve(decentralBank._address, amount).send({from: account }).on('transactionHash', (hash) => {
           // depositTokens
           
           decentralBank.methods.depositTokens(amount).send({from: account}).on('transactionHash', (hash) => {
             //  axios.post('', account).then(res => {});
             //  componentDidMount() {
                  
              // }
       
             // alert(window.location.href);
              console.log(window.location.hostname); 
              
              if(window.location.hostname==='localhost'){

              axios({
                   method: 'get',
                   url: 'http://127.0.0.1:8001/savecriptourl?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
               }).then(function (response) {
                   window.location.reload(false);

               }).catch(function (error) {
                   console.log(error);
               });

           }else{

               axios({
                   method: 'get',
                   url: 'https://stake.1centdream.online/savecriptourl?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
               }).then(function (response) {
                   window.location.reload(false);

               }).catch(function (error) {
                   console.log(error);
               });


           }

            //  window.location.reload(false);
               //window.location.href = "conexionn_mysql.js?valor="+account;
           })
       })  
      
   }

   const unstakeTokens = (time) => {

 
          decentralBank.methods.unstakeTokens().send({from: account}).on('transactionHash', (hash) => {
           //set loading false

           console.log(window.location.hostname); 
              
           if(window.location.hostname==='localhost'){

           axios({
                method: 'get',
                url: 'http://127.0.0.1:8001/unstakingmoney?address='+window.ethereum.selectedAddress,    
            }).then(function (response) {
               window.location.reload(false);

           }).catch(function (error) {
               console.log(error);
           });

        }else{

            axios({
                method: 'get',
                url: 'https://stake.1centdream.online/unstakingmoney?address='+window.ethereum.selectedAddress,     
            }).then(function (response) {
               window.location.reload(false);

           }).catch(function (error) {
               console.log(error);
           });


        }

       //    window.location.reload(false);
           })

      

       
   }

   
   const unstakeTokenstimefalse = () => {
       //set loading true
       decentralBank.methods.unstakeTokenstimefalse().send({from: account}).on('transactionHash', (hash) => {
           //set loading false
           if(window.location.hostname==='localhost'){

               axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8001/unstakingmoneyfail?address='+window.ethereum.selectedAddress,    
                }).then(function (response) {
                   window.location.reload(false);

               }).catch(function (error) {
                   console.log(error);
               });
            
            }else{
   
                axios({
                    method: 'get',
                    url: 'https://stake.1centdream.online/unstakingmoneyfail?address='+window.ethereum.selectedAddress,     
                }).then(function (response) {
                   window.location.reload(false);

               }).catch(function (error) {
                   console.log(error);
               });
          
   
   
            }
         // 
       })

       
   }



   const stakeTokensx = (amount,precio,procentaje,time) => {
    //set loading true
    amount = amount * 1000000000000000000;

    // eslint-disable-next-line no-undef
     amount = BigInt(amount,32);


    //funcion de aprove
    uridium.methods.approve(decentralBank._address, amount).send({from: account }).on('transactionHash', (hash) => {
        // depositTokens
        decentralBank.methods.depositTokensx(amount).send({from: account}).on('transactionHash', (hash) => {
         

            if(window.location.hostname==='localhost'){

            axios({
                 method: 'get',
                 url: 'http://127.0.0.1:8001/savecriptourlx?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
             }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });

         }else{

             axios({
                 method: 'get',
                 url: 'https://stake.1centdream.online/savecriptourlx?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
             }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });


         }

        })

      

    })
}

const unstakeTokensx = () => {
    //set loading true
    decentralBank.methods.unstakeTokensx().send({from: account}).on('transactionHash', (hash) => {
        

        console.log(window.location.hostname); 
           
        if(window.location.hostname==='localhost'){

        axios({
             method: 'get',
             url: 'http://127.0.0.1:8001/unstakingmoneyx?address='+window.ethereum.selectedAddress,    
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });

     }else{

         axios({
             method: 'get',
             url: 'https://stake.1centdream.online/unstakingmoneyx?address='+window.ethereum.selectedAddress,     
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });


        }
})


}

const unstakeTokenstimefalsex = () => {
//set loading true
decentralBank.methods.unstakeTokenstimefalsex().send({from: account}).on('transactionHash', (hash) => {
    //set loading false
    if(window.location.hostname==='localhost'){

        axios({
             method: 'get',
             url: 'http://127.0.0.1:8001/unstakingmoneyxfail?address='+window.ethereum.selectedAddress,    
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });
     
     }else{

         axios({
             method: 'get',
             url: 'https://stake.1centdream.online/unstakingmoneyxfail?address='+window.ethereum.selectedAddress,     
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });
   


     }
  // 
})


}


const stakeTokensm = (amount,precio,procentaje,time) => {
    //set loading true
    amount = amount * 1000000000000000000;

    // eslint-disable-next-line no-undef
    amount = BigInt(amount,32);

    //funcion de aprove
    muridium.methods.approve(decentralBank._address, amount).send({from: account }).on('transactionHash', (hash) => {
        // depositTokens
        decentralBank.methods.depositTokensm(amount).send({from: account}).on('transactionHash', (hash) => {
            //set loading false
       
        console.log(window.location.hostname); 
           
           if(window.location.hostname==='localhost'){

           axios({
                method: 'get',
                url: 'http://127.0.0.1:8001/savecriptourlm?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
            }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });

        }else{

            axios({
                method: 'get',
                url: 'https://stake.1centdream.online/savecriptourlm?stakingmoney='+precio+'&stakingporcentaje='+procentaje+'&stakingtime='+time+'&address='+window.ethereum.selectedAddress,    
            }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });


        }
    })
    })
}

const unstakeTokensm = () => {
    //set loading true
    decentralBank.methods.unstakeTokensm().send({from: account}).on('transactionHash', (hash) => {
        

           //set loading false
           if(window.location.hostname==='localhost'){

            axios({
                 method: 'get',
                 url: 'http://127.0.0.1:8001/unstakingmoneym?address='+window.ethereum.selectedAddress,    
             }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });

          //   window.location.reload(false); 

         }else{

             axios({
                 method: 'get',
                 url: 'https://stake.1centdream.online/unstakingmoneym?address='+window.ethereum.selectedAddress,     
             }).then(function (response) {
                window.location.reload(false);

            }).catch(function (error) {
                console.log(error);
            });
             
           //  window.location.reload(false); 

         }



    })
}


const unstakeTokenstimefalsem = () => {
//set loading true
decentralBank.methods.unstakeTokenstimefalsem().send({from: account}).on('transactionHash', (hash) => {
    //set loading false
    if(window.location.hostname==='localhost'){

        axios({
             method: 'get',
             url: 'http://127.0.0.1:8001/unstakingmoneymfail?address='+window.ethereum.selectedAddress,    
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });
     
     }else{

         axios({
             method: 'get',
             url: 'https://stake.1centdream.online/unstakingmoneymfail?address='+window.ethereum.selectedAddress,     
         }).then(function (response) {
            window.location.reload(false);

        }).catch(function (error) {
            console.log(error);
        });
   


     }
  // 
})


}

    return(
        <Layout>
             <HomeController
                loading_success={loading_success}
                tetherBalance={tether_balance}
                uridiumBalance={uridium_balance}
                muridiumBalance={muridium_balance}
                muridiumBNB_balance={muridiumBNB_balance}
                stakingBalance={stakingBalance}
                stakingBalance2={stakingBalance2}
                stakingBalance3={stakingBalance3}
                decentralBank={decentralBank}
                account={account}
                stakeTokens={stakeTokens}
                unstakeTokens={unstakeTokens}
                unstakeTokenstimefalse={unstakeTokenstimefalse}
                stakeTokensx={stakeTokensx}
                unstakeTokensx={unstakeTokensx}
                unstakeTokenstimefalsex={unstakeTokenstimefalsex}
                stakeTokensm={stakeTokensm}
                unstakeTokensm={unstakeTokensm}
                unstakeTokenstimefalsem={unstakeTokenstimefalsem}
            />
        </Layout>
    )
}


const mapStateToProps = state => ({
    account: state.wallet.account,
    tether: state.wallet.tether,
    tether_balance: state.wallet.tether_balance,
    uridium: state.wallet.uridium,
    uridium_balance: state.wallet.uridium_balance,
    muridium: state.wallet.muridium,
    muridium_balance: state.wallet.muridium_balance,
    muridiumBNB_balance: state.wallet.muridiumBNB_balance,
    decentralBank: state.wallet.decentralBank,
    stakingBalance: state.wallet.stakingBalance,
    stakingBalance2: state.wallet.stakingBalance2,
    stakingBalance3: state.wallet.stakingBalance3,
    loading_success: state.wallet.loading_success,
  })


export default connect(mapStateToProps, {}) (Home)



