import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MarketingNav() {
  return <nav className="nav container">
    <Link className="brand" href="/"><span className="brandmark">FA</span> FinTech-AI <span style={{color:"#80958c",fontWeight:500}}>2026</span></Link>
    <div className="navlinks">
      <Link href="/platform">Platform</Link><Link href="/architecture">Architecture</Link><Link href="/delivery">Delivery</Link>
      <Link href="/dashboard" className="btn btn-lime">Open platform <ArrowRight size={14}/></Link>
    </div>
  </nav>
}

export function PageHero({tag,title,body}:{tag:string;title:string;body:string}) {
  return <><MarketingNav/><div className="page-hero container"><span className="eyebrow">{tag}</span><h1>{title}</h1><p>{body}</p></div></>;
}
