import { useState } from "react"
import axios from 'axios';
  
export default function BalanceStats({
    tetherBalance,
    uridiumBalance,
    stakingBalance,
    stakingBalance3,
    muridiumBalance,
    account,
}) {

  var preUrl = document.referrer;
  // alert(preUrl);
 
   if(preUrl===''){
    // alert("dd");
     window.location.href = "/";
   }
   if(preUrl===null){
     //alert("dd");
     window.location.href = "/";
   }
   if(preUrl==='null'){
     //alert("dd");
     window.location.href = "/";
   }
    const [acotres, setStakeAmount] = useState([]);
    const [acotres2, setStakeAmount2] = useState([]);

    if(window.location.hostname==='localhost'){
    
    let urls =  'http://127.0.0.1:8001/getstakingtreewinx2?address='+account;
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

                let urls2 =  'http://127.0.0.1:8001/getstakingmcent?address='+account;
                axios(urls2, {
                      method: 'GET',
                  }).then(response => {
                
                   //let posts = response.data
                    //  alert(posts)
                  //  alert("s");
                  //  alert(response.data);
                  setStakeAmount2(response.data);

                  let url =  window.location.search;
                  let text = url.split("&")
                  let geturl3 = text[3]
   
               //   alert(response.data)
               //   alert(geturl3)
 
                  if(geturl3 == 0 && response.data == 0){
                     window.history.back();
                  }
                  
                 //  this.setState({ posts });
  
               
                  })   

    }else{

 
      let urls =  'https://stake.1centdream.online/getstakingtreewinx2?address='+account;
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


        
        let urls2 =  'https://stake.1centdream.online/getstakingmcent?address='+account;
        axios(urls2, {
              method: 'GET',
          }).then(response => {
        
           //let posts = response.data
            //  alert(posts)
          //  alert("s");
          //  alert(response.data);
          setStakeAmount2(response.data);
         //  this.setState({ posts });

         let url =  window.location.search;
         let text = url.split("&")
         let geturl3 = text[3]

      //   alert(response.data)
      //   alert(geturl3)

         if(geturl3 == 0 && response.data == 0){
            window.history.back();
         }

       
          }) 

    }


    const string4 = String(acotres);
    
var url =  window.location.search;
let text = url.split("&")
let precio = text[1]

let isOpened =true;

let dollarUSLocale = Intl.NumberFormat('en-US');
//alert(precio);
//alert(tetherBalance);

    if (parseInt(precio) > parseInt(tetherBalance)){
             isOpened =true;
    }else{
             isOpened =false;
    }

return (
    
    <div>
<br></br>

<h1 className="text-lg leading-6 font-medium text-gray-900" >
{(isOpened===true) && (
    
    <div className="boxContent text-red-500 font-medium text-">
  You do not have enough balance in your wallet   {precio} MCent
   <br></br>
   <br></br>
    </div>
  )}
  {(isOpened===false) && (
    <div>
<b>Staking MCent Win Mcent </b><br></br><br></br>
</div>
  )}


              </h1>


            <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Your Wallet Address
                </h3>


    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">MCent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(muridiumBalance)) }</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Your Win MCent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{  dollarUSLocale.format(Math.round(string4)) }</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance MCent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(acotres2)) }</dd>
        </div>
        
    </dl> 
    </div>
   
)
}