import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-background text-violet-300 bg-slate-200 font-serif">
    <h1><b>home page</b></h1>
    <Header />
    <About />
    </div>
  );
}