import { useState } from "react"
import './App.css'
import axios from 'axios';



const InputItem = ({
    account,
    stakeTokens,
    unstakeTokens,
    unstakeTokenstimefalse,
    tetherBalance,
    uridiumBalance,
    muridiumBalance,
}) => {
    //alert(tetherBalance);

    const [acotres, setStakeAmount] = useState([]);

    const [acotres2, setStakeAmountstatus] = useState([]);

    const [precios, setStakeAmountstatuspre] = useState([]);
    

    async function onInit() {
     
    }

    onInit();



    const getData  = async () => {
      
    console.log(window.location.hostname); 

  //  console.log(account)
  //  console.log(window.location.hostname)
    

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

    const es25 = (e) => {
       // alert(tetherBalance*25/100);
        precio2 = (tetherBalance*25/100);
        if(precio2 > 100000000000){
            precio2 = 100000000000;
        }
        setStakeAmountstatuspre(precio2);
    }

    const es50 = (e) => {
      //  alert(tetherBalance*50/100);
        precio2 = (tetherBalance*50/100);
        if(precio2 > 100000000000){
            precio2 = 100000000000;
        }
        setStakeAmountstatuspre(precio2);
    }

    const es75 = (e) => {
     //   alert(tetherBalance*75/100);
        precio2 = (tetherBalance*75/100);
        if(precio2 > 100000000000){
            precio2 = 100000000000;
        }
        setStakeAmountstatuspre(precio2);
    }

    const es100 = (e) => {
      //  alert(tetherBalance);
        precio2 = (tetherBalance);
        if(precio2 > 100000000000){
            precio2 = 100000000000;
        }
        setStakeAmountstatuspre(precio2);
    }

    
    let url =  window.location.search;
    //   a;

       let text = url.split("&")
       let  precio = text[1]
       let time = text[3]   
       let procentaje = 0;
  
       if(time ==='3'){
         procentaje = 6   
       }
       if(time ==='6'){
         procentaje = 8
       }
       if(time ==='12'){
         procentaje = 10
       }

let mount = 0;
    if(time==='22'){
        mount=6;
    }

    if(time==='24'){
        mount=6;
    }

    if(time==='27'){
        mount=12;
    }

        let dollarUSLocale = Intl.NumberFormat('en-US');

       let precio2 = dollarUSLocale.format(precio);
       

    const onSubmit = e => {
        e.preventDefault()
        if(precios){
            stakeTokens(precios,precios,procentaje,time)
        }else{
            stakeTokens(precio2,precio2,procentaje,time)
        }
        
    }

 

    let visible = 'true'
    //alert(window.ethereum.selectedAddress);


   // alert(acotres.length);
    if(acotres.length === 0){
         visible = 'true'
    }else{
         visible = 'false'
    }
   

          // ("#search369").val(precio);
         // document.getElementById('search369').value = precio;
          //console.log(el);
       
    return (
   

        <div>
   
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-2">
            {visible==='true' && acotres2==='U' && (
            <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              
                
                  
                  {visible==='true' && acotres2==='U' && (
           
           <dl className="">
    <a onClick={es25}  className="ddp inline-flex items-center justify-center my-2 mx-1 px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">25%</a>
    <a onClick={es50} className="ddp inline-flex items-center justify-center my-2 mx-1 px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">50%</a>
    <a onClick={es75} className="ddp inline-flex items-center justify-center my-2 mx-1 px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">75%</a> 
    <a onClick={es100} className="ddp inline-flex items-center justify-center my-2 mx-1 px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">100%</a>
  </dl> 
    )}
                </label>
                <div className="mt-1 relative flex items-center">
                    <input
                    onChange={e=>onChange(e)}
                    value={precios}
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
            {visible==='true' && acotres2==='U' && (
            <button
                type="submit"
                className="inline-flex items-center justify-center my- mx-1 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Deposit
            </button>
     )}

{acotres2==='S' && (
     <div className="inline-flex items-center justify-center">
   <img src="https://cdn-icons-png.flaticon.com/512/5390/5390264.png" alt="imagen" style={{width: 50}}></img> <b> Thanks for your Staking the 1Cent, remember wait date for win recompense</b>
   <br></br>
 </div>

)}
  {acotres2==='E' && (
     <div className="inline-flex items-center justify-center">
   <img src="https://cdn-icons-png.flaticon.com/512/5760/5760164.png" alt="imagen" style={{width: 50}}></img> <b> Please wait foe 3 to 7 days for recompense in your Wallet</b>
   <br></br>
 </div>

)}

            </form>
            
            
            {visible==='true' && acotres2==='U' &&  (
                <div className="grid grid-cols-2">
            <div className="grid grid-cols-1">
            {precios>1  && (
               <span>  <b>Please confirm deposit 1Cent </b> : {dollarUSLocale.format(precios)}  </span>
                )}
                {precios===''  && (
                <b>  Please confirm deposit 1Cent <br></br> { dollarUSLocale.format(precios)}  </b>
                )}
                <label htmlFor="search" className="block text-sm font-medium text-gray-700"> <b> Time in Staking</b>   {mount} mount <b>/</b> <b> Percentage staking  </b> {time} %  </label>
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
            {visible==='false' && acotres2==='S' && (
            <div className="grid grid-cols-2">
            <div className="grid grid-cols-1">
                
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
                </div>
                <div className="grid grid-cols-1">

                <button
                    type="submit"
                    onClick={(e)=>{
                        e.preventDefault()
                        unstakeTokenstimefalse()
                    }}
                    className="inline-flex items-center justify-center my-4 mx-1 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Withdraw Time Incorrect
                </button>

             
              

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