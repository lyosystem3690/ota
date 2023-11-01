import { useState } from "react"
import axios from 'axios';
  
export default function BalanceStatsx({
    tetherBalance,
    uridiumBalance,
    stakingBalance2,
    account,
}) {

    const [acotres, setStakeAmount] = useState([]);

    if(window.location.hostname==='localhost'){
    
        let urls =  'http://127.0.0.1:8001/getstakingtreewinx1?address='+account;
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
    
     
          let urls =  'https://stake.1centdream.online/getstakingtreewinx1?address='+account;
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
    
      //  alert(acotres);
        const string4 = String(acotres);

    let dollarUSLocale = Intl.NumberFormat('en-US');

return (
    
    <div>
<br></br>
<h1 className="text-lg leading-6 font-medium text-gray-900" >
<b>Staking XCent Win 1Cent </b><br></br><br></br>
                </h1>


            <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Your Wallet Address
                </h3>


    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">XCent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(uridiumBalance)) }</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Your Win 1Cent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{  dollarUSLocale.format(Math.round(string4)) }</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(stakingBalance2 / 1000000000000000000)) }</dd>
        </div>
        
    </dl>
    </div>
)
}