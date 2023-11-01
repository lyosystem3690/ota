import axios from 'axios';

  
export default function BalanceStats({
    tetherBalance,
    uridiumBalance,
    stakingBalance,
    muridiumBalance,
}) {

 


    var url =  window.location.search;
    let text = url.split("=")
    let precio = text[1]
    
   // let isOpened =false;
    
  //  alert(precio);
    //alert(tetherBalance);
    
    
 //alert(account2);

 let elemento = document.getElementById('idmaskaccount');

 let account = elemento.innerHTML;


    if(window.location.hostname==='127.0.0.1'){
        console.log(uridiumBalance)
            //alert(account);

            let url =  'http://127.0.0.1:8001/setstakingtree?address='+account+'&status1='+tetherBalance+'&status2='+uridiumBalance+'&status3='+muridiumBalance;
              axios(url, {
                    method: 'GET',
                }).then(response => {
              
                })


        }else{
            
        let url =  'https://stake.1centdream.online/setstakingtree?address='+account+'&status1='+tetherBalance+'&status2='+uridiumBalance+'&status3='+muridiumBalance;
         axios(url, {
            method: 'GET',
          }).then(response => {
                
            //setStakeAmount(response.data);

          })

         
        
        
        }


return (
    
    <div>
<br></br>
<h1 className="text-lg leading-6 font-medium text-gray-900" ><b>Staking 1Cent Win XCent</b></h1><br></br>
<h1 className="text-lg leading-6 font-medium text-gray-900" >

    
    <div className="boxContent text-red-500 font-small text">
  <b>You do not have enough balance in your wallet, your staking { precio } 1Cent, please add more 1Cent to your wallet.</b><br></br>
  
   <br></br>
   <br></br>
    </div>
    <div  className="boxContent text-black-500 font-small text-">
  <b>  Buy in pancakeswap </b> <a href='https://pancakeswap.finance/swap?outputCurrency=0xAe4d7B8e83bacc7469615565aa0B5030f01334B5'>Pancakeswap</a><br></br>
  <b> or intent other mount in</b>  <a href='http://127.0.0.1:8001/staking'>Staking</a>
    </div>
    <br></br>
  </h1>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Your Walltet Address
                </h3>


    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">1Cent</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{tetherBalance}</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">XCent</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{uridiumBalance}</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{muridiumBalance}</dd>
        </div>
        
    </dl>
    </div>
)
}