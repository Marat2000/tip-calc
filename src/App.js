import Result from './components/Result'
import Tips from './components/Tips'
import Bill from './components/Bill'
import Numbers from './components/Numbers'

import {useState , createContext , useEffect,useRef} from 'react'
export const AppContext=createContext({})

function App() {


const [input,setInput]=useState('')
const [num,setNum]=useState('')
const [total,setTotal]=useState('0.00')
const [amount,setAmount]=useState('0.00')
const [per,setPer]=useState(0.05)

const billRef=useRef(null)
const numRef=useRef(null)
const[on,setOn]=useState(false)

useEffect(()=>{ 


if(num>0){
 setTotal( Math.floor(input/num*(1+per) *100)/100);
setAmount( Math.floor(input/num*per *100)/100);
}

 },[input,num,per])


const reset=()=>
{

setInput('')
setNum('')
setTotal('0.00')
setAmount('0.00')
}


const mouseOn=()=>
{
setOn(true)
}


const mouseOut=()=>
{
	setOn(false)
}

window.onclick=(e)=>{if(on==false) {billRef.current.style.outline='none';numRef.current.style.outline='none' }}


const clicked=(ref)=>
{
	if(on==true)
		 ref.current.style.outline='hsl(172, 67%, 45%) 2px solid';

}




  return (
  	<AppContext.Provider value={{input,setInput , num, per, setPer , clicked,mouseOn,mouseOut,billRef,numRef, setNum}}>
  <h1> SPLI<br/>TTER</h1>
  <main >
  	<div className='calc'>
 <Bill />
<Tips />
<Numbers/>
</div>
<Result total={total} reset={reset} amount={amount}/>
</main>
</AppContext.Provider>
  )}


export default App;
