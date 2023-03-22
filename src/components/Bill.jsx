 import {useContext,useRef,useState} from 'react'
 import {AppContext} from '../App'


const Bill=()=>{
const {input,setInput, mouseOn,mouseOut,billRef , clicked}=useContext(AppContext)




	return(
  <>
  <h6>Bill</h6>
  <div ref={billRef} onClick={()=>clicked(billRef)} onMouseEnter={mouseOn} onMouseLeave={mouseOut} className="inputArea"  id="billInput">
    <img src="images/icon-dollar.svg" alt=""/>
  <input id="bill" placeholder="0" value={input} onChange={e=>setInput(e.target.value)}/>
  </div>
</>
  )}

export default Bill