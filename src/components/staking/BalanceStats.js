import { useState } from "react"
import axios from 'axios';
  
export default function BalanceStats({
    tetherBalance,
    uridiumBalance,
    stakingBalance,
    account,    
}) {

    const [acotres, setStakeAmount] = useState([]);


    if(window.location.hostname==='localhost'){
    
    let urls =  'http://127.0.0.1:8001/getstakingtreewinx?address='+account;
              axios(urls, {
                    method: 'GET',
                }).then(response => {
              
                 //let posts = response.data
                  //  alert(posts)
                //  alert("s");
                //  alert(response.data);
                  setStakeAmount(response.data);
               //  this.setState({ posts });

             
                })

    }else{

 
      let urls =  'https://stake.1centdream.online/getstakingtreewinx?address='+account;
      axios(urls, {
            method: 'GET',
        }).then(response => {
      
         //let posts = response.data
          //  alert(posts)
        //  alert("s");
        //  alert(response.data);
          setStakeAmount(response.data);
       //  this.setState({ posts });

     
        })

    }

    //alert(acotres);
    const string4 = String(acotres);
    //alert(string4);
    //alert(string4);
    let url =  window.location.search;
    let text = url.split("&")
    let precio = text[1]
  //  let time = text[3]
  //  let procentaje = text[2]
    
    let isOpened =false;

    let uridiumBalanceWin = 0;

  //  alert(precio);
  //  alert(tetherBalance);
    
     /*   if (parseInt(precio) > parseInt(tetherBalance)){
                 isOpened =true;
                 window.location.href = '/notfoundstaking?staking='+precio;
                 return false;

        }else{
                 isOpened =false;
        }

*/
let dollarUSLocale = Intl.NumberFormat('en-US');


return (
    
    <div>
<br></br>
<h1 className="text-lg leading-6 font-medium text-gray-900" >

{(isOpened===true) && (
    
    <div className="boxContent text-red-500 font-medium text-">
  You do not have enough balance in your wallet   {precio} 1Cent
    </div>
  )}
  {(isOpened===false) && (
    <div>
<b>Staking 1Cent Win XCent </b><br></br><br></br>
</div>
  )}
  </h1>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Your Wallet Address <br></br>
                 
                </h3>


    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">1Cent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(tetherBalance)) }</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Your Win XCent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{  dollarUSLocale.format(Math.round(string4)) }</dd> 
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(stakingBalance / 1000000000000000000)) }</dd>
        </div>
        
    </dl>
    </div>
)
}
