import useReveal from '../hooks/useReveal'
export default function SectionHeader({kicker,title,desc,dark}){const r=useReveal()
return <div ref={r} className="reveal text-center max-w-2xl mx-auto mb-12 px-4"><p className="text-emas tracking-[.3em] text-xs font-semibold uppercase">{kicker}</p>
<h2 className={`font-serif text-3xl md:text-5xl font-extrabold mt-2 ${dark?'text-gading':'text-maroon'}`}>{title}</h2><div className="w-16 h-1 bg-merah mx-auto my-4"/><p className={dark?'text-gading/80':'text-neutral-700'}>{desc}</p></div>}
