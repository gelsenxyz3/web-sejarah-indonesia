import {useState} from 'react';import useReveal from '../hooks/useReveal'
export default function HistoryCard({tag,title,short,full,icon}){const [o,setO]=useState(false),r=useReveal()
return <article ref={r} className="reveal rounded-2xl bg-white shadow-lg border border-emas/20 p-6 flex flex-col"><div className="text-merah mb-3">{icon}</div>
<span className="text-xs font-semibold text-emas">{tag}</span><h3 className="font-serif text-xl font-bold text-maroon mt-1">{title}</h3><p className="mt-2 text-neutral-700">{short}</p>
{o&&full&&<p className="mt-3 text-neutral-800 border-l-4 border-merah pl-3">{full}</p>}
{full&&<button onClick={()=>setO(!o)} aria-expanded={o} className="mt-4 self-start text-sm font-semibold text-merah hover:underline">{o?'Tutup':'Baca Selengkapnya'}</button>}</article>}
