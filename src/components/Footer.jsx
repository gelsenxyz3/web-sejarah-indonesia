import {menu,sumber} from '../data/content'
export default function Footer(){return <footer className="bg-maroon-dark text-gading mt-0"><div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
<div><h4 className="font-serif font-bold text-emas">PERJALANAN INDONESIA MENUJU KEMERDEKAAN</h4><p className="text-sm mt-2 text-gading/70">Website edukasi sejarah interaktif tentang pendudukan Jepang, Proklamasi, dan pembentukan pemerintahan Indonesia.</p></div>
<div><h4 className="font-semibold text-emas">Navigasi</h4><ul className="text-sm mt-2 space-y-1">{menu.map(([id,l])=><li key={id}><a className="hover:text-emas" href={'#'+id}>{l}</a></li>)}</ul></div>
<div><h4 className="font-semibold text-emas">Sumber Referensi</h4><ul className="text-sm mt-2 space-y-1">{sumber.map(([l,u])=><li key={u}><a className="hover:text-emas" target="_blank" rel="noreferrer" href={u}>{l}</a></li>)}</ul></div></div>
<div className="border-t border-white/10 py-6 text-center text-sm"><p>Dibuat oleh: GELSEN KRISTOVAN SALELEUBAJA</p><p className="text-emas">RPL | WEB DEVELOPMENT</p><p className="text-gading/60 mt-1">Proyek ASTS — Perjalanan Indonesia Menuju Kemerdekaan · 2026</p></div></footer>}
