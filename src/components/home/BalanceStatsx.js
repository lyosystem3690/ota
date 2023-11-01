import { useState } from "react"
import axios from 'axios';
  
export default function BalanceStatsx({
    tetherBalance,
    uridiumBalance,
    stakingBalance2,
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

    //alert("sds")

    if(window.location.hostname==='localhost'){
    //  alert("s")
        let urls =  'http://127.0.0.1:8001/getstakingtreewinx1?address='+account;
                  axios(urls, {
                        method: 'GET',
                    }).then(response => {
                  
                     //let posts = response.data
                      //  alert(posts)
                    //  alert("s");
                    //  alert(response.data);
                //alert("s") 
                    setStakeAmount(response.data);
                     
                   //  this.setState({ posts });
    
                 
                    })

              
                    let urls2 =  'http://127.0.0.1:8001/getstakingxcent?address='+account;
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

            let urls2 =  'https://stake.1centdream.online/getstakingxcent?address='+account;
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
        let url =  window.location.search;
        let text = url.split("&")
      //  alert(acotres);
        const string4 = String(acotres);

        //alert(acotres2)
        let geturl3 = text[3]
        //alert(geturl3)
        if(geturl3 == 0 && acotres2==''){
         // window.history.back()
        }

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
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance Xcent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{ dollarUSLocale.format(Math.round(acotres2)) }</dd>
        </div>
        
    </dl>
    </div>
)
}