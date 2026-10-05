import {useState} from 'react';import {BookOpen,Flame,Users,Flag,Landmark} from 'lucide-react'
import Navbar from './components/Navbar';import HeroSection from './components/HeroSection';import SectionHeader from './components/SectionHeader';import HistoryCard from './components/HistoryCard'
import InfoCard from './components/InfoCard';import Timeline from './components/Timeline';import Gallery from './components/Gallery';import Quiz from './components/Quiz'
import ProgressBar from './components/ProgressBar';import ScrollToTop from './components/ScrollToTop';import Footer from './components/Footer'
import {jepang,organisasi,proklamasi,teks,lembaga,ringkasan} from './data/content'
const icons=[<Flag/>,<Flame/>,<Users/>]
export default function App(){const [tab,setTab]=useState('kebijakan'),[sum,setSum]=useState(0)
return <><ProgressBar/><Navbar/><main><HeroSection/>
<section id="jepang" className="py-20"><SectionHeader kicker="Bagian A · 1942–1945" title="Masa Pendudukan Jepang" desc="Dari kedatangan Jepang hingga lahirnya organisasi yang membentuk semangat kebangsaan."/>
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">{jepang.map((j,i)=><HistoryCard key={i} tag={j.d} title={j.t} short={j.s} full={j.f} icon={icons[i]}/>)}</div>
<h3 className="font-serif text-2xl font-bold text-maroon text-center mt-16 mb-6">Organisasi Bentukan Jepang</h3>
<div className="max-w-6xl mx-auto px-4"><div role="tablist" className="flex flex-wrap gap-2 justify-center mb-6">{['kebijakan','militer'].map(t=><button key={t} role="tab" aria-selected={tab===t} onClick={()=>setTab(t)} className={`px-5 py-2 rounded-full font-semibold ${tab===t?'bg-maroon text-emas':'bg-white border'}`}>{t==='kebijakan'?'Sipil & Propaganda':'Militer & Semimiliter'}</button>)}</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{organisasi.filter(o=>(['PETA','Heiho','Seinendan','Keibodan'].includes(o.n))===(tab==='militer')).map(o=><InfoCard key={o.n} title={o.n} badge={o.y}>{o.d}</InfoCard>)}</div></div></section>
<section id="proklamasi" className="py-20 bg-gradient-to-b from-maroon-dark to-maroon"><SectionHeader dark kicker="Bagian B · Agustus 1945" title="Proklamasi Kemerdekaan" desc="Rangkaian peristiwa menuju 17 Agustus 1945."/>
<Timeline items={proklamasi}/>
<div className="max-w-xl mx-auto mt-16 px-4"><div className="relative bg-[#efe3c0] text-neutral-900 p-8 rounded shadow-2xl border-4 double border-emas" style={{fontFamily:"'Special Elite',serif"}}><h3 className="text-center text-2xl font-bold mb-4">PROKLAMASI</h3>{teks.map((t,i)=><p key={i} className="mb-3">{t}</p>)}
<div className="flag absolute -top-6 -right-4 w-20 shadow-lg" aria-label="Bendera Merah Putih"><div className="h-6 bg-merah"/><div className="h-6 bg-white"/></div></div></div></section>
<section id="pemerintahan" className="py-20"><SectionHeader kicker="Bagian C · 18–29 Agustus 1945" title="Pembentukan Pemerintahan Indonesia" desc="Langkah awal berdirinya negara setelah proklamasi."/>
<div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{lembaga.map(l=><HistoryCard key={l.n} title={l.n} short={l.d} icon={<Landmark/>}/>)}</div>
<h3 className="font-serif text-2xl font-bold text-maroon text-center mt-16 mb-6">Ringkasan Perjalanan</h3>
<div className="max-w-3xl mx-auto px-4"><div className="flex flex-wrap gap-2 justify-center">{ringkasan.map((r,i)=><button key={i} onClick={()=>setSum(i)} className={`px-3 py-2 rounded-full text-sm font-semibold ${sum===i?'bg-merah text-white':'bg-white border border-emas'}`}>{r.y}</button>)}</div>
<p className="mt-6 text-center bg-white rounded-xl p-5 shadow border-l-4 border-merah"><BookOpen className="inline mr-2 text-merah" size={18}/>{ringkasan[sum].t}</p></div></section>
<section id="galeri" className="py-20 bg-white"><SectionHeader kicker="Galeri" title="Galeri Sejarah" desc="Klik kartu untuk melihat detail. Visual berupa ilustrasi, bukan foto asli."/><Gallery/></section>
<section id="kuis" className="py-20"><SectionHeader kicker="Uji Pemahaman" title="Kuis Interaktif" desc="Jawab 11 pertanyaan tentang seluruh materi."/><Quiz/></section></main><Footer/><ScrollToTop/></>}
