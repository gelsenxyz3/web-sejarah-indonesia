import {useState} from 'react';import {kuis} from '../data/content';import QuizQuestion from './QuizQuestion'
const shuffle=a=>[...a].sort(()=>Math.random()-.5)
export default function Quiz(){const [qs,setQs]=useState(()=>shuffle(kuis)),[i,setI]=useState(0),[ans,setAns]=useState({}),[fin,setFin]=useState(false)
const score=qs.filter((q,k)=>ans[k]===q.a).length,btn='px-5 py-2 rounded-full font-semibold disabled:opacity-40'
const reset=()=>{setQs(shuffle(kuis));setI(0);setAns({});setFin(false)}
return <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 mx-4">
{fin?<div><h3 className="font-serif text-3xl font-bold text-maroon">Skor: {score}/{qs.length}</h3><ul className="mt-4 space-y-3 text-sm">{qs.map((q,k)=><li key={k} className="border-b pb-2"><b>{k+1}. {q.p}</b><br/><span className={ans[k]===q.a?'text-green-700':'text-red-700'}>{ans[k]===q.a?'Benar':'Salah'}</span> — {q.e}</li>)}</ul><button onClick={reset} className={`${btn} mt-6 bg-merah text-white`}>Ulangi Kuis</button></div>
:<><p className="text-sm text-neutral-500 mb-2">Soal {i+1} dari {qs.length}</p><QuizQuestion q={qs[i]} chosen={ans[i]} onPick={v=>setAns({...ans,[i]:v})}/>
<div className="mt-6 flex justify-between gap-2"><button disabled={i===0} onClick={()=>setI(i-1)} className={`${btn} border border-maroon`}>Kembali</button>
{i<qs.length-1?<button disabled={ans[i]===undefined} onClick={()=>setI(i+1)} className={`${btn} bg-maroon text-white`}>Berikutnya</button>:<button disabled={Object.keys(ans).length<qs.length} onClick={()=>setFin(true)} className={`${btn} bg-merah text-white`}>Lihat Hasil</button>}</div></>}</div>}
