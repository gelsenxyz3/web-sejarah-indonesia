import {useState,useEffect} from 'react';import {ArrowUp} from 'lucide-react'
export default function ScrollToTop(){const [v,setV]=useState(false)
useEffect(()=>{const f=()=>setV(window.scrollY>600);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[])
return v&&<button aria-label="Kembali ke atas" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-merah text-white shadow-lg hover:bg-maroon focus:outline-none focus:ring-2 focus:ring-emas"><ArrowUp size={20}/></button>}
