import TimelineItem from './TimelineItem'
export default function Timeline({items}){return <ol className="relative max-w-3xl mx-auto border-l-2 border-merah ml-4 md:mx-auto pl-6 space-y-8">{items.map((i,k)=><TimelineItem key={k} {...i}/>)}</ol>}
