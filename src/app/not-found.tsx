import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><span className="eyebrow">IRNCYBER / 404</span><p className="not-found-code">404</p><h1>This route went off-grid.</h1><p>The page may have moved, or the address may be incomplete.</p><div><Link href="/"><ArrowLeft size={15} /> Back to home</Link><Link href="/blog">Read the blog <ArrowUpRight size={14} /></Link></div></main>;
}
