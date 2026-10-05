import {useState,useEffect} from 'react';import {Menu,X} from 'lucide-react';import {menu} from '../data/content'
export default function Navbar(){const [open,setOpen]=useState(false),[act,setAct]=useState('beranda')
useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setAct(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});menu.forEach(([id])=>{const el=document.getElementById(id);el&&o.observe(el)});return()=>o.disconnect()},[])
return <header className="sticky top-0 z-50 bg-maroon-dark/90 backdrop-blur border-b border-emas/30 text-gading"><nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
<a href="#beranda" className="flex items-center gap-3"><span className="flex flex-col w-8 h-6 rounded-sm overflow-hidden border border-white/30"><i className="flex-1 bg-merah"/><i className="flex-1 bg-white"/></span><span className="font-serif font-extrabold tracking-widest text-sm md:text-base">JEJAK KEMERDEKAAN</span></a>
<ul className="hidden lg:flex gap-1 text-sm">{menu.map(([id,l])=><li key={id}><a href={'#'+id} className={`px-3 py-2 rounded-md hover:text-emas ${act===id?'text-emas border-b-2 border-emas':''}`}>{l}</a></li>)}</ul>
<button className="lg:hidden p-2" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
{open&&<ul className="lg:hidden bg-maroon-dark px-4 pb-4">{menu.map(([id,l])=><li key={id}><a onClick={()=>setOpen(false)} href={'#'+id} className={`block py-3 border-b border-white/10 ${act===id?'text-emas':''}`}>{l}</a></li>)}</ul>}</header>}
