import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans text-balance">
      
      {/* Navigation Bar & Logo */}
      <header className="w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Garphus Cloud Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span className="font-bold text-2xl tracking-tight text-white">Garphus<span className="text-blue-500">Cloud</span></span>
          </div>

          {/* Nav Link */}
          <a href="mailto:santiago@garphus.cloud" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:block">
            Support: santiago@garphus.cloud
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 pt-16 pb-16 md:px-24 md:pt-24 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Garphus Cloud AI
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Empowering your business with intelligent agents and autonomous workflows. 
          Official WhatsApp Business integrations powered by YCloud and n8n.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-8 pb-20 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: WhatsApp */}
        <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-green-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-zinc-100">WhatsApp Business API</h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Secure, scalable, and official customer communication channels powered by YCloud.
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Meta-approved integration</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> No ban risks for businesses</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> High-volume messaging</li>
          </ul>
        </div>

        {/* Card 2: AI Agents */}
        <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-zinc-100">Autonomous AI Agents</h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Intelligent bots with memory capabilities to solve complex tasks and streamline support.
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Natural language processing</li>
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Long-term conversation memory</li>
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Context-aware decision making</li>
          </ul>
        </div>

        {/* Card 3: n8n Workflows */}
        <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-orange-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-zinc-100">n8n Workflows</h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Seamless automation connecting your favorite apps without human intervention.
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> Multi-platform integration</li>
            <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> Custom trigger events</li>
            <li className="flex items-center gap-3"><span className="text-orange-500">✓</span> Error handling & logging</li>
          </ul>
        </div>

      </section>

      {/* Use Cases Section */}
      <section className="px-8 py-16 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Tailored Solutions For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">International Remittances</h4>
              <p className="text-sm text-zinc-400">Automated multi-currency quotes and transaction tracking via WhatsApp.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Logistics & Delivery</h4>
              <p className="text-sm text-zinc-400">Real-time shipping updates and automated dispatch coordination.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Retail & E-Commerce</h4>
              <p className="text-sm text-zinc-400">24/7 intelligent sales assistants and automated inventory alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Waitlist Option */}
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Together</h2>
        <p className="text-zinc-400 mb-8">Ready to automate your operations? Join our waitlist to start your transformation.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:santiago@garphus.cloud?subject=I%20want%20to%20automate%20my%20business" 
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* Robust Footer */}
      <footer className="border-t border-zinc-900 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left text-sm text-zinc-500">
            <p className="font-semibold text-zinc-300 mb-1">Garphus Cloud</p>
            <p>Valledupar, Cesar, Colombia</p>
            <p>© 2026 All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacidad" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terminos" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
