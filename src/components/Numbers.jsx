 import {useContext} from 'react'
 import {AppContext} from '../App'

const Numbers=()=>{

const {num,setNum , numRef , clicked, mouseOn,mouseOut}=useContext(AppContext)


	return(

<>
<div className="numberOfPeople">
 <h6>Number of People</h6>
 <div style={{ color:'tomato', fontSize:'.6rem' , margin:'0' , display:`${num==0?'block':'none'}` }} >can,t be zero</div>
 </div>	
   <div ref={numRef} onClick={()=>clicked(numRef)} onMouseEnter={mouseOn} onMouseLeave={mouseOut}  className="inputArea" id="numInput" style={{ border:`${num==0?'tomato 2px solid':'none'}` }}>
    <img src="images/icon-person.svg"/>
  <input id="num" placeholder="0" value={num} onChange={e=>setNum(e.target.value)}  />
  </div>
</>
  )}

export default Numbers