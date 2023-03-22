 import {useContext} from 'react'
 import {AppContext} from '../App'


const Tips=()=>{

const {per,setPer}=useContext(AppContext)




	return(

<>
  <h6>Select Tip %</h6>
  <div className="tipBtns">
  <button  onClick={()=>setPer(0.05)	}className={ per==0.05?"tip btnClicked":"tip btnUnClicked"}   >5%</button>
  <button  onClick={()=>setPer(0.1) 	}className={ per==0.1 ?"tip btnClicked":"tip btnUnClicked"}   >10%</button>
  <button  onClick={()=>setPer(0.15)	}className={ per==0.15?"tip btnClicked":"tip btnUnClicked"}   >15%</button>
  <button  onClick={()=>setPer(0.25)	}className={ per==0.25?"tip btnClicked":"tip btnUnClicked"}   >25%</button>
  <button  onClick={()=>setPer(0.5) 	}className={ per==0.5 ?"tip btnClicked":"tip btnUnClicked"}   >50%</button>
 <input id="tipCustom"  onChange={(e)=>setPer(e.target.value/100) } className="tip"  placeholder="Custom"/> 
</div>

</>

	)}

export default Tips