export default function QuizQuestion({q,chosen,onPick}){const done=chosen!==undefined
return <div><h3 className="font-serif text-xl font-bold text-maroon">{q.p}</h3><div className="mt-4 space-y-2">{q.o.map((o,i)=>{let c='border-neutral-300 hover:border-merah';if(done){if(i===q.a)c='border-green-600 bg-green-50';else if(i===chosen)c='border-red-600 bg-red-50'}
return <button key={i} disabled={done} onClick={()=>onPick(i)} className={`w-full text-left p-3 rounded-lg border-2 ${c}`}>{String.fromCharCode(65+i)}. {o}</button>})}</div>
{done&&<p className="mt-4 text-sm"><b>{chosen===q.a?'Benar! ':'Kurang tepat. '}</b>{q.e}</p>}</div>}
