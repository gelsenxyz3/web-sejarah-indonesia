import {ChevronDown} from 'lucide-react'
export default function HeroSection(){return <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center text-center text-gading bg-gradient-to-br from-black via-maroon-dark to-maroon overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%,#e70013 0,transparent 40%),radial-gradient(circle at 80% 80%,#c9a24b 0,transparent 35%)'}}/>
<div className="relative px-4 max-w-4xl py-20"><p className="text-emas tracking-[.4em] text-xs mb-6">1942 — 1945</p>
<h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight">PERJALANAN INDONESIA MENUJU KEMERDEKAAN</h1>
<p className="mt-6 text-lg text-gading/80 max-w-2xl mx-auto">Menelusuri perjuangan bangsa dari masa pendudukan Jepang hingga terbentuknya pemerintahan Indonesia.</p>
<div className="mt-10 flex flex-wrap gap-4 justify-center"><a href="#jepang" className="px-7 py-3 rounded-full bg-merah hover:bg-red-700 font-semibold">Jelajahi Sejarah</a><a href="#jepang" className="px-7 py-3 rounded-full border border-emas text-emas hover:bg-emas hover:text-black font-semibold">Mulai dari 1942</a></div></div>
<ChevronDown className="absolute bottom-6 animate-bounce text-emas" aria-hidden/></section>}
