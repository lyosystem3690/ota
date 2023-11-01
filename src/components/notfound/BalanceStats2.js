
  
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
{ dollarUSLocale.format(Math.round(tetherBalance)) }
    </div>
)
}