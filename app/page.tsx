import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Agencia de Automatización IA
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Optimizamos tu negocio con agentes inteligentes y flujos de trabajo autónomos. 
          Especialistas en integraciones de WhatsApp con YCloud y n8n.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-blue-500 transition-colors">
          <h3 className="text-xl font-bold mb-2">WhatsApp Business API</h3>
          <p className="text-zinc-400 text-sm">Integración oficial para atención al cliente masiva y segura sin bloqueos.</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-blue-500 transition-colors">
          <h3 className="text-xl font-bold mb-2">Agentes de IA</h3>
          <p className="text-zinc-400 text-sm">Bots con memoria y capacidad de decisión para resolver tareas complejas.</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-blue-500 transition-colors">
          <h3 className="text-xl font-bold mb-2">Flujos n8n</h3>
          <p className="text-zinc-400 text-sm">Automatización de procesos entre tus apps favoritas sin intervención humana.</p>
        </div>
      </div>

      <footer className="max-w-5xl mx-auto border-t border-zinc-900 pt-10 text-center">
        <div className="flex justify-center gap-8 text-sm text-zinc-500 mb-4">
          <Link href="/privacidad" className="hover:text-blue-400 transition-colors">Política de Privacidad</Link>
          <Link href="/terminos" className="hover:text-blue-400 transition-colors">Términos de Servicio</Link>
        </div>
        <p className="text-xs text-zinc-600">© 2026 Agencia de Automatización - Valledupar, Colombia</p>
      </footer>
    </main>
  );
}
