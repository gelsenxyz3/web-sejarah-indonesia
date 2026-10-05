import {useEffect} from 'react';import {X} from 'lucide-react'
export default function GalleryModal({item,onClose}){useEffect(()=>{const f=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',f);return()=>window.removeEventListener('keydown',f)},[onClose])
return <div role="dialog" aria-modal="true" aria-label={item.t} onClick={onClose} className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4">
<div onClick={e=>e.stopPropagation()} className="relative bg-gading rounded-2xl max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto">
{item.src?<img src={item.src} alt={`${item.t}: ${item.c}`} className="w-full max-h-72 object-cover"/>:<div className="h-56 bg-gradient-to-br from-maroon to-black flex items-center justify-center text-emas font-serif text-3xl px-4 text-center">{item.t}</div>}
<div className="p-6"><h3 className="font-serif text-2xl font-bold text-maroon">{item.t}</h3><p className="mt-2">{item.c}</p>
{item.src?<p className="mt-3 text-xs text-neutral-600">Sumber: {item.kredit} · Lisensi: {item.lisensi} · <a className="underline" target="_blank" rel="noreferrer" href={item.url}>Halaman sumber</a></p>
:<p className="mt-3 text-xs text-neutral-600">Ilustrasi placeholder, bukan foto asli.</p>}</div>
<button autoFocus onClick={onClose} aria-label="Tutup" className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1"><X/></button></div></div>}
