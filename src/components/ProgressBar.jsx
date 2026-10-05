import {useState,useEffect} from 'react'
export default function ProgressBar(){const [p,setP]=useState(0)
useEffect(()=>{const f=()=>{const h=document.documentElement;setP(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)};f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[])
return <div className="fixed top-0 left-0 right-0 h-1 z-[60]"><div className="h-full bg-gradient-to-r from-merah to-emas" style={{width:p+'%'}}/></div>}
