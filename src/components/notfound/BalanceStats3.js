
  
export default function BalanceStats({
    tetherBalance,
    uridiumBalance,
    stakingBalance
}) {

    var url =  window.location.search;
    let text = url.split("=")
    let precio = text[1]
    
   // let isOpened =false;
    
  //  alert(precio);
    //alert(tetherBalance);
    
     

    let dollarUSLocale = Intl.NumberFormat('en-US');

return (
    
    <div>
<h1 className="text-lg leading-6 font-medium text-gray-900" ><b>Staking 1Cent Win XCent</b></h1><br></br>
    <dl className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-1">
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">1Cent</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">
            <input type="text" id="myInput" placeholder="" title="Type in a name" value={ dollarUSLocale.format(Math.round(tetherBalance)) }></input></dd>
            <dl className="">
    <a   className="ddp inline-flex items-center justify-center my-2 mx-1 px-14 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">25%</a>
    <a  className="ddp inline-flex items-center justify-center my-2 mx-1 px-14 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">50%</a>
    <a  className="ddp inline-flex items-center justify-center my-2 mx-1 px-14 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">75%</a> 
    <a  className="ddp inline-flex items-center justify-center my-2 mx-1 px-14 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">100%</a>
  </dl> 
  <label>1Cent Staking</label>
  <br></br>
  <input type="text" id="myInput" placeholder="" title="Type in a name"></input>
  <br></br>
  <label>Time Staking</label>
  <br></br>
  <select id="mySelect" >
  <option value="0">Select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <label>Your Win XCent</label>
  <br></br>
  <input type="text" id="myInput" placeholder="" title="Type in a name"></input>
  <br></br>  <br></br>
  <input type="checkbox" id="myInput" placeholder="" title="Type in a name"></input> I accept the terms and conditions.
  <br></br>
        </div>
      
    </dl>
    <dl className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-1">
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">


    <br></br>
   
    </div>
    </dl>
    </div>
)
}