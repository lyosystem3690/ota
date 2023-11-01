/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom'
import './App.css'
import {connect} from 'react-redux'
import { 
  setLoadWeb3,
  loadBlockchainData } from '../../redux/actions/wallet'
import { setCacheNameDetails } from 'workbox-core'
import { useState } from "react"
import axios from 'axios';
import Web3 from "web3";



  // function click open metamask mobile    

  

  export const connectMetamaskMobile = () => {
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/stake.1centdream.online:3000/";
    window.open(metamaskAppDeepLink, "_self");
  };

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]

function NavBar({
  account,
  setLoadWeb3,
  loadBlockchainData,
  cent,
  cent_balance,
  xcent,
  xcent_balance,
  decentralBank,
  stakingBalance,
  loading
}) {



    const send  = async () => {
    //alert(window.location.hostname);
    
    let hostname = window.location.hostname;
    
    //alert(hostname);
    
    if(hostname==='127.0.0.1'){
    
          window.location.href = "http://localhost:3000/";
    
    }else{
    
          window.location.href = "https://stake.1centdream.online:3000/";
    
    }
    
    
    }

  



    
  const [acotres1, setStakeAmount1] = useState([]);
  const [acotres2, setStakeAmount2] = useState([]);
  const [acotres3, setStakeAmount3] = useState([]);



  //if(window.location.hostname!=='localhost'){

    //alert("S");
  

  

const sendwallet = () => {
  window.location.reload();
}

async function loadar() {
/*
  const url = 'https://api.coingecko.com/api/v3/simple/price';

// Define the parameters for the API call
const params = {
  ids: 'ethereum', // The token's ID (in this case, "ethereum")
  vs_currencies: 'usd' // The currency you want the price to be returned in (in this case, "usd")
};

// Make the API call
axios.get(url, { params })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
*/





/*
  let urls1 =  'https://stake.1centdream.online/getcent1';
  axios(urls1, {
        method: 'GET',
    }).then(response1 => {
      setStakeAmount1(response1.request.response);
    })*/
/*
    let urls2 =  'https://stake.1centdream.online/getcent2';
    axios(urls2, {
          method: 'GET',
      }).then(response2 => {
        setStakeAmount2(response2.request.response);
      })

      let urls3 =  'https://stake.1centdream.online/getcent3';
      axios(urls3, {
            method: 'GET',
        }).then(response3 => {
          setStakeAmount3(response3.request.response);
        })
      */  



}




console.log(acotres1);
console.log(acotres2);
console.log(acotres3);




   let ar1 =  new String(account);
   let ar = ar1.substring(0, 4);
   let at = ar1.substring(38, 44);

   let boton;

   if(at===''){ 
    boton = 'chance';
   }else{
    boton = 'equal';
   }
/*
    window.ethereum.request({method:'eth_requestAccounts'})
.then(res=>{
        // Return the address of the wallet
        console.log(res) 
})
*/
  useEffect(() => {
    setLoadWeb3()
    loadBlockchainData()
  }, [])

  console.log(cent_balance)

  return (
    <Popover className="relative " onLoad={loadar}>
      <div className="absolute inset-0  z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href='/' onClick={send} className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-20 sm:h-16 agua"
                src="https://stake.1centdream.online/imagenes/1centlogo1.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-12 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              
         

              <NavLink to='/staking'
              activeclassname="text-base font-medium text-gray-900"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
                
              </NavLink>
              
         
              
            </Popover.Group>
            
            <div className="flex items-center md:ml-12">
                        
                        </div>
                        <div className="flex items-center justify-between sm:justify-end space-x-2 w-full header">
            <div className="flex items-center md:ml-12">

            {boton==='equal' && (
        <button className="sc-bdVaJa dkzats sc-gzVnrw sc-gqjmRU sc-dfVpRl sc-iyvyFf giUzdE ml-3"> 
            
            <div id='idmaskaccount'>{ ar } .... { at }</div> 

            </button>
            )}

            
        {boton==='chance' && (
        <button onClick={sendwallet} className="sc-bdVaJa dkzats sc-gzVnrw sc-gqjmRU sc-dfVpRl sc-iyvyFf giUzdE ml-3"> 
            
            <div id='idmaskaccount'>Click to MetaMask</div> 

            </button>
            )}

            </div>
       
            </div>
                       

          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
           
              <br></br><br></br><br></br><br></br>
            {!account && (
              <button onClick={connectMetamaskMobile} className="sc-bdVaJa dkzats sc-gzVnrw sc-gqjmRU sc-dfVpRl sc-iyvyFf giUzdE ml-6" style={{width:"100%"}}>
             
            
            <div id='idmaskaccount'>Click to Connect MetaMask</div> 

            </button>
            
            )}
       

            {account!=='' && (
              <div>
              <img src="https://stake.1centdream.online/imagenes/metamask.02e3ec27.png" id='typemetamask' alt="Icon"></img> <p className="mta">    Metamask Wallet: <div id='idmaskaccount'>{account}</div> </p>
              </div>
              )}




        </Popover.Panel>
      </Transition>
    </Popover>
   
  )
}

const mapStateToProps = state => ({
  account: state.wallet.account,
  cent: state.wallet.cent,
  cent_balance: state.wallet.cent_balance,
  xcent: state.wallet.xcent,
  xcent_balance: state.wallet.xcent_balance,
  decentralBank: state.wallet.decentralBank,
  stakingBalance: state.wallet.stakingBalance,
  loading: state.wallet.loading,
})

export default connect(mapStateToProps, {
  setLoadWeb3,
  loadBlockchainData
}) (NavBar)
