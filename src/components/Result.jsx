


const Result =(props)=>
{
return(



<div className="result">
  <div style={{display:'flex' ,  justifyContent:'space-between' , color:'hsl(172, 67%, 45%)'}}>
    <span style={{fontSize:'.8rem ', color:'white' }} >
  Tip Amount
  <br/>
  <span style={{ fontSize:'.7rem' , color:'hsl(184, 14%, 56%)' }} >/ person</span>
</span>
  <div id="tipAmount">
    ${props.amount}
  </div>
</div>

 <div style={{display:'flex', justifyContent:'space-between' , color:'hsl(172, 67%, 45%)'}}>
    <span style={{fontSize:'.8rem ', color:'white'}}>
 
 Total
  <br/>
  <span  style={{fontSize:'.7rem', color:'hsl(184, 14%, 56%)'}} >/ person</span>
</span>
  <div id="total">
    ${props.total}
  </div>
</div>
  
  

 <button id="resetBtn" onClick={props.reset}> Reset </button>
  </div>


	)}
export default Result

