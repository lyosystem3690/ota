import { useState } from "react"
import './App.css'
import axios from 'axios';
import Web3 from "web3";


const InputItem = ({
    account,
    stakeTokens,
    unstakeTokens,
    unstakeTokenstimefalse,
    tetherBalance,
}) => {
    //alert(tetherBalance);

    const [acotres, setStakeAmount] = useState([]);

    const [acotres2, setStakeAmountstatus] = useState([]);

    const [acotres3, setStakeAmount3] = useState([]);

    const [visibleCorrect, setStakeAmount963] = useState([]);
    
    const [acotres4, setStakeAmount4] = useState([]);

    const [precios, setStakeAmountstatuspre] = useState([]);
    

    async function onInit() {
     
    }

    onInit();


    const getData  = async () => {
      
    console.log(window.location.hostname); 
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
  //  console.log(account)
  //  console.log(window.location.hostname)
    
    if(window.location.hostname==='localhost'){

        //    alert(account);

            let url =  'http://127.0.0.1:8001/getstakingtree?address='+account;
              axios(url, {
                    method: 'GET',
                }).then(response => {
              
                 //let posts = response.data
                  //  alert(posts)
                //  alert("s");
                //  alert(response.data);
                  setStakeAmount(response.data);
               //  this.setState({ posts });

             
                })


                let url2 =  'http://127.0.0.1:8001/getstatus?address='+account;
              axios(url2, {
                    method: 'GET',
                }).then(response => {
              
                 //let posts = response.data
                  //  alert(posts)
                  setStakeAmountstatus(response.data);
               //  this.setState({ posts });

             
                })

               
               
           console.log(acotres); 
           console.log(acotres2);  

        }else{
            
        let url =  'https://stake.1centdream.online/getstakingtree?address='+account;
         axios(url, {
            method: 'GET',
          }).then(response => {
                
            setStakeAmount(response.data);

          })

          let url2 =  'https://stake.1centdream.online/getstatus?address='+account;
          axios(url2, {
                method: 'GET',
            }).then(response => {
          
             //let posts = response.data
              //  alert(posts)
              setStakeAmountstatus(response.data);
           //  this.setState({ posts });

         
            })

        
        
        }

  
    }

   getData();
 //  alert(data2);
    

    const [formData, setFormData] = useState({
        amount:'',
    })

    const {amount} = formData

    const onChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

  

    let mount = 0; 
    let url =  window.location.search;
    //   a;
    let procentaje = 0;

       let text = url.split("&")
       let  precio = text[3]
       let time = text[5]   
       mount = text[6]   
       procentaje =  text[5]   
       mount = mount.trim()

       time = mount;


    //alert(precio);
    //alert(time);

     
  /*
       if(time ==='24'){
         procentaje = 6   
       }
       if(time ==='26'){
         procentaje = 8
       }
       if(time ==='29'){
         procentaje = 10
       }
       */
/*
let mount = 0; 
    if(time==='44'){
        mount=3;
    }

    if(time==='46'){
        mount=6;
    }

    if(time==='51'){
        mount=12;
    }
*/
        let dollarUSLocale = Intl.NumberFormat('en-US');


        const calculo = (precio - parseInt(precio) * 19 / 100);

        const calculo2 = dollarUSLocale.format(calculo);   

       const precio2 = dollarUSLocale.format(precio);



       async function elllamdo() {   


       const web3 = new Web3(Web3.givenProvider);
       // Obtiene la dirección de tu billetera
       const [account] = await web3.eth.getAccounts();

       //alert(account);

    if(window.location.hostname==='localhost'){
    
    let urls =  'http://127.0.0.1:8001/getstakingtreewinx?address='+account;
              axios(urls, {
                    method: 'GET',
                }).then(response => {
              
                 //let posts = response.data
                  //  alert(posts)
                //  alert("s");
                //  alert(response.data);
                  setStakeAmount3(response.data);
               //  this.setState({ posts });

             
                })


                let urls2 =  'http://127.0.0.1:8001/getstaking1cent?address='+account;
                axios(urls2, {
                      method: 'GET',
                  }).then(response => {
                
                   //let posts = response.data
                    //  alert(posts)
                  //  alert("s");
                  //  alert(response.data);
                  setStakeAmount4(response.data);
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

    //let urls2 =  'https://stake.1centdream.online/visiblecorrect1cent?address='+account;
    let urls3 =  'http://127.0.0.1:8001/visiblecorrect1cent?address='+account;
    axios(urls3, {
          method: 'GET',
      }).then(response => {
    
       //let posts = response.data
        //  alert(posts)
      //  alert("s");
      //  alert(response.data);
      setStakeAmount963(response.data);
     //  this.setState({ posts });
   //  const visibleCorrect = 'timefalses';
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

 
      let urls =  'https://stake.1centdream.online/getstakingtreewinx?address='+account;
      axios(urls, {
            method: 'GET',
        }).then(response => {
      
         //let posts = response.data
          //  alert(posts)
        //  alert("s");
        //  alert(response.data);
          setStakeAmount3(response.data);
       //  this.setState({ posts });

     
        })


        let urls2 =  'https://stake.1centdream.online/getstaking1cent?address='+account;
        axios(urls2, {
              method: 'GET',
          }).then(response => {
        
           //let posts = response.data
            //  alert(posts)
          //  alert("s");
          //  alert(response.data);
          setStakeAmount4(response.data);
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


              //let urls2 =  'https://stake.1centdream.online/visiblecorrect1cent?address='+account;
    let urls3 =  'https://stake.1centdream.online/visiblecorrect1cent?address='+account;
    axios(urls3, {
          method: 'GET',
      }).then(response => {
    
       //let posts = response.data
        //  alert(posts)
      //  alert("s");
      //  alert(response.data);
      setStakeAmount963(response.data);
     //  this.setState({ posts });
   //  const visibleCorrect = 'timefalses';
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

}



      
elllamdo();

       

    const onSubmit = e => {
        e.preventDefault()
       
            stakeTokens(precio,precio,procentaje,time)
       
        
    }

 

    let visible = 'true'
    //alert(window.ethereum.selectedAddress);


   // alert(acotres.length);
    if(acotres.length === 0){
         visible = 'true'
    }else{
         visible = 'false'
    }

    let precio3 = precio * procentaje / 100;
   
 //   alert(acotres);
  //  alert(acotres2);

          // ("#search369").val(precio);
         // document.getElementById('search369').value = precio;
          //console.log(el);
       
   //alert(visible);
    //visible = true;






    //alert(visible);
    return (
   

        <div>
          
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-2">
            {visible==='true' && (acotres2==='U' || acotres2==='G') && (
            <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">  
                <label htmlFor="search" className="block text-sm font-medium text-gray-700"><b>Staking 1Cent : </b>{precio2} 1Cent -   &nbsp;
 Receive in your wallet at the end of staking. <b className="text-red-1000">{calculo2} 1Cent</b> <br></br> <b> Time in Staking : </b>   {mount} mount <b></b><br></br> <b> Percentage staking :  </b> {procentaje}%  </label>    
                </label>
                <div className="mt-1 relative flex items-center">
                    <input
                    onChange={e=>onChange(e)}
                    value={precio}
                    type="hidden"
                    name="amount"
                    required
                    id="search369"
                    placeholder="0"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                    />
                    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex cursor-default items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                      
                    </kbd>
                    </div>
                </div>
                
            </div>
             )}
            {visible==='true' && (acotres2==='U' || acotres2==='G') && (
            <button
                type="submit"
                className="inline-flex items-center justify-center my- mx-1 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Deposit, please do not close or refresh this screen until the process is complete.
            </button>
     )}

{acotres2==='S' && (
     <div className="inline-flex items-center justify-center">
   <img src="https://stake.1centdream.online/imagenes/5390264.png" alt="imagen" style={{width: 50}}></img> <b> Thanks for your Staking the 1Cent, remember wait date for win recompense</b>
   <br></br>
 </div>

)}
  {acotres2==='E' && (
     <div className="inline-flex items-center justify-center">
   <img src="https://stake.1centdream.online/imagenes/5760164.png" alt="imagen" style={{width: 50}}></img> <b> Please wait for 1 to 7 days for recompense in your Wallet</b>
   <br></br>
 </div>

)}
  {acotres2==='SS' && (
     <div className="inline-flex items-center justify-center">
 <b> Please wait for 1 to 7 days for return 1Cent your Wallet, remember that a 10% fine will be charged for not complying with the agreed time. Receive in your wallet  {dollarUSLocale.format(acotres4 - 28 * acotres4 / 100 ) } 1Cent</b>
   <br></br>
 </div>

)}

            </form>
            
            
            {visible==='true' && (acotres2==='U' || acotres2==='G') &&  (
                <div className="grid grid-cols-2">
            <div className="grid grid-cols-1">
            {precios>1  && (
               <span>  <b>Please confirm deposit 1Cent </b> : {dollarUSLocale.format(precios)}  </span>
                )}
                {precios===''  && (
                <b>  Please confirm deposit 1Cent <br></br> { dollarUSLocale.format(precios)}  </b>
                )}
                <label htmlFor="search" className="block text-sm font-medium text-gray-700"><b>Win Xcent : </b>{dollarUSLocale.format(precio3)} XCent - Receive in your wallet at the end of staking.<b> {dollarUSLocale.format(precio3 - precio3 * 10 /100)} Xcent </b> </label>
                <div className="grid grid-cols-1 relative flex items-center">


                 
               
                  
                     <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex cursor-default items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                       
                    </kbd>
                    </div>
                </div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700"><b>  </b>   </label>
                <div className="grid grid-cols-1 relative flex items-center">
                
                
                    
                 <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex cursor-default items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                       
                    </kbd>
                    </div>
                </div>
                {precios>1  && (
                    <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700"> <b> Win X Cent in Staking</b> :  {dollarUSLocale.format(precios*time/100)} XCent   </label>
                <div className="grid grid-cols-1 relative flex items-center">


                 
               
                  
                     <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex cursor-default items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                       
                    </kbd>
                    </div>
                </div>
                </div>
                )}
                </div>
            </div>
            )}
            {visible==='false' && acotres2==='S'  && (
            <div className="grid grid-cols-2">
            <div className="grid grid-cols-1">
                
            {visibleCorrect==='timefalses' && (
                    <button
                    type="submit"
                    onClick={(e)=>{
                        e.preventDefault()
                        unstakeTokens(time)
                    }}
                    className="inline-flex items-center justify-center my-4 mx-1 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Withdraw Time Correct
                    </button>
                )}

                </div>
                <div className="grid grid-cols-1">

                {visibleCorrect==='timefalses2' && (     
                    <button
                    type="submit"
                    onClick={(e)=>{
                        e.preventDefault()
                        unstakeTokenstimefalse()
                    }}
                    className="inline-flex items-center justify-center my-4 mx-1 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Withdraw Time Incorrect2
                    </button>
                
                )}  
             
              

                </div>
                </div>
        
                )}

         

            <div className="grid grid-cols-1">
            
                <br></br>
       
                 <div dangerouslySetInnerHTML={{ __html: acotres }} />
            </div>
            <br></br>
            
        </div>
    )
}

export default InputItem