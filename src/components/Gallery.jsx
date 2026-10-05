import {useState} from 'react';import {galeri} from '../data/content';import GalleryModal from './GalleryModal'
export default function Gallery(){const [sel,setSel]=useState(null)
return <><div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">{galeri.map((g,i)=>
<button key={i} onClick={()=>setSel(g)} className={`relative overflow-hidden text-left rounded-xl bg-gradient-to-br from-maroon to-black text-gading hover:scale-[1.03] transition focus:ring-2 focus:ring-emas h-40 flex flex-col justify-end p-4 ${i%5===0?'md:col-span-2':''}`}>
{g.src&&<img src={g.src} alt={`${g.t}: ${g.c}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover"/>}
<span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
<span className="relative font-serif font-bold">{g.t}</span><span className="relative text-xs text-gading/80">{g.c}</span></button>)}</div>
{sel&&<GalleryModal item={sel} onClose={()=>setSel(null)}/>}</>}
