import {useEffect,useRef} from 'react'
export default function useReveal(){const r=useRef(null)
useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('show');o.disconnect()}},{threshold:.12});o.observe(el);return()=>o.disconnect()},[]);return r}
